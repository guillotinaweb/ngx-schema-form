import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../base";

@Component({
	selector: "radio-widget",
	template: require("./radio.widget.html"),
	directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class RadioWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

}
