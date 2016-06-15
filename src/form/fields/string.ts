import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "./base";

@Component({
	selector: "string-field",
	template: require("./stringfield.component.html"),
	providers: []
})
export class StringField extends BaseField {
	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
