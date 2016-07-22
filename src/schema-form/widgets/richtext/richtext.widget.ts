import {
	Component,
	Input
} from "@angular/core";
import {
	NG_VALUE_ACCESSOR,
	REACTIVE_FORM_DIRECTIVES
} from "@angular/forms";

import { BaseWidget } from "../base";
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";


@Component({
	selector: "richtext-widget",
	template: require("./richtext.widget.html"),
	directives: [REACTIVE_FORM_DIRECTIVES, TinyMCEComponent, TinyMCEValueAccessor],
	providers: []
})
export class RichTextWidget extends BaseWidget {
	constructor() {
		super();
	}
}
