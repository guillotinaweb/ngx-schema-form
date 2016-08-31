import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../../widget";

@Component({
	selector: "integer-widget",
	template: require("./integer.widget.html")
})
export class IntegerWidget extends BaseWidget {
	@Input("value") value: number;

	constructor() {
		super();

	}

	toNumber() {
		this.settings.value = +this.settings.value;
	}
}
