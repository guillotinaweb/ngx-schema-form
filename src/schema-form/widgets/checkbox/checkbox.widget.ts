import {
	Component,
	Input
} from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { BaseWidget } from "../base";
@Component({
	selector: "checkbox-widget",
	template: require("./checkbox.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CheckboxWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
