import { REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import {
	Component,
	Input
} from "@angular/core";
import { BaseWidget } from "../base";

@Component({
	selector: "string-widget",
	template: require("./string.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class StringWidget extends BaseWidget {
	@Input("value") value: string = "";

}
