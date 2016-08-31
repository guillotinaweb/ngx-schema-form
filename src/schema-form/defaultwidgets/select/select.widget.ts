import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../../widget";

@Component({
	selector: "select-widget",
	template: require("./select.widget.html")
})
export class SelectWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}
}
