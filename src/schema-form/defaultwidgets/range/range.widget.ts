import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../../widget";

@Component({
	selector: "range-widget",
	template: require("./range.widget.html")
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
