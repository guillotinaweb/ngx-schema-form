import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../base";

@Component({
	selector: "select-widget",
	template: require("./select.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SelectWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
