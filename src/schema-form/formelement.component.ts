import {
	Component,
	Input
} from "@angular/core";

import { ActionRegistry, FormProperty } from "./model";

@Component({
	selector: "formelement",
	template: require("./formelement.component.html")
})
export class FormElementComponent {

	@Input() formProperty: FormProperty;

	private widget = null;

	private buttons = [];

	private static counter = 0;

	constructor(private actionRegistry: ActionRegistry) { }

	ngOnInit() {
		this.parseButtons();
	}

	private parseButtons() {
		if (this.formProperty.schema.buttons !== undefined) {
			this.buttons = this.formProperty.schema.buttons;

			for (let button of this.buttons) {
				this.createButtonCallback(button);
			}
		}
	}

	private createButtonCallback(button) {
		button.action = (e) => {
			let action;
			if (button.id && (action = this.actionRegistry.get(button.id))) {
				action(this.formProperty, button.parameters);
			}
			e.preventDefault();
		};
	}

	onWidgetInstanciated(widget: any) {
		this.widget = widget;
		this.initializeWidget();
		if(widget.control) {
			this.setupLeafWidget();
		} else {
			this.setupLayoutWidget();
		}
	}

	private initializeWidget() {
		let id = "field" + (FormElementComponent.counter++);

		this.widget.schema = this.formProperty.schema;
		this.widget.settings = this.formProperty.schema;
		this.widget.settings.widget = this.formProperty.schema.widget;
		this.widget.name = id;
		this.widget.id = id;
	}

	setupLeafWidget() {
		let control = this.widget.control;
		this.formProperty.valueChanges.subscribe((newValue) => {
			if (control.value !== newValue) {
				control.updateValue(newValue, {emitEvent: false})
			}
		});
		this.formProperty.errorsChanges.subscribe((errors) => {control.setErrors(errors)});
		control.valueChanges.subscribe((newValue) => {this.formProperty.setValue(newValue, false)});
	}

	setupLayoutWidget() {
		this.widget.formProperty = this.formProperty;
	}

}
