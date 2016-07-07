import {
	Component,
	ComponentResolver,
	ElementRef,
	Input,
	Inject,
	provide
} from "@angular/core";

import {
	FormControl,
	FormArray,
	Validators
} from "@angular/forms";

import { SchemaValidatorFactory, ZSchemaValidatorFactory } from "../schemavalidatorfactory";

import { FieldChooserComponent } from "../fieldchooser/fieldchooser.component";
import { FieldFactory } from "../fieldfactory";
import { FieldRegistryService } from "../fieldregistry.service";
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

@Component({
	selector: "schema-form",
	directives: [FieldChooserComponent, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
	providers: [FieldFactory, provide(SchemaValidatorFactory,{useClass: ZSchemaValidatorFactory}) ],
	template: require("./form.component.html") + "{{values}}"
})
export class Form {

	private fields = {};
	private fieldsets: { fields: { field: any, type: string, id: string, settings: any }[], id: string, title: string }[] = [];

	private controls = {};
	private controlArray = new FormArray([]);
	private updatingValidity: boolean = false;

	private buttons = [];


	@Input() schema: any;
	@Input() model: any = null;
	@Input() fieldValidators: {[fieldId: string]: Function} = {};
	@Input() actions: {[actionId: string]:Function} = {};
	//@Input() formValidator: Function = {};
	//@Input() actions: {[actionId: string]: Function}[] = {};

	constructor(private elementRef : ElementRef, private schemaValidatorFactory : SchemaValidatorFactory) { }

	submit() {
		this.elementRef.nativeElement.querySelector("form").submit();
	}

	reset() {
		this.resetAllFields();
	}

	ngOnChanges(changes) {
		let needRebuild = changes.schema || (this.schema && changes.fieldValidators);
		if (needRebuild) {
			this.parseSchema(this.schema);
		}
		if (needRebuild || changes.model) {
			if (changes.model && changes.model.previousValue) {
				this.resetAllFields();
			}
			if (this.model !== null) {
				this.applyModel();
			}
			this.controlArray.valueChanges.subscribe(() => { this.updateFieldsVisibility(); });
			this.updateFieldsVisibility();
		}
	}

	private parseSchema(schema: any) {
		this.controlArray = new FormArray([]);
		this.buttons = [];
		this.fieldsets = [];
		this.fields = {};

		if (schema.hasOwnProperty("fieldsets")) {
			this.parseFieldsets(schema);
		} else if (schema.hasOwnProperty("order")) {
			this.parseOrder(schema);
		}

		this.parseButtons(schema);
		this.resetAllFields();
	}

	private parseFieldsets(schema: any) {
		for (let fieldsetId in schema.fieldsets) {
			let fieldsetSchema = schema.fieldsets[fieldsetId];
			let fieldset = { fields: [], id: fieldsetSchema.id, title: fieldsetSchema.title };

			for (let fieldId of fieldsetSchema.fields) {
				this.parseField(schema, fieldId);
				fieldset.fields.push(fieldId);
			}
			this.fieldsets.push(fieldset);
		}
	}

	private parseField(schema, fieldId) {
		let fieldSchema = schema.properties[fieldId];

		let validators = this.schemaValidatorFactory.createValidatorFn(fieldSchema);
		// Client validation goes here
		if (this.fieldValidators.hasOwnProperty(fieldId)){
			let customValidator = this.createCustomValidatorFn(fieldId, this.fieldValidators[fieldId]);
			validators = Validators.compose([customValidator, validators]);
		}
		if (schema.required.indexOf(fieldId) > -1) {
			validators = Validators.compose([Validators.required, validators]);
		}
		let control = new FormControl("", [validators]);
		control.valueChanges.subscribe( () => { this.updateFieldsValidity(control) });
		this.controlArray.push(control);
		this.controls[fieldId] = control;

		let fieldType = fieldSchema.widget || fieldSchema.type;
		this.fields[fieldId] = { name: fieldId, type: fieldType, id: fieldId, settings: fieldSchema, control: control, visible: false };

		return fieldSchema;
	}

	private createCustomValidatorFn(fieldId: string, validatorFn: Function ) {
		return (control):{ [key:string]: boolean } => {
			let model = this.getModel();
			if (model.hasOwnProperty(fieldId)){
				return validatorFn(control.value, model, this.controls);
			}
		};
	}

	private resetAllFields() {
		for (let field in this.fields) {
			this.resetField(field);
		}
	}
	private resetField(fieldId : string) {
		let settings = this.fields[fieldId].settings;
		this.controls[fieldId]._touched=false;
		this.controls[fieldId]._pristine=true;
		let val: any = "";

		if (settings.hasOwnProperty("default")) {
			val = settings.default;
		} else if (settings.type === "number") {
			if (settings.minimum !== undefined) {
				val = settings.minimum;
			} else {
				val = 0;
			}
		}

		settings.value = val;
	}

	private applyModel() {
		for (let fieldId in this.model) {
			if (this.fields.hasOwnProperty(fieldId)) {
				this.fields[fieldId].settings.value = this.model[fieldId];
			}
		}
	}

	private updateFieldsVisibility() {
		for (let fieldIdx in this.fields) {
			let field = this.fields[fieldIdx];
			if (field.settings.hasOwnProperty("visibleIf")) {
				this.updateFieldVisibility(field);
			} else {
				field.visible = true;
			}
		}
	}

	private updateFieldVisibility(field) {
		let visibleIf = field.settings.visibleIf;
		for (let conditionField in visibleIf) {

			if (this.fields[conditionField].visible) {
				let values = visibleIf[conditionField];
				let control = this.controls[conditionField];

				if (values.indexOf(control.value) > -1) {
					field.visible = true;
					return;
				}
			}
		}
		field.visible = false;
	}

	private updateFieldsValidity(sourceControl : FormControl) { 
		if ( ! this.updatingValidity ) {
			this.updatingValidity = true;
			for (let fieldId in this.controls) {
				let control = this.controls[fieldId];
				if(control !== sourceControl) {
					this.controls[fieldId].updateValueAndValidity();
				}
			}
			this.updatingValidity = false;
		}
	}

	private parseOrder(schema: any) {
		schema.fieldsets = [{
			id: "fieldset-default",
			title: "",
			fields: schema.order
		}];
		this.parseFieldsets(schema);
	}

	private parseButtons(schema) {
		if (schema.buttons !== undefined) {
			this.buttons = schema.buttons;

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

	get values() {
		return JSON.stringify(this.getModel());
	}

	getModel(): any {
		let model = {};
		for (let id in this.fields) {
			let field = this.fields[id];
			if (field.visible) {
				model[field.name] = field.settings.value;
			}
		}
		return model;
	}
}
