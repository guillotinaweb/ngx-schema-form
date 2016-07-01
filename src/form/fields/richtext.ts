import {NG_VALUE_ACCESSOR, REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, ControlValueAccessor, provideForms, disableDeprecatedForms} from "@angular/forms";
import {
	Component,
	Input
} from "@angular/core";

import {BaseField} from "./base";
import {TinyMCE} from "./tinymce";
import {TinyMCEValueAccessor} from "./tinymcevalueaccessor";


@Component({
	selector: "richtext-field",
	template: require("./richtextfield.component.html"),
	directives: [REACTIVE_FORM_DIRECTIVES, TinyMCE, TinyMCEValueAccessor],
	providers: [disableDeprecatedForms(), provideForms()]
})
export class RichTextField extends BaseField {
	dis: boolean = false;
	constructor() {
		super();
	}

	ngOnInit() {
	}


}
