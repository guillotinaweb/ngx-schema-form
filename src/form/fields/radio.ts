import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "./base";
import {RadioControlValueAccessor} from "./radio_value_accessor";
@Component({
	selector: "radio-field",
	template: require("./radiofield.component.html"),
	directives: [RadioControlValueAccessor]
})
export class RadioField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
