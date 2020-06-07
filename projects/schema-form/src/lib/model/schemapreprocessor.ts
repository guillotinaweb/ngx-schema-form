import {isBlank} from './utils';
import {Injectable} from '@angular/core';
import {ISchema} from './ISchema';
import {FieldType} from '../template-schema/field/field';

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

  static preprocess(jsonSchema: ISchema, path = '/'): any {
    jsonSchema = jsonSchema || {};
    SchemaPreprocessor.normalizeExtensions(jsonSchema);
    if (jsonSchema.type === 'object') {
      SchemaPreprocessor.checkProperties(jsonSchema, path);
      SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
    } else if (jsonSchema.type === 'array') {
      SchemaPreprocessor.checkItems(jsonSchema, path);
    }
    SchemaPreprocessor.normalizeWidget(jsonSchema);
    SchemaPreprocessor.recursiveCheck(jsonSchema, path);
  }

  private static checkProperties(jsonSchema, path: string) {
    if (isBlank(jsonSchema.properties)) {
      jsonSchema.properties = {};
      schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
    }
  }

  private static checkAndCreateFieldsets(jsonSchema: any, path: string) {
    if (jsonSchema.fieldsets === undefined) {
      if (jsonSchema.order !== undefined) {
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
      } else {
        SchemaPreprocessor.createFieldsets(jsonSchema);
      }
    }
    SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
  }

  private static checkFieldsUsage(jsonSchema: ISchema, path: string) {
    let fieldsId: string[] = Object.keys(jsonSchema.properties);
    let usedFields = {};
    for (let fieldset of jsonSchema.fieldsets) {
      for (let fieldId of fieldset.fields) {
        if (usedFields[fieldId] === undefined) {
          usedFields[fieldId] = [];
        }
        usedFields[fieldId].push(fieldset.id);
      }
    }

    for (const fieldId of fieldsId) {
      const isRequired = jsonSchema.required && jsonSchema.required.indexOf(fieldId) > -1;
      if (isRequired && jsonSchema.properties[fieldId]) {
        jsonSchema.properties[fieldId].isRequired = true;
      }
      if (usedFields.hasOwnProperty(fieldId)) {
        if (usedFields[fieldId].length > 1) {
          schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
        }
        delete usedFields[fieldId];
      } else if (isRequired) {
        schemaError(`${fieldId} is a required field but it is not referenced as part of a 'order' or a 'fieldset' property`, path);
      } else {
        delete jsonSchema[fieldId];
        schemaWarning(`Removing unreferenced field ${fieldId}`, path);
      }
    }

    for (let remainingfieldsId in usedFields) {
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

  private static checkItems(jsonSchema: ISchema, path) {
    if (jsonSchema.items === undefined) {
      schemaError('No \'items\' property in array', path);
    }
  }

  private static recursiveCheck(jsonSchema: ISchema, path: string) {
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          let fieldSchema = jsonSchema.properties[fieldId];
          SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
        }
      }
      if (jsonSchema.hasOwnProperty('definitions')) {
        for (let fieldId in jsonSchema.definitions) {
          if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
            let fieldSchema = jsonSchema.definitions[fieldId];
            SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, `#/definitions/${fieldId}`);
            SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
          }
        }
      }
    } else if (jsonSchema.type === 'array') {
      SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
    }
  }

  private static removeRecursiveRefProperties(jsonSchema: ISchema, definitionPath) {
    // to avoid infinite loop
    if (jsonSchema.type === FieldType.Object) {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          if (jsonSchema.properties[fieldId].$ref
            && jsonSchema.properties[fieldId].$ref === definitionPath) {
            delete jsonSchema.properties[fieldId];
          } else if (jsonSchema.properties[fieldId].type === 'object') {
            SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
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

