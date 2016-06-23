import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms"

import {
	Component,
	Input
} from "@angular/core";
import {BaseField} from "./base";



@Component({
	selector: "integer-field",
	template: require("./integerfield.component.html"),
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class IntegerField extends BaseField {
	@Input("value") value: number;

	constructor() {
		super();

	}

	ngOnInit() {
	}

	toNumber(){
		this.settings.value =+this.settings.value;
	}
}
