import { EventEmitter } from "@angular/core";
import {
	FormControl,
	ValidatorFn, 
	Validators
} from "@angular/forms";

import { SchemaValidatorFactory } from "./schemavalidatorfactory";

export class FieldModel {
	public control: FormControl;
	valueChanges = new EventEmitter();
	customValidator: ValidatorFn = () => null;

	constructor(
		private schemaValidatorFactory: SchemaValidatorFactory,
		public id: string,
		public settings: any,
		public widgetInfo: any,
		public visible: boolean,
		public required: boolean
	) {
		let validators = this.schemaValidatorFactory.createValidatorFn(this.settings);
		validators = Validators.compose([(control) => {return this.customValidatorWrapper(<FormControl>control);}, validators]);
		if (this.required) {
			validators = Validators.compose([Validators.required, validators]);
		}
		this.control = new FormControl("", [validators]);
	
	}

	getValue() {
		return this.settings.value;
	}

	setCustomValidator(validator: ValidatorFn) {
		this.customValidator = validator;
	}

	private customValidatorWrapper(control: FormControl) {
		if (this.customValidator !== undefined) {
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

		this.settings.value = val;
		
	}

}
