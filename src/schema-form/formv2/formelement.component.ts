import {
	Component,
	Input
} from "@angular/core";

import { FormObject } from "./formobject.component"
import { FieldComponent } from "../field/field.component"

@Component({
	selector: "formelement",
	template: require("./formelement.component.html"),
	directives: [FormObject, FieldComponent]
})
export class FormElementComponent {
	@Input() formProperty;

	ngOnInit() {
	}

	hasWidget() {
		return this.formProperty.schema.widget !== undefined;
	}

}
