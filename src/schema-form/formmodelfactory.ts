import { Injectable } from "@angular/core";
import { FormModel } from "./formmodel";
import { FieldModel } from "./fieldmodel";
import { SchemaPreprocessor } from "./schemapreprocessor";
import { SchemaValidatorFactory } from "./schemavalidatorfactory";
@Injectable()
export class FormModelFactory {

	constructor(private schemaValidatorFactory: SchemaValidatorFactory) {
	}

	createFromSchema(jsonSchema) {
		SchemaPreprocessor.preprocess(jsonSchema);
		let formModel = new FormModel();
		formModel.addField( this.createDummyField("test"));
		formModel.addField( this.createDummyField("test2"));
		this.createFields(formModel, jsonSchema);
		return formModel;

	}

	private createDummyField(name: string) {
		return new FieldModel(this.schemaValidatorFactory, name,{type:"string"},{id:"text"},true,true);
	}

	private createFields(formModel: FormModel, jsonSchema: any) {
		for (let fieldId in jsonSchema.properties) {
			let newField = this.createFieldModel(fieldId, formModel, jsonSchema);
			formModel.addField(newField)
		}
	}

	//TODO extract controls and validation
	private createFieldModel(fieldId: string, formModel: FormModel, jsonSchema: any): FieldModel {
		let fieldSchema = jsonSchema.properties[fieldId];
		return new FieldModel(this.schemaValidatorFactory, fieldId, fieldSchema, fieldSchema.widget, false, jsonSchema.required.indexOf(fieldId) > -1);
	}

}
