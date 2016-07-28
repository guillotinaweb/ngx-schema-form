import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

import { FieldModel } from "./fieldmodel";
import { Validator } from "../validator";

export class FormModel {

	private fieldModels: {[fieldId:string]: FieldModel} = {};
	private controls: {[fieldId:string]: FormControl} = {};
	public change: EventEmitter<any> = new EventEmitter();

	private updatingValidity: boolean = false;

	getField(fieldId: string): FieldModel {
		return this.fieldModels[fieldId];
	}

	addField(fieldModel: FieldModel) {
		this.fieldModels[fieldModel.id] = fieldModel;
		this.controls[fieldModel.id] = fieldModel.control;
		fieldModel.change.subscribe( (event) => {this.onFieldValueChanged(event)});
		fieldModel.reset();
	}

	get fieldIds() {
		let keys = Object.keys(this.fieldModels);
		return keys;
	}

	getValue() {
		let value = {};
		for (let fieldId in this.fieldModels) {
			if (this.fieldModels[fieldId].visible) {
				value[fieldId] = this.fieldModels[fieldId].value;
			}
		}
		return value;
	}

	setValue(o: any) {
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
				return validator(control.value, this.getValue(), this.controls);
			}
		});
	}
	
	removeCustomValidators() {
		for (let fieldId in this.fieldModels) {
			this.fieldModels[fieldId].removeCustomValidator();
		}
	}

	reset() {
		for (let fieldId in this.fieldModels) {
			this.fieldModels[fieldId].reset();
		}
	}

	private onFieldValueChanged(event) {
		this.change.emit({source: this, value: this.getValue()});
		this.updateFieldsVisibility();
		this.updateFieldsValidity();
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

	
	 //Multi passes validation
	 
	private updateFieldsValidity() {
		if ( ! this.updatingValidity ) {
			this.updatingValidity = true;
			let validityBefore = this.getValidityArray();
			this.updateFieldsValidityImpl(validityBefore)
			this.updatingValidity = false;
		}
	}

	private updateFieldsValidityImpl(validityBefore: string) {
		for (let fieldId in this.controls) {
			let control = this.controls[fieldId];
			this.controls[fieldId].updateValueAndValidity();
		}

		let validityAfter = this.getValidityArray();
		if (validityBefore !== validityAfter) {
			this.updateFieldsValidityImpl(validityAfter);
		}
	}

	private getValidityArray() {
		let arr = [];
		for (let fieldId in this.controls) {
			arr.push(this.controls[fieldId].valid);
		}
		return arr.join("");
	}
}
