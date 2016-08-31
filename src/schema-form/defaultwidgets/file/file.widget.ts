import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../../widget";

@Component({
	selector: "file-widget",
	template: require("./file.widget.html")
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
