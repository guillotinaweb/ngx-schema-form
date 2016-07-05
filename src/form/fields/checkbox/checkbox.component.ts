import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "../base";
@Component({
	selector: "checkbox-field",
	template: require("./checkbox.component.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CheckboxField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
