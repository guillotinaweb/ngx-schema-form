import {
	Component,
	ComponentResolver,
	ElementRef,
	EventEmitter,
	Input,
	Inject,
	Output,
	provide
} from "@angular/core";
import {
	FormControl,
	FormArray,
	Validators
} from "@angular/forms";
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { SchemaValidatorFactory, ZSchemaValidatorFactory } from "../schemavalidatorfactory";
import { Validator } from "../validator";
import { FieldComponent } from "../field.component";
import { FieldModel } from "../fieldmodel";
import { FormModel } from "../formmodel";
import { FormModelFactory } from "../formmodelfactory";
import { WidgetChooserComponent } from "../widgetchooser/widgetchooser.component";
import { WidgetFactory } from "../widgetfactory";
import { WidgetRegistry } from "../widgetregistry";
import { SchemaPreprocessor } from "../schemapreprocessor";


export interface FormValueChangeEvent {
	source : Form,
	value : string
}

/**
 * The main component
 */
@Component({
	selector: "schema-form",
	directives: [FieldComponent, WidgetChooserComponent, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
	providers: [WidgetFactory, provide(SchemaValidatorFactory, {useClass: ZSchemaValidatorFactory}), FormModelFactory ],
	template: require("./form.component.html")
})
export class Form {

	private formModel : FormModel;

	private fields = {};
	private fieldsets: { fields: { field: any, type: string, id: string, settings: any }[], id: string, title: string }[] = [];

	private controls: {[name:string]: FormControl} = {};
	private widgets = [];
	private controlArray = new FormArray([]);
	private updatingValidity: boolean = false;

	private buttons = [];

	/**
	 * Schema the form is generated from
	 */
	@Input("schema") jsonSchema: any;

	/**
	 * Input values initially provided to the form
	 */
	@Input("model") initialValue: any = null;

	/**
	 * Custom validators called whenever their corresponding field's value is changed.
	 */
	@Input() fieldValidators: {[fieldId: string]: Validator} = {};

	/**
	 * Actions to perform when a form's button is clicked.
	 */
	@Input() actions: {[actionId: string]: Function} = {};

	/**
	 * EventEmitter triggered when one of the field value is changed
	 */
	@Output() changeEmitter: EventEmitter<FormValueChangeEvent> = new EventEmitter();

	constructor(
		private elementRef: ElementRef,
		private schemaValidatorFactory: SchemaValidatorFactory,
		private formModelFactory: FormModelFactory
	) { }

	/**:
	 * @deprecated
	 * Send the current form's values somewhere to the same location
	 */
	submit() {
		this.elementRef.nativeElement.querySelector("form").submit();
	}

	/**
	 * Erase all fields.
	 */
	reset() {
		this.formModel.reset();
	}

	ngOnChanges(changes) {
		console.log(changes);

		let needRebuild = changes.jsonSchema || (this.jsonSchema && changes.fieldValidators);
		if (needRebuild) {
			this.parseSchema();
		}
		/*
		if (needRebuild || changes.initialValue) {

			if (changes.initialValue && changes.initialValue.previousValue) {
				this.resetAllFields();
			}

			if (this.initialValue !== null) {
				this.applyModel();
			}
			this.controlArray.valueChanges.subscribe(() => { this.onFieldValueChange(); });
			this.updateFieldsVisibility();
		}*/
	}

	private parseSchema() {
		// New stuff
		this.formModel = this.formModelFactory.createFromSchema(this.jsonSchema);
		this.formModel.reset();
		// Old stuff
		/*
		this.controlArray = new FormArray([]);
		this.buttons = [];
		this.fieldsets = [];
		this.fields = {};
		this.widgets = [];

		SchemaPreprocessor.preprocess(this.jsonSchema);

		this.parseFieldsets();
		this.parseButtons();
		this.resetAllFields();*/
	}

	private parseFieldsets() {
		for (let fieldsetId in this.jsonSchema.fieldsets) {
			let fieldsetSchema = this.jsonSchema.fieldsets[fieldsetId];
			let fieldset = { fields: [], id: fieldsetSchema.id, title: fieldsetSchema.title };

			for (let fieldId of fieldsetSchema.fields) {
				fieldset.fields.push(fieldId);
			}
			this.fieldsets.push(fieldset);
		}
	}

	private createCustomValidatorFn(fieldId: string) {
		return (control): { [key:string]: boolean } => {
			let model = this.getModel();
			if (model.hasOwnProperty(fieldId)) {
				let validatorFn;
				if (validatorFn = this.fieldValidators[fieldId]) {
					return validatorFn(control.value, model, this.controls);
				}
			}
		};
	}

	private applyModel() {
		for (let fieldId in this.initialValue) {

			if (this.fields.hasOwnProperty(fieldId)) {
				this.fields[fieldId].settings.value = this.initialValue[fieldId];
			}
		}
	}

	private onFieldValueChange() {
		this.changeEmitter.emit({source: this, value: this.getModel()})
	}

	private updateFieldsValidity(sourceControl : FormControl) {
		if ( ! this.updatingValidity ) {
			this.updatingValidity = true;
			let validityBefore = this.getValidityArray();
			this.updateFieldsValidityImpl(sourceControl, validityBefore)
			this.updatingValidity = false;
		}
	}

	private updateFieldsValidityImpl(sourceControl : FormControl, validityBefore: string) {
		for (let fieldId in this.controls) {
			let control = this.controls[fieldId];
			if(control !== sourceControl) {
				this.controls[fieldId].updateValueAndValidity();
			}
		}

		let validityAfter = this.getValidityArray();
		if (validityBefore !== validityAfter) {
			this.updateFieldsValidityImpl(sourceControl, validityAfter);
		}
	}

	private getValidityArray() {
		let arr = [];
		for (let fieldId in this.controls) {
			arr.push(this.controls[fieldId].valid);
		}
		return arr.join("");
	}

	private parseButtons() {
		if (this.jsonSchema.buttons !== undefined) {
			this.buttons = this.jsonSchema.buttons;

			for (let button of this.buttons) {
				button.action = (event) => {
					if (button.id && this.actions[button.id]) {
						this.actions[button.id](this, button.parameters);
					}
					event.preventDefault();
				};
			}
		}
	}

	getModel(): any {
		let model = {};
		for (let id in this.fields) {
			let field = this.fields[id];
			if (field.visible) {
				model[field.id] = field.settings.value;
			}
		}
		return model;
	}

	valid(fieldId: string) {
		let field = this.formModel.getField(fieldId);
		let c = field.control;
		return c.valid;
	}
}
