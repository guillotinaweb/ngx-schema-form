import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";
import { BaseField } from "../base";

@Component({
	selector: "range-field",
	template: require("./range.field.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RangeField extends BaseField {
	@Input("value") value: number;

	constructor() {
		super();

	}

	toNumber() {
		this.settings.value = +this.settings.value;
	}
}
