import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "./base";
@Component({
	selector: "checkbox-field",
	template: require("./checkboxfield.component.html")
})
export class CheckboxField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
