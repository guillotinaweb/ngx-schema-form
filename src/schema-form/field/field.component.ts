import {
	Component,
	Input
} from "@angular/core";

import { FormControl } from "@angular/forms"; 
import { WidgetChooserComponent } from "../widgetchooser/widgetchooser.component"
import { FormProperty } from "../model/formproperty";

@Component({
	selector: "field",
	directives: [WidgetChooserComponent],
	template: require("./field.component.html")
})
export class FieldComponent {
	private static counter = 0;

	@Input() formProperty: FormProperty;
	@Input() widget: any;
	private id: string;
	private control: FormControl = new FormControl();

	constructor() {
	}

	ngOnInit() {
		this.id = "field_"+(FieldComponent.counter++);
		this.formProperty.valueChanges.subscribe((newValue) => {this.control.updateValue(newValue)});
	}
}
