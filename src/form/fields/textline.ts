import {
	Component,
	Input
} from "@angular/core";
import {Control} from "@angular/common";
import {BaseField} from "./base";

@Component({
	selector: "textline-field",
	template: require("./textline.component.html"),
	providers: []
})
export class TextLineField extends BaseField {

	@Input("value") value: string = "";
	@Input() validators;
	@Input() asyncValidators;
	stringControl : Control;

	constructor() {
		super();
	}

	ngOnInit() {
		this.stringControl = new Control("",this.validators,this.asyncValidators);
	}
}
