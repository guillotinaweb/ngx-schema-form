import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms"

import {
	Component,
	Input
} from "@angular/core";
import {BaseField} from "./base";

@Component({
	selector: "string-field",
	template: require("./stringfield.component.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class StringField extends BaseField {
	@Input("value") value: string = "";

}
