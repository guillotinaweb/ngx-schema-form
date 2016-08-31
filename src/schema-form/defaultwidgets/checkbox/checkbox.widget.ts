import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../../widget";
@Component({
	selector: "checkbox-widget",
	template: require("./checkbox.widget.html")
})
export class CheckboxWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
