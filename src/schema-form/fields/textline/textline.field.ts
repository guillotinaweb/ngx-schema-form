import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";

import { BaseField } from "../base";

@Component({
	selector: "textline-field",
	template: require("./textline.field.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TextLineField extends BaseField {

	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
