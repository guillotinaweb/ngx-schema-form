import {
	Component,
	Input
} from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { BaseWidget } from "../base";

@Component({
	selector: "textarea-widget",
	template: require("./textarea.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TextAreaWidget extends BaseWidget {

	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
