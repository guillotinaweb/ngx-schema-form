import {
	Component,
	Input
} from "@angular/core";

import { forwardRef } from "@angular/core";

import { FormElementComponent } from "./formelement.component";

@Component({
	selector: "formobject",
	template: require("./formobject.component.html"),
	directives: [forwardRef(() => FormElementComponent)]
})
export class FormObject {
	@Input() formProperty;

}
