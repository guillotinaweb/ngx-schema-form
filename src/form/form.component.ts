import {
	Component,
	ComponentResolver,
	Input,
	provide
} from "@angular/core";

import {
	FormControl,
	FormArray,
	Validators
} from "@angular/forms";

import ZSchema = require("z-schema");

import {FieldChooser} from "./fieldchooser";
import {FieldFactory} from "./fieldfactory";
import {FieldRegistry} from "./fieldregistry";
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
	selector: "schema-form",
	directives: [FieldChooser, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
	providers: [provide(FieldFactory, { useClass: FieldFactory, deps: [FieldRegistry, ComponentResolver] })],
	template: require("./form.component.html") + "{{values}}"
})
export class Form {

	private fields = [];
	private fieldsets: { fields: { field: any, type: string, id: string, settings: any }[], id: string, title: string }[] = [];

	private zschema;
	private controls = {};
	private controlArray = new FormArray([]);

	private actions = [];

	@Input() schema: any;
	@Input() model: any = {};

	constructor() {
		this.zschema = new ZSchema({});
	}

	ngOnInit() {
		this.parseSchema(this.schema);
		this.controlArray.valueChanges.subscribe(() => { this.updateFieldsVisibility(); });
		this.updateFieldsVisibility(true);
	}

	private parseSchema(schema: any) {
		if (schema.hasOwnProperty("fieldsets")) {
			this.parseFieldsets(schema);
		} else if (schema.hasOwnProperty("order")) {
			this.parseOrder(schema);
		}

		this.parseActions(schema);
	}

	private parseFieldsets(schema: any) {
		for (let fieldsetId in schema.fieldsets) {
			let fieldsetSchema = schema.fieldsets[fieldsetId];
			let fieldset = { fields: [], id: fieldsetSchema.id, title: fieldsetSchema.title };
			for (let fieldIdx in fieldsetSchema.fields) {
				let fieldId = fieldsetSchema.fields[fieldIdx];
				this.parseField(schema, fieldId);
				fieldset.fields.push(fieldId);
			}
			this.fieldsets.push(fieldset);
		}
	}

	private parseField(schema, fieldId) {
		let fieldSchema = schema.properties[fieldId];

		let validators = this.createValidatorFn(fieldSchema);

		// Client validation goes here
		let fieldType = fieldSchema.widget || fieldSchema.type;
		if (schema.required.indexOf(fieldId) > -1) {
			validators = Validators.compose([Validators.required, validators]);
		}
		let control = new FormControl("", [validators]);
		this.controlArray.push(control);
		this.controls[fieldId] = control;

		this.fields[fieldId] = { name: fieldId, type: fieldType, id: fieldId, settings: fieldSchema, control: control, visible: false };
		this.resetField(fieldId);

		return fieldSchema;
	}

	private resetField(fieldId) {
		let settings = this.fields[fieldId].settings;
		let val: any = "";
		if (this.model.hasOwnProperty(fieldId)) {
			val = this.model[fieldId];
		} else if (settings.hasOwnProperty("default")) {
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

	private createValidatorFn(schema) {
		return (control): { [key: string]: boolean } => {
			let value = control.value;
			if (schema.type === "number" || schema.type === "integer") {
				value = +value;
			}
			let result = this.zschema.validate(value, schema);
			let err = this.zschema.getLastErrors();
			return err || null;
		};
	}

	private updateFieldsVisibility(updateAll?: boolean ) {
		for (let fieldIdx in this.fields) {
			let field = this.fields[fieldIdx];
			if (field.settings.hasOwnProperty("visibleIf")) {
				this.updateFieldVisibility(field);
			} else if (updateAll) {
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
		this.resetField(field.name);
		field.visible = false;

	}

	private parseOrder(schema: any) {
		schema.fieldsets = [{
			id: "fieldset-default",
			title: "",
			fields: schema.order
		}];
		this.parseFieldsets(schema);
	}

	private parseActions(schema) {
		if (schema.links !== undefined) {
			this.actions = schema.links;
		} else {
			this.actions = [];
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
