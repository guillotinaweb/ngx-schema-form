import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";

import {BaseField} from "./base";
@Component({
	selector: "checkbox-field",
	template: require("./checkboxfield.component.html")
})
export class CheckboxField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;
	checkboxControl : Control;

	constructor() {
		super();
	}

	ngOnInit() {
		this.checkboxControl = new Control("",this.settings.validators);
	}
}
