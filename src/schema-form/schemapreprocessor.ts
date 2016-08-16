import { isBlank } from "./utils"

export class SchemaPreprocessor {

	static preprocess(jsonSchema: any, path: string = "/"): any {
		jsonSchema = jsonSchema || {};
		SchemaPreprocessor.checkProperties(jsonSchema,path);
		SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
		SchemaPreprocessor.normalizeAllWidgets(jsonSchema);
		SchemaPreprocessor.normalizeRequired(jsonSchema);
		SchemaPreprocessor.recursiveCheck(jsonSchema, path);
	}

	private static checkProperties(jsonSchema, path: string) {
		if (isBlank(jsonSchema.properties)) {
			jsonSchema.properties = {};
			console.log(path+": Provided json schema does not contain a 'properties' entry. Schema will be empty");
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
					throw path+": "+fieldId + " is referenced by more than one fieldset: "+usedFields[fieldId];
				}
				delete usedFields[fieldId];
			} else if (jsonSchema.required.indexOf(fieldId) > -1 ) {
				throw path+": "+fieldId+ " is a required field but it is not referenced as part of a 'order' or a 'fieldset' property";
			} else {
				delete jsonSchema[fieldId];
				console.log(path+": Removing unreferenced field '" + fieldId + "'");
			}
		}
		
		for (let remainingfieldsId in usedFields) {
			console.log(path+": Referencing non-existent field '" + remainingfieldsId + "' in one or more fieldsets");
		}
	}
	private static createFieldsets(jsonSchema) {
		jsonSchema.order = Object.keys(jsonSchema.properties);
		SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
	}
	private static replaceOrderByFieldsets(jsonSchema){
		jsonSchema.fieldsets = [{
			id: "fieldset-default",
			title: jsonSchema.description || "",
			fields: jsonSchema.order
		}];
		delete jsonSchema.order;
	}
	
	private static normalizeAllWidgets(jsonSchema) {
		for (let fieldId in jsonSchema.properties) {
			let fieldSchema = jsonSchema.properties[fieldId];
			SchemaPreprocessor.normalizeWidget(fieldSchema);
		}
	}
	
	private static normalizeWidget(fieldSchema: any) {
		let widget = fieldSchema.widget;
		if (widget === undefined && fieldSchema.type !== "object") {
			widget = {"id": fieldSchema.type};
		} else if (typeof widget === "string") {
			widget = {"id": widget};
		}
		fieldSchema.widget = widget;
	}

	private static normalizeRequired(jsonSchema) {
		if (jsonSchema.required === undefined) {
			jsonSchema.required = [];
		}
	}
	
	private static recursiveCheck(jsonSchema, path: string) {
		for (let fieldId in jsonSchema.properties ) {
			let fieldSchema = jsonSchema.properties[fieldId];
			
			if (fieldSchema.type === "object") {
				SchemaPreprocessor.preprocess(fieldSchema, path+fieldId+"/");
			}
		}
	}
}
