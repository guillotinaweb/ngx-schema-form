import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms"

import {
	Component,
	Input
} from "@angular/core";

import {Control} from "@angular/common";
import {BaseField} from "../src/form/fields/base";
import {RatingComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: "rating-field",
	template: require("./rating.component.html"),
	providers: [],
	directives: [RatingComponent,REACTIVE_FORM_DIRECTIVES]
})
export class RatingField extends BaseField {
	@Input("value") value: number = 0;
	@Input() validators;
	@Input() asyncValidators;
	numberControl : Control;

	ngOnInit() {
		this.numberControl = new Control("",this.settings.validators);
	}
}
