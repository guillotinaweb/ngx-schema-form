import { FormControl } from "@angular/forms";
import { ArrayProperty, FormProperty, ObjectProperty } from "./model";

export abstract class Widget {
	public abstract setup(formProperty);
}

export class ControlWidget extends Widget {

	id: string = "";
	name: string = "";
	settings: any = {};
	control: FormControl = new FormControl("", () => null);

	public setup(formProperty: FormProperty) {
		let control = this.control;
		formProperty.valueChanges.subscribe((newValue) => {
			if (control.value !== newValue) {
				control.setValue(newValue, {emitEvent: false})
			}
		});
		formProperty.errorsChanges.subscribe((errors) => {control.setErrors(errors)});
		control.valueChanges.subscribe((newValue) => {formProperty.setValue(newValue, false)});
	}

}

export class ArrayLayoutWidget extends Widget {
	formProperty: ArrayProperty = null;

	setup(formProperty: ArrayProperty) {
		this.formProperty = formProperty;
	}
}

export class ObjectLayoutWidget extends Widget {
	formProperty: ObjectProperty = null;

	setup(formProperty: ObjectProperty) {
		this.formProperty = formProperty;
	}
}
