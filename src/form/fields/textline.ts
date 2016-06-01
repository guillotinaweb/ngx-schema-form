import {Component, Input} from "@angular/core";
import {BaseField} from "./base";

@Component({
	selector: "textline-field",
	template: require("./textline.component.html"),
	providers: []
})
export class TextLineField extends BaseField {

	@Input("value") value: string = "";
	form: any;

	constructor() {
		super();
	}

	ngOnInit() {
	}
}
