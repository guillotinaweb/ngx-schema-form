import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../base";

@Component({
	selector: "file-widget",
	template: require("./file.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FileWidget extends BaseWidget {
	@Input("value") value: number;

	constructor() {
		super();

	}

	toNumber() {
		this.settings.value = +this.settings.value;
	}
}
