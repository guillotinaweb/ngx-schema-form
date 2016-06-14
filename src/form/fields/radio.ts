import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";

import {BaseField} from "./base";

@Component({
	radioor: "radio-field",
	template: require("./radiofield.component.html"),
	providers: []
})
export class RadioField extends BaseField {
	@Input("value") value: radio = "";
	@Input() validators;
	@Input() asyncValidators;
	radioControl : Control;

	constructor() {
		super();
	}

	ngOnInit() {
		this.radioControl = new Control("",this.settings.validators);
	}
}
