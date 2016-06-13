import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";

import {BaseField} from "./base";

@Component({
	selector: "select-field",
	template: require("./selectfield.component.html"),
	providers: []
})
export class SelectField extends BaseField {
	@Input("value") value: select = "";
	@Input() validators;
	@Input() asyncValidators;
	selectControl : Control;

	constructor() {
		super();
	}

	ngOnInit() {
		this.selectControl = new Control("",this.settings.validators);
		console.log(this.settings.enum);
	}
}
