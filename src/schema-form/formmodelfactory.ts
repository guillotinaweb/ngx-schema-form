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
		this.createFields(formModel, jsonSchema);

		return formModel;

	}

	private createFields(formModel: FormModel, jsonSchema: any) {
		for (let fieldId in jsonSchema.properties) {
			let newField = this.createFieldModel(fieldId, formModel, jsonSchema);
			formModel.addField(newField)
		}
	}

	private createFieldModel(fieldId: string, formModel: FormModel, jsonSchema: any): FieldModel {
		let fieldSchema = jsonSchema.properties[fieldId];
		let fieldModel = new FieldModel(
			this.schemaValidatorFactory,
			fieldId,
			fieldSchema,
			fieldSchema.widget,
			false,
			jsonSchema.required.indexOf(fieldId) > -1
		);

		return fieldModel;
	}

}
