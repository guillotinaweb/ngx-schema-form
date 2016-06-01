import {Component, Input, EventEmitter} from "@angular/core";
import {BaseField} from "./base";

@Component({
	selector: "string-field",
	template: require("./stringfield.component.html"),
	providers: []
})
export class StringField extends BaseField {

	@Input("value") value: string = "";
	valueChange: EventEmitter<any> = new EventEmitter();

	constructor() {
		super();
	}

	ngOnInit() {
	}

	getValueChangeEmitter() {
		return this.valueChange;
	}

	change(stringInput) {
		this.value = stringInput.value;
	}
}
