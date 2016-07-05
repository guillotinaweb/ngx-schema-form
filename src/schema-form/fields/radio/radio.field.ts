import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";

import { BaseField } from "../base";

@Component({
	selector: "radio-field",
	template: require("./radio.field.html"),
	directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class RadioField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

}
