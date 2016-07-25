import {
	Component,
	Input
} from "@angular/core";
import { FormControl } from "@angular/forms"
import { WidgetChooserComponent } from "./widgetchooser/widgetchooser.component"

@Component({
	selector: "field",
	directives: [WidgetChooserComponent],
	template: require("./field.component.html")
})
export class FieldComponent {
	@Input() fieldModel: any;
	@Input() widget: any;

	constructor() { }

	ngOnInit() { }
}
