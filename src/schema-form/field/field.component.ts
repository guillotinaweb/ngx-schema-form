import {
	Component,
	Input
} from "@angular/core";

import { WidgetChooserComponent } from "../widgetchooser/widgetchooser.component"
import { FieldModel } from "../model";

@Component({
	selector: "field",
	directives: [WidgetChooserComponent],
	template: require("./field.component.html")
})
export class FieldComponent {
	@Input() fieldModel: FieldModel;
	@Input() widget: any;

	constructor() { }

	ngOnInit() { }
}
