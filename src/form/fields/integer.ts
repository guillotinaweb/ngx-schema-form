import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";
import {BaseField} from "./base";


@Component({
	selector: "integer-field",
	template: require("./integerfield.component.html")
})
export class IntegerField extends BaseField {
	@Input("value") value: number;
	@Input() validators;
	@Input() asyncValidators;
	integerControl : Control;

	constructor() {
		super();

	}

	ngOnInit() {
		this.integerControl = new Control("",this.settings.validators);
		this.settings.value = this.settings.value || (this.settings.maximum - this.settings.minimum)/2;
	}

	toNumber(){
		this.settings.value =+this.settings.value;
	}
}
