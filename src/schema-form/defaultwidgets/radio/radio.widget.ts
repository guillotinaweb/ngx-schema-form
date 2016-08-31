import {
	Component,
	Input
} from "@angular/core";

import { BaseWidget } from "../../widget";

@Component({
	selector: "radio-widget",
	template: require("./radio.widget.html")
})
export class RadioWidget extends BaseWidget {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

}
