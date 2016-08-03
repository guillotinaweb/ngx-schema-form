import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

import { FieldModel } from "./fieldmodel";
import { Validator } from "../validator";

export class FormModel {

	private fieldModels: {[fieldId:string]: FieldModel} = {};
	private controls: {[fieldId:string]: FormControl} = {};
	public change: EventEmitter<any> = new EventEmitter();
	private value = {};

	private updatingFieldsState: boolean = false;

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
		return this.value;
	}

	updateValue() {
		let value = {};
		for (let fieldId in this.fieldModels) {
			if (this.getField(fieldId).visible) {
				value[fieldId] = this.getField(fieldId).getValue();
			}
		}
		this.value = value;
	}

	setValue(o: any) {
		this.reset();
		for (let fieldId in o) {
			if (this.getField(fieldId) !== undefined) {
				this.getField(fieldId).setValue(o[fieldId]);
			}
		}
	}

	setCustomValidator(fieldId: string, validator: Validator) {
		let fieldModel = this.getField(fieldId);
		if (fieldModel !== undefined) {
			fieldModel.setCustomValidator((control) => {
				if (fieldModel.visible) {
					return validator(control.value, this.getValue(), this.controls);
				}
			});
		}
	}
	
	removeCustomValidators() {
		for (let fieldId in this.fieldModels) {
			this.getField(fieldId).removeCustomValidator();
		}
	}

	reset() {
		for (let fieldId in this.fieldModels) {
			this.getField(fieldId).reset();
		}
	}

	private onFieldValueChanged(event) {
		this.updateState();
	}

	updateState() {
		if ( ! this.updatingFieldsState ) {
			this.updatingFieldsState = true;
			this.updateValue();
			this.updateFieldsVisibility();
			this.updateFieldsValidity();
			this.change.emit({source: this, value: this.getValue()});
			this.updatingFieldsState = false;
		}
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
				let value = this.getField(conditionFieldId).getValue();

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
		let validityBefore = this.getValidityArray();
		this.updateFieldsValidityImpl(validityBefore)
	}

	private updateFieldsValidityImpl(validityBefore: string) {
		for (let fieldId in this.controls) {
			let control = this.controls[fieldId];
			this.controls[fieldId].updateValueAndValidity({onlySelf: true, emitEvent: false});
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
