import {Component} from "@angular/core";
import {BaseField} from "./base";

@Component({
	selector: "default-field",
	template: `<p>cannot find valid type for {{name}}`
})
export class DefaultField extends BaseField {


}
