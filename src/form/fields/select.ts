import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "./base";

@Component({
	selector: "select-field",
	template: require("./selectfield.component.html"),
	providers: []
})
export class SelectField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
