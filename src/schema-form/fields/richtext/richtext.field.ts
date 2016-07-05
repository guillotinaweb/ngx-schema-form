import { NG_VALUE_ACCESSOR, REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, ControlValueAccessor, provideForms, disableDeprecatedForms } from "@angular/forms";
import {
	Component,
	Input
} from "@angular/core";

import { BaseField } from "../base";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymcevalueaccessor";


@Component({
	selector: "richtext-field",
	template: require("./richtext.field.html"),
	directives: [REACTIVE_FORM_DIRECTIVES, TinyMCEComponent, TinyMCEValueAccessor],
	providers: [disableDeprecatedForms(), provideForms()]
})
export class RichTextField extends BaseField {
	constructor() {
		super();
	}

	ngOnInit() {
	}


}
