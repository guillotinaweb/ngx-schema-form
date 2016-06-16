import {
	Component,
	Input
} from "@angular/core";
import {BaseField} from "./base";


@Component({
	selector: "integer-field",
	template: require("./integerfield.component.html")
})
export class IntegerField extends BaseField {
	@Input("value") value: number;

	constructor() {
		super();

	}

	ngOnInit() {
		this.settings.value = this.settings.value || (this.settings.maximum - this.settings.minimum)/2 || 0;
	}

	toNumber(){
		this.settings.value =+this.settings.value;
	}
}
