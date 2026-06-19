import { isBlank } from './utils';
import { Injectable } from '@angular/core';
import { ISchema } from './ISchema';
import { jsonSchemaSupportsDependentApplicators } from './json-schema-version';
import { FieldType } from '../template-schema/field/field';

function formatMessage(message, path) {
  return `Parsing error on ${path}: ${message}`;
}

function schemaError(message, path): void {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}

function schemaWarning(message, path): void {
  let mesg = formatMessage(message, path);
  throw new Error(mesg);
}

@Injectable()
export class SchemaPreprocessor {

  /**
   * @param rootSchema Document root for {@code $schema} (draft 2019-09 / 2020-12 {@code dependentRequired} /
   * {@code dependentSchemas}); omit on the outermost call so the first {@code jsonSchema} is used.
   */
  static preprocess(jsonSchema: ISchema, path = '/', rootSchema?: ISchema): any {
    jsonSchema = jsonSchema || {};
    const root = rootSchema ?? jsonSchema;
    SchemaPreprocessor.normalizeExtensions(jsonSchema);
    SchemaPreprocessor.mirrorDraftKeywords(jsonSchema);
    if (jsonSchema.type === 'object') {
      SchemaPreprocessor.checkProperties(jsonSchema, path);
      SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path, root);
    } else if (jsonSchema.type === 'array') {
      SchemaPreprocessor.checkItems(jsonSchema, path);
    }
    SchemaPreprocessor.normalizeWidget(jsonSchema);
    SchemaPreprocessor.recursiveCheck(jsonSchema, path, root);
  }

  private static checkProperties(jsonSchema, path: string) {
    if (isBlank(jsonSchema.properties)) {
      jsonSchema.properties = {};
      schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
    }
  }

  private static checkAndCreateFieldsets(jsonSchema: any, path: string, root: ISchema) {
    if (jsonSchema.fieldsets === undefined) {
      if (jsonSchema.order !== undefined) {
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
      } else {
        SchemaPreprocessor.createFieldsets(jsonSchema);
      }
    }
    SchemaPreprocessor.checkFieldsUsage(jsonSchema, path, root);
  }

  /** {@code allOf} or underscore-prefixed copy used in some examples. */
  private static getAllOfArray(n: Record<string, unknown>): unknown[] | undefined {
    if (Array.isArray(n.allOf)) {
      return n.allOf as unknown[];
    }
    if (Array.isArray(n._allOf)) {
      return n._allOf as unknown[];
    }
    return undefined;
  }

  private static mergeDependentRequiredObject(dr: unknown, mergeInto: Record<string, string[]>): void {
    if (!dr || typeof dr !== 'object' || Array.isArray(dr)) {
      return;
    }
    for (const trigger of Object.keys(dr as object)) {
      const deps = (dr as Record<string, unknown>)[trigger];
      if (!Array.isArray(deps)) {
        continue;
      }
      if (!mergeInto[trigger]) {
        mergeInto[trigger] = [];
      }
      for (const d of deps) {
        if (typeof d === 'string' && mergeInto[trigger].indexOf(d) === -1) {
          mergeInto[trigger].push(d);
        }
      }
    }
  }

  /** Merges {@code required} from each {@code dependentSchemas} subschema (same trigger semantics as {@code dependentRequired}). */
  private static mergeDependentSchemasRequiredObject(ds: unknown, mergeInto: Record<string, string[]>): void {
    if (!ds || typeof ds !== 'object' || Array.isArray(ds)) {
      return;
    }
    for (const trigger of Object.keys(ds as object)) {
      const sub = (ds as Record<string, unknown>)[trigger];
      if (!sub || typeof sub !== 'object' || Array.isArray(sub)) {
        continue;
      }
      const req = (sub as { required?: unknown }).required;
      if (!Array.isArray(req)) {
        continue;
      }
      if (!mergeInto[trigger]) {
        mergeInto[trigger] = [];
      }
      for (const name of req) {
        if (typeof name === 'string' && mergeInto[trigger].indexOf(name) === -1) {
          mergeInto[trigger].push(name);
        }
      }
    }
  }

  /**
   * Merges every {@code dependentRequired} / {@code dependentSchemas} map on this node and under {@code allOf},
   * so nested applicators are reflected in fieldset and widget metadata.
   * Also merges underscore-prefixed copies and walks {@code _allOf} when present.
   */
  private static collectMergedDependentApplicators(
    node: unknown,
    mergeInto: Record<string, string[]>,
    visited: Set<unknown>,
    supportsDependentApplicators: boolean,
  ): void {
    if (!supportsDependentApplicators || !node || typeof node !== 'object' || visited.has(node)) {
      return;
    }
    visited.add(node);
    const n = node as Record<string, unknown>;
    SchemaPreprocessor.mergeDependentRequiredObject(n.dependentRequired, mergeInto);
    SchemaPreprocessor.mergeDependentRequiredObject(n._dependentRequired, mergeInto);
    SchemaPreprocessor.mergeDependentSchemasRequiredObject(n.dependentSchemas, mergeInto);
    SchemaPreprocessor.mergeDependentSchemasRequiredObject(n._dependentSchemas, mergeInto);
    const allOf = SchemaPreprocessor.getAllOfArray(n);
    if (Array.isArray(allOf)) {
      for (const sub of allOf) {
        SchemaPreprocessor.collectMergedDependentApplicators(sub, mergeInto, visited, true);
      }
    }
  }

  private static getMergedDependentApplicatorsMap(jsonSchema: ISchema, root: ISchema): Record<string, string[]> {
    const out: Record<string, string[]> = {};
    const supports = jsonSchemaSupportsDependentApplicators(root.$schema);
    SchemaPreprocessor.collectMergedDependentApplicators(jsonSchema, out, new Set(), supports);
    return out;
  }

  /** Property names that appear as a trigger or dependent in merged {@code dependentRequired} / {@code dependentSchemas}. */
  private static dependentApplicatorsParticipatingPropertyNames(jsonSchema: ISchema, root: ISchema): Set<string> {
    const names = new Set<string>();
    const map = SchemaPreprocessor.getMergedDependentApplicatorsMap(jsonSchema, root);
    for (const trigger of Object.keys(map)) {
      names.add(trigger);
      const deps = map[trigger];
      if (Array.isArray(deps)) {
        for (const d of deps) {
          if (typeof d === 'string') {
            names.add(d);
          }
        }
      }
    }
    return names;
  }

  /**
   * Annotates properties that are dependent targets with {@code dependentRequiredWhen}: trigger keys
   * whose presence implies this property is required (for widgets / UX). Sources: {@code dependentRequired} and
   * {@code required} inside {@code dependentSchemas} (draft 2019-09+).
   */
  private static applyDependentApplicatorsMetadata(jsonSchema: ISchema, root: ISchema): void {
    const props = jsonSchema.properties;
    if (!props) {
      return;
    }
    const map = SchemaPreprocessor.getMergedDependentApplicatorsMap(jsonSchema, root);
    const triggersByDependent: Record<string, string[]> = {};
    for (const trigger of Object.keys(map)) {
      const deps = map[trigger];
      if (!Array.isArray(deps)) {
        continue;
      }
      for (const dep of deps) {
        if (typeof dep !== 'string') {
          continue;
        }
        if (!triggersByDependent[dep]) {
          triggersByDependent[dep] = [];
        }
        if (triggersByDependent[dep].indexOf(trigger) === -1) {
          triggersByDependent[dep].push(trigger);
        }
      }
    }
    for (const dep of Object.keys(triggersByDependent)) {
      if (props[dep]) {
        props[dep].dependentRequiredWhen = triggersByDependent[dep];
      }
    }
  }

  /**
   * Visits {@code if}/{@code then}/{@code else} on {@code root} itself and under {@code allOf} / {@code _allOf}.
   */
  private static forEachIfThenElseApplicator(
    root: unknown,
    visit: (ift: { if: unknown; then?: unknown; else?: unknown }) => void,
    visited: Set<unknown>,
  ): void {
    if (!root || typeof root !== 'object' || visited.has(root)) {
      return;
    }
    visited.add(root);
    const n = root as Record<string, unknown>;

    if (n.if !== undefined && (n.then !== undefined || n.else !== undefined)) {
      visit({ if: n.if, then: n.then, else: n.else });
      if (n.then && typeof n.then === 'object') {
        SchemaPreprocessor.forEachIfThenElseApplicator(n.then, visit, visited);
      }
      if (n.else && typeof n.else === 'object') {
        SchemaPreprocessor.forEachIfThenElseApplicator(n.else, visit, visited);
      }
    }

    const allOf = SchemaPreprocessor.getAllOfArray(n);
    if (!Array.isArray(allOf)) {
      return;
    }
    for (const item of allOf) {
      if (item && typeof item === 'object') {
        SchemaPreprocessor.forEachIfThenElseApplicator(item, visit, visited);
      }
    }
  }

  /**
   * For {@code if} evaluation, ensure keys under {@code if.properties} are required on the instance;
   * otherwise a missing property can make {@code if} pass vacuously and {@code then} always applies.
   */
  private static strengthenIfSchemaForApplicator(ifSchema: unknown): unknown {
    if (!ifSchema || typeof ifSchema !== 'object' || Array.isArray(ifSchema)) {
      return ifSchema;
    }
    const s = JSON.parse(JSON.stringify(ifSchema)) as Record<string, unknown>;
    const props = s.properties;
    if (!props || typeof props !== 'object' || Array.isArray(props)) {
      return s;
    }
    const propKeys = Object.keys(props as object);
    if (propKeys.length === 0) {
      return s;
    }
    const req = Array.isArray(s.required) ? [...(s.required as string[])] : [];
    for (const k of propKeys) {
      if (req.indexOf(k) === -1) {
        req.push(k);
      }
    }
    s.required = req;
    return s;
  }

  private static appendConditionalRule(propSchema: ISchema, ifSchema: unknown, when: 'ifMatches' | 'ifFails'): void {
    if (!propSchema.conditionalRequiredRules) {
      propSchema.conditionalRequiredRules = [];
    }
    propSchema.conditionalRequiredRules.push({
      if: SchemaPreprocessor.strengthenIfSchemaForApplicator(ifSchema) as object,
      when,
    });
  }

  private static applyIfThenElseMetadata(jsonSchema: ISchema): void {
    const props = jsonSchema.properties;
    if (!props) {
      return;
    }
    SchemaPreprocessor.forEachIfThenElseApplicator(
      jsonSchema,
      ({ if: ifSchema, then, else: els }) => {
        const thenReq = then && typeof then === 'object' && Array.isArray((then as { required?: unknown }).required)
          ? (then as { required: string[] }).required
          : [];
        const elseReq = els && typeof els === 'object' && Array.isArray((els as { required?: unknown }).required)
          ? (els as { required: string[] }).required
          : [];
        for (const name of thenReq) {
          if (typeof name === 'string' && props[name]) {
            SchemaPreprocessor.appendConditionalRule(props[name], ifSchema, 'ifMatches');
          }
        }
        for (const name of elseReq) {
          if (typeof name === 'string' && props[name]) {
            SchemaPreprocessor.appendConditionalRule(props[name], ifSchema, 'ifFails');
          }
        }
      },
      new Set(),
    );
  }

  /** Property names listed in {@code then.required} or {@code else.required} of any visited if/then/else. */
  private static ifThenElseParticipatingPropertyNames(jsonSchema: ISchema): Set<string> {
    const names = new Set<string>();
    const props = jsonSchema.properties;
    if (!props) {
      return names;
    }
    SchemaPreprocessor.forEachIfThenElseApplicator(
      jsonSchema,
      ({ then, else: els }) => {
        const thenReq = then && typeof then === 'object' && Array.isArray((then as { required?: unknown }).required)
          ? (then as { required: string[] }).required
          : [];
        const elseReq = els && typeof els === 'object' && Array.isArray((els as { required?: unknown }).required)
          ? (els as { required: string[] }).required
          : [];
        for (const name of [...thenReq, ...elseReq]) {
          if (typeof name === 'string' && props[name]) {
            names.add(name);
          }
        }
      },
      new Set(),
    );
    return names;
  }

  private static checkFieldsUsage(jsonSchema: ISchema, path: string, root: ISchema) {
    SchemaPreprocessor.applyDependentApplicatorsMetadata(jsonSchema, root);
    SchemaPreprocessor.applyIfThenElseMetadata(jsonSchema);

    const fieldsId: string[] = Object.keys(jsonSchema.properties);
    const usedFields: Record<string, string[]> = {};
    for (const fieldset of jsonSchema.fieldsets) {
      for (const fieldId of fieldset.fields) {
        if (usedFields[fieldId] === undefined) {
          usedFields[fieldId] = [];
        }
        usedFields[fieldId].push(fieldset.id);
      }
    }

    const requiredList: string[] = Array.isArray(jsonSchema.required) ? jsonSchema.required : [];
    const dependentApplicatorsNames = SchemaPreprocessor.dependentApplicatorsParticipatingPropertyNames(jsonSchema, root);
    const ifThenElseNames = SchemaPreprocessor.ifThenElseParticipatingPropertyNames(jsonSchema);

    for (const fieldId of fieldsId) {
      const unconditionalRequired = requiredList.indexOf(fieldId) > -1;
      const participatesInDependentApplicators = dependentApplicatorsNames.has(fieldId);
      const participatesInIfThenElse = ifThenElseNames.has(fieldId);
      const mustAppearInFieldset =
        unconditionalRequired || participatesInDependentApplicators || participatesInIfThenElse;

      if (unconditionalRequired && jsonSchema.properties[fieldId]) {
        jsonSchema.properties[fieldId].isRequired = true;
      }

      if (usedFields.hasOwnProperty(fieldId)) {
        if (usedFields[fieldId].length > 1) {
          schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
        }
        delete usedFields[fieldId];
      } else if (mustAppearInFieldset) {
        schemaError(
          `${fieldId} is a required field but it is not referenced as part of an 'order' or a 'fieldset' property`,
          path,
        );
      } else {
        delete jsonSchema.properties[fieldId];
        schemaWarning(`Removing unreferenced field ${fieldId}`, path);
      }
    }

    for (const remainingfieldsId in usedFields) {
      if (usedFields.hasOwnProperty(remainingfieldsId)) {
        schemaWarning(`Referencing non-existent field ${remainingfieldsId} in one or more fieldsets`, path);
      }
    }
  }

  private static createFieldsets(jsonSchema: ISchema) {
    jsonSchema.order = Object.keys(jsonSchema.properties);
    SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
  }

  private static replaceOrderByFieldsets(jsonSchema: ISchema) {
    jsonSchema.fieldsets = [{
      id: 'fieldset-default',
      title: jsonSchema.title || '',
      description: jsonSchema.description || '',
      name: jsonSchema.name || '',
      fields: jsonSchema.order
    }];
    delete jsonSchema.order;
  }

  private static normalizeWidget(fieldSchema: ISchema) {
    let widget = fieldSchema.widget;
    if (widget === undefined) {
      widget = {'id': fieldSchema.type};
    } else if (typeof widget === 'string') {
      widget = {'id': widget};
    }
    fieldSchema.widget = widget;
  }

  /**
   * Draft 2020-12: tuple form uses {@code prefixItems} + optional single-schema {@code items} for further elements;
   * older drafts use tuple {@code items} + {@code additionalItems}. All shapes are accepted without rewriting the schema.
   */
  private static checkItems(jsonSchema: ISchema, path) {
    const prefix = (jsonSchema as { prefixItems?: unknown }).prefixItems;
    const items = jsonSchema.items;
    const hasListItems = items !== undefined && typeof items === 'object' && !Array.isArray(items);
    const tupleFromPrefix = Array.isArray(prefix) && prefix.length > 0;
    const tupleFromItems = Array.isArray(items) && items.length > 0;
    if (!hasListItems && !tupleFromPrefix && !tupleFromItems) {
      schemaError("Array schema needs non-array 'items', tuple 'items', or non-empty 'prefixItems'", path);
    }
  }

  /**
   * Draft 2020-12 renames: {@code id}↔{@code $id}, {@code definitions}↔{@code $defs}. Fills the sibling keyword when
   * only one is set so {@code $ref} targets and ngx traversal work for both styles (z-schema MIGRATION.md).
   */
  private static mirrorDraftKeywords(schema: ISchema): void {
    const s = schema as Record<string, unknown>;
    if (s['id'] != null && s['$id'] == null) {
      s['$id'] = s['id'];
    }
    if (s['$id'] != null && s['id'] == null) {
      s['id'] = s['$id'];
    }
    const defs = s['$defs'] as Record<string, ISchema> | undefined;
    const legacy = schema.definitions as Record<string, ISchema> | undefined;
    if (legacy && !defs) {
      s['$defs'] = legacy;
    }
    if (defs && !legacy) {
      (schema as { definitions?: Record<string, ISchema> }).definitions = defs;
    }
  }

  /** Merges {@code $defs} (preferred on name clash) with legacy {@code definitions} for one preprocess pass per name. */
  private static getMergedDefinitionEntries(
    jsonSchema: ISchema,
  ): Array<{ fieldId: string; fieldSchema: ISchema; refPaths: string[] }> {
    const byId = new Map<string, { fieldSchema: ISchema; refPaths: string[] }>();
    const fromDefs = (jsonSchema as { $defs?: Record<string, ISchema> }).$defs;
    const fromLegacy = jsonSchema.definitions;
    if (fromDefs) {
      for (const fieldId of Object.keys(fromDefs)) {
        byId.set(fieldId, {
          fieldSchema: fromDefs[fieldId],
          refPaths: [`#/$defs/${fieldId}`, `#/definitions/${fieldId}`],
        });
      }
    }
    if (fromLegacy) {
      for (const fieldId of Object.keys(fromLegacy)) {
        if (!byId.has(fieldId)) {
          byId.set(fieldId, {
            fieldSchema: fromLegacy[fieldId],
            refPaths: [`#/definitions/${fieldId}`, `#/$defs/${fieldId}`],
          });
        }
      }
    }
    return [...byId.entries()].map(([fieldId, v]) => ({ fieldId, fieldSchema: v.fieldSchema, refPaths: v.refPaths }));
  }

  private static recursiveCheck(jsonSchema: ISchema, path: string, root: ISchema) {
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          let fieldSchema = jsonSchema.properties[fieldId];
          SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/', root);
        }
      }
      for (const { fieldId, fieldSchema, refPaths } of SchemaPreprocessor.getMergedDefinitionEntries(jsonSchema)) {
        SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, refPaths);
        SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/', root);
      }
    } else if (jsonSchema.type === 'array') {
      const prefixItems = (jsonSchema as { prefixItems?: ISchema[] }).prefixItems;
      if (Array.isArray(prefixItems) && prefixItems.length > 0) {
        for (let i = 0; i < prefixItems.length; i++) {
          SchemaPreprocessor.preprocess(prefixItems[i], path + '*/', root);
        }
      } else if (Array.isArray(jsonSchema.items)) {
        for (let i = 0; i < jsonSchema.items.length; i++) {
          SchemaPreprocessor.preprocess(jsonSchema.items[i], path + '*/', root);
        }
      } else if (jsonSchema.items !== undefined) {
        SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/', root);
      }
      if (jsonSchema.additionalItems) {
        SchemaPreprocessor.preprocess(jsonSchema.additionalItems, path + '*/', root);
      }
    }
  }

  private static removeRecursiveRefProperties(jsonSchema: ISchema, definitionPaths: string | string[]) {
    const paths = typeof definitionPaths === 'string' ? [definitionPaths] : definitionPaths;
    // to avoid infinite loop
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          const prop = jsonSchema.properties[fieldId];
          if (prop.$ref && paths.indexOf(prop.$ref) >= 0) {
            delete jsonSchema.properties[fieldId];
          } else if (prop.type === 'object') {
            SchemaPreprocessor.removeRecursiveRefProperties(prop, paths);
          }
        }
      }
    }
  }
  
  /**
   * Enables alias names for JSON schema extensions.
   *
   * Copies the value of each alias JSON schema property
   * to the JSON schema property of ngx-schema-form.
   *
   * @param schema JSON schema to enable alias names.
   */
  private static normalizeExtensions(schema: ISchema): void {
    const extensions = [
        { name: "fieldsets", regex: /^x-?field-?sets$/i },
        { name: "widget",    regex: /^x-?widget$/i },
        { name: "visibleIf", regex: /^x-?visible-?if$/i }
    ];
    const keys = Object.keys(schema);
    for (let i = 0; i < keys.length; ++i) {
      let k = keys[i];
      let e = extensions.find(e => !!k.match(e.regex));
      if (e) {
        let v = schema[k];
        let copy = JSON.parse(JSON.stringify(v));
        schema[e.name] = copy;
      }
    }
  }
}

