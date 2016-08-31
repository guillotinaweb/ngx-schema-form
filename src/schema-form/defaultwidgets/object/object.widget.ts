import {
	Component,
	Input
} from "@angular/core";

import { forwardRef } from "@angular/core";

import { FormElementComponent } from "../../formelement.component";

@Component({
	selector: "formobject",
	template: require("./object.widget.html"),
	directives: [forwardRef(() => FormElementComponent)]
})
export class ObjectWidget {
	@Input() formProperty;

}
