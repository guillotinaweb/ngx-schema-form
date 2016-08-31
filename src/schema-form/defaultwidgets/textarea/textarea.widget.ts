import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../../widget";

@Component({
	selector: "textarea-widget",
	template: require("./textarea.widget.html")
})
export class TextAreaWidget extends BaseWidget {

	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
