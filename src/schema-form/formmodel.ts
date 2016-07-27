import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

import { FieldModel } from "./fieldmodel";
import { Validator } from "./validator";

export class FormModel {

	private fieldModels: {[fieldId:string]: FieldModel} = {};
	private controls: {[fieldId:string]: FormControl} = {};
	public change: EventEmitter<any> = new EventEmitter();
	constructor() {}

	getField(fieldId: string): FieldModel {
		return this.fieldModels[fieldId];
	}

	addField(fieldModel: FieldModel) {
		this.fieldModels[fieldModel.id] = fieldModel;
		this.controls[fieldModel.id] = fieldModel.control;
		fieldModel.change.subscribe( (event) => {this.onFieldValueChanged(event)});
	}

	get fieldIds() {
		let keys = Object.keys(this.fieldModels);
		return keys;
	}

	get value() {
		let value = {};
		for (let fieldId in this.fieldModels) {
			if (this.fieldModels[fieldId].visible) {
				value[fieldId] = this.fieldModels[fieldId].value;
			}
		}
		return value;
	}

	set value(o: any) {
		this.reset();
		for (let fieldId in o) {
			if (this.getField(fieldId) !== undefined) {
				this.getField(fieldId).value = o[fieldId];
			}
		}
	}

	setCustomValidator(fieldId: string, validator: Validator) {
		this.fieldModels[fieldId].setCustomValidator( (control) => {
			if (this.fieldModels[fieldId].visible) {
				return validator(control.value, this.value, this.controls);
			}
		});
	}

	reset() {
		for (let fieldId in this.fieldModels) {
			this.fieldModels[fieldId].reset();
		}
		//this.updateFieldsVisibility();
	}

	private onFieldValueChanged(event) {
		this.change.emit({source: this, value: this.value});
		console.log("test");
		this.updateFieldsVisibility();
	}

	private updateFieldsVisibility() {
		for (let fieldIdx of this.fieldIds) {
			let field = this.getField(fieldIdx);

			if (field.settings.hasOwnProperty("visibleIf")) {
				this.updateFieldVisibility(field);
			} else {
				field.visible = true;
			}
		}
	}

	private updateFieldVisibility(field) {
		let visibleIf = field.settings.visibleIf;
		for (let conditionFieldId in visibleIf) {
			if (this.getField(conditionFieldId).visible) {
				let values = visibleIf[conditionFieldId];
				let value = this.getField(conditionFieldId).value;

				if (values.indexOf(value) > -1) {
					field.visible = true;
					return;
				}
			}
		}
		field.visible = false;
	}
}
