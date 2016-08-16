import {
	Component,
	Input,
	provide
} from "@angular/core";

import { FormPropertyFactory } from "../model/formpropertyfactory";
import { FormProperty } from "../model/formproperty";
import { SchemaPreprocessor} from "../schemapreprocessor";
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from "../schemavalidatorfactory";
import { WidgetFactory } from "../widgetfactory";

import { FormElementComponent } from "./formelement.component";

@Component({
	selector: "schema-form",
	template: require("./form.component.html"),
	directives: [FormElementComponent],
	providers: [
		SchemaPreprocessor,
		WidgetFactory,
		provide(SchemaValidatorFactory, {
			useClass: ZSchemaValidatorFactory
		}),
		provide(FormPropertyFactory, {
			useFactory: (schemaValidatorFactory) => {
				return new FormPropertyFactory(schemaValidatorFactory);
			},
			deps: [SchemaValidatorFactory]
		})
	]
})
export class FormComponent {

	@Input() schema: any=null;

	@Input() model: any;

	@Input() actions: {[actionId: string]: Function} = {};

	rootProperty: FormProperty = null;
	
	private buttons = [];

	constructor(private formPropertyFactory: FormPropertyFactory) { }

	ngOnChanges(changes: any) {
		if (changes.schema) {
			SchemaPreprocessor.preprocess(this.schema);
			this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
			this.parseButtons();
		}
		if (this.schema && changes.model || this.model && changes.schema) {
			this.rootProperty.reset(this.model, false);
		}
	}

	private setValidators() {
		//TODO
	}

	private parseButtons() {
		if (this.schema.buttons !== undefined) {
			this.buttons = this.schema.buttons;

			for (let button of this.buttons) {
				this.createButtonCallback(button);
			}
		}
	}

	private createButtonCallback(button) {
		button.action = (e) => {
			if (button.id && this.actions[button.id]) {
				this.actions[button.id](this, button.parameters);
			}
			e.preventDefault();
		};
	}

	reset() {
		this.rootProperty.reset(null, true);
	}
}
