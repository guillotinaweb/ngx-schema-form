import {
	Component,
	Input
} from "@angular/core";
import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { BaseWidget } from "../base";

@Component({
	selector: "textline-widget",
	template: require("./textline.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TextLineWidget extends BaseWidget {

	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
