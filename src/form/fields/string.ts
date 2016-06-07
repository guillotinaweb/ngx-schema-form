import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";

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
	stringControl : Control;

	constructor() {
		super();
	}

	ngOnInit() {
		this.stringControl = new Control("",this.settings.validators);
	}
}
