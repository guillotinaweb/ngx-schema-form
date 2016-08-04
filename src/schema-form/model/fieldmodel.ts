import { EventEmitter } from "@angular/core";
import {
	FormControl,
	ValidatorFn, 
	Validators
} from "@angular/forms";

import { SchemaValidatorFactory } from "../schemavalidatorfactory";

export class FieldModel {

	private value: string = null;
	public control: FormControl;
	public change: EventEmitter<any> = new EventEmitter();
	customValidator: ValidatorFn = null;

	constructor(
		private schemaValidatorFactory: SchemaValidatorFactory,
		public id: string,
		public settings: any,
		public widgetInfo: any,
		public visible: boolean,
		public required: boolean
	) {
		let schemaValidator = this.schemaValidatorFactory.createValidatorFn(this.settings);
		let validators = (control: FormControl) => {return schemaValidator(control.value)};
		validators = Validators.compose([(control) => {return this.customValidatorWrapper(<FormControl>control);}, validators]);
		if (this.required) {
			validators = Validators.compose([Validators.required, validators]);
		}
		this.control = new FormControl("", [validators]);
		this.control.valueChanges.subscribe((value) => {
			this.onControlValueChanged(value)
		});
	}

	getValue() {
		return this.value;
	}

	setValue(newValue: any) {
		this.value = newValue;
		this.settings.value = newValue;
		this.control.updateValueAndValidity();
	}

	removeCustomValidator() {
		this.customValidator = null;
	}

	setCustomValidator(validator: ValidatorFn) {
		this.customValidator = validator;
	}

	private customValidatorWrapper(control: FormControl) {
		if (this.customValidator !== null) {
			return this.customValidator(control);
		} else {
			return null;
		}
	}

	reset() {
		//TODO RC5 replace by markAs
		if(!(<any>this.control).markAsUntouched){
			(<any>this.control)._touched=false;
			(<any>this.control)._pristine=true;
		} else {
			(<any>console).warn("upate to RC5");
			(<any>this.control).markAsPristine();
			(<any>this.control).markAsUntouched();
		}

		let val: any = "";

		if (this.settings.hasOwnProperty("default")) {
			val = this.settings.default;
		} else if (this.settings.type === "number") {
			if (this.settings.minimum !== undefined) {
				val = this.settings.minimum;
			} else {
				val = 0;
			}
		}

		this.setValue(val);
		
	}

	private onControlValueChanged(value) {
		if (value !== this.value) {
			this.value = value;
			this.change.emit({source: this, value: value})
		}
	}
}
