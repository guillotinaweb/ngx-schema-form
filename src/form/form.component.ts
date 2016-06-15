import {
	Component,
	ComponentResolver,
	Directive,
	Input,
	provide
} from "@angular/core";

import {
	Validators
} from "@angular/common"

import ZSchema = require("z-schema");

import {FieldChooser} from "./fieldchooser";
import {FieldFactory} from "./fieldfactory";
import {FieldRegistry} from "./fieldregistry";

@Component({
	selector: "schema-form",
	directives: [FieldChooser],
	providers: [provide(FieldFactory,{useClass: FieldFactory, deps:[FieldRegistry,ComponentResolver]})],
	template: require("./form.component.html")+"{{values}}"
})
export class Form {
	private zschema;
	private actions = [];
	private fields = [];
	private fieldsets : {fields:{field: any, type: string, id: string, settings: any}[], id: string, title: string}[]=[];
	@Input() schema: any;
	@Input() model: any = {};
	constructor() {
		this.zschema = new ZSchema({});
	}

	ngOnInit() {
		this.parseSchema(this.schema);
	}
	
	private parseSchema(schema: any) {
		if (schema.hasOwnProperty("fieldsets")){
			this.parseFieldsets(schema);
		} else if (schema.hasOwnProperty("order")) {
			this.parseOrder(schema);
		}
		
		this.parseActions(schema);
	}

	private createValidatorFn(schema){
		return (control)=>{
			let value = control.value;
			if(schema.type === "number" || schema.type === "integer"){
				value = +value;
			}

			let result =  this.zschema.validate(value,schema);
			let err = this.zschema.getLastErrors();
			return err || null;
		};
	}

	private parseFieldsets(schema: any) {
		let requiredFields = schema.required;
		for(let fieldsetId in schema.fieldsets){
			let fieldsetProp = schema.fieldsets[fieldsetId];
			let fieldsetData = {fields: [],id: fieldsetProp.id, title: fieldsetProp.title};
			for(let fieldIdx in fieldsetProp.fields){
				let fieldId = fieldsetProp.fields[fieldIdx];
				let fieldSettings = schema.properties[fieldId];

				let validators = this.createValidatorFn(fieldSettings);

				let fieldType = fieldSettings.widget || fieldSettings.type;
				if (requiredFields.indexOf(fieldId) > -1) {
					validators = Validators.compose([Validators.required,validators]);
				}
				fieldSettings.validators=validators;
				if(this.model.hasOwnProperty(fieldId)){
					fieldSettings.value=this.model[fieldId];
				}
				this.fields.push({name: fieldId, id: fieldId, settings:fieldSettings});
				fieldsetData.fields.push({type:fieldType, id: fieldId, settings: fieldSettings});
			}
			this.fieldsets.push(fieldsetData);
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

	private parseActions(schema) {
		if(schema.links !== undefined){
			this.actions = schema.links;
		} else {
			this.actions = [];
		}
	}
	
	get values(){
		return JSON.stringify(this.getModel());
	}

	getModel(): any {
		let model = {};
		for (let id in this.fields) {
			let field = this.fields[id];
			model[field.name]=field.settings.value;
		}
		return model;
	}
}
