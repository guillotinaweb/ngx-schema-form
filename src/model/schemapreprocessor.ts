import { isBlank } from './utils';

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

export class SchemaPreprocessor {

  static preprocess(jsonSchema: any, path = '/'): any {
    jsonSchema = jsonSchema || {};
    if (jsonSchema.type === 'object') {
      SchemaPreprocessor.checkProperties(jsonSchema, path);
      SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
      SchemaPreprocessor.normalizeRequired(jsonSchema);
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

  private static checkFieldsUsage(jsonSchema, path: string) {
    let fieldsId: string[] = Object.keys(jsonSchema.properties);
    let usedFields = {};
    for (let fieldset of jsonSchema.fieldsets) {
      for (let fieldId of fieldset.fields) {
        if (usedFields[fieldId] === undefined ) {
          usedFields[fieldId] = [];
        }
        usedFields[fieldId].push(fieldset.id);
      }
    }

    for (let fieldId of fieldsId) {
      if (usedFields.hasOwnProperty(fieldId)) {
        if (usedFields[fieldId].length > 1) {
          schemaError(`${fieldId} is referenced by more than one fieldset: ${usedFields[fieldId]}`, path);
        }
        delete usedFields[fieldId];
      } else if (jsonSchema.required.indexOf(fieldId) > -1 ) {
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

  private static createFieldsets(jsonSchema) {
    jsonSchema.order = Object.keys(jsonSchema.properties);
    SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
  }

  private static replaceOrderByFieldsets(jsonSchema) {
    jsonSchema.fieldsets = [{
      id: 'fieldset-default',
      title: jsonSchema.title || '',
      description : jsonSchema.description || '',
      name : jsonSchema.name || '',
      fields: jsonSchema.order
    }];
    delete jsonSchema.order;
  }

  private static normalizeWidget(fieldSchema: any) {
    let widget = fieldSchema.widget;
    if (widget === undefined) {
      widget = {'id': fieldSchema.type};
    } else if (typeof widget === 'string') {
      widget = {'id': widget};
    }
    fieldSchema.widget = widget;
  }

  private static normalizeRequired(jsonSchema) {
    if (jsonSchema.type === 'object' && jsonSchema.required === undefined) {
      jsonSchema.required = Object.keys(jsonSchema.properties);
    }
  }

  private static checkItems(jsonSchema, path) {
    if (jsonSchema.items === undefined) {
      schemaError('No \'items\' property in array', path);
    }
  }

  private static recursiveCheck(jsonSchema, path: string) {
    if (jsonSchema.type === 'object') {
      for (let fieldId in jsonSchema.properties) {
        if (jsonSchema.properties.hasOwnProperty(fieldId)) {
          let fieldSchema = jsonSchema.properties[fieldId];
          SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
        }
      }

    } else if (jsonSchema.type === 'array') {
      SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
    }
  }
}

