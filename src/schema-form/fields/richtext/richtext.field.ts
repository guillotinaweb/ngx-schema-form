import {
	Component,
	Input
} from "@angular/core";
import {
	NG_VALUE_ACCESSOR,
	REACTIVE_FORM_DIRECTIVES
} from "@angular/forms";

import { BaseField } from "../base";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";


@Component({
	selector: "richtext-field",
	template: require("./richtext.field.html"),
	directives: [REACTIVE_FORM_DIRECTIVES, TinyMCEComponent, TinyMCEValueAccessor],
	providers: []
})
export class RichTextField extends BaseField {
	constructor() {
		super();
	}
}
