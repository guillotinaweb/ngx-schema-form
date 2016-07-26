import { FormControl } from "@angular/forms";
import { FieldModel } from "./fieldmodel";
import { Validator } from "./validator";

export class FormModel {

	private fieldModels: {[fieldId:string]: FieldModel} = {};
	private controls: {[fieldId:string]: FormControl} = {};

	constructor() {}
	getField(fieldId: string): FieldModel {
		return this.fieldModels[fieldId]; 
	}

	addField(fieldModel: FieldModel) {
		this.fieldModels[fieldModel.id] = fieldModel;
		this.controls[fieldModel.id] = fieldModel.control;
	}

	get fieldIds() {
		return Object.keys(this.fieldModels);
	}

	getValue() {
		let value = {};
		for (let fieldId in this.fieldModels) {
			if (this.fieldModels[fieldId].visible) {
				value[fieldId] = this.fieldModels[fieldId].getValue();
			}
		}
		return value;
	}

	setCustomValidator(fieldId: string, validator: Validator) {
		this.fieldModels[fieldId].setCustomValidator( (control) => {
			if (this.fieldModels[fieldId].visible) {
				return validator(control.value, this.getValue(), this.controls);
			}
		});
	}
}
