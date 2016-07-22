import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../base";

@Component({
	selector: "range-widget",
	template: require("./range.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RangeWidget extends BaseWidget {
	@Input("value") value: number;

	constructor() {
		super();

	}

	toNumber() {
		this.settings.value = +this.settings.value;
	}
}
