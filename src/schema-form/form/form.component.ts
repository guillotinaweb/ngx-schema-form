import {
	Component,
	EventEmitter,
	Input,
	Output,
	provide
} from "@angular/core";

import { Observable } from "rxjs"
import { Action, ActionRegistry, FormPropertyFactory, FormProperty, SchemaPreprocessor, ValidatorRegistry, Validator } from "../model";
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
			useFactory: (schemaValidatorFactory, validatorRegistry) => {
				return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
			},
			deps: [SchemaValidatorFactory, ValidatorRegistry]
		}),
		ActionRegistry,
		ValidatorRegistry
	]
})
export class FormComponent {

	@Input() schema: any=null;

	@Input() model: any;

	@Input() actions: {[actionId: string]: Action} = {};

	@Input() validators: {[path: string]: Validator} = {};
	@Output() onChange = new EventEmitter<{value: any}>();

	rootProperty: FormProperty = null;


	constructor(private formPropertyFactory: FormPropertyFactory, private actionRegistry: ActionRegistry, private validatorRegistry: ValidatorRegistry) { }

	ngOnChanges(changes: any) {
		if (changes.schema) {
			SchemaPreprocessor.preprocess(this.schema);
			this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
			this.rootProperty.valueChanges.subscribe(value => {this.onChange.emit({value: value})});
		}
		if (this.schema && changes.model || this.model && changes.schema) {
			this.rootProperty.reset(this.model, false);
		}
		if (changes.actions) {
			this.setActions();
		}
		if (changes.validators) {
			this.setValidators();
		}
	}

	private setValidators() {
		this.validatorRegistry.clear();
		if (this.validators) {
			for (let validatorId in this.validators) {
				this.validatorRegistry.register(validatorId, this.validators[validatorId]);
			}
		}
	}

	private setActions() {
		this.actionRegistry.clear();
		if (this.actions) {
			for (let actionId in this.actions) {
				this.actionRegistry.register(actionId, this.actions[actionId]);
			}
		}
	}

	reset() {
		this.rootProperty.reset(null, true);
	}
}
