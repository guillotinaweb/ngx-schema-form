import {
	Component,
	ComponentResolver,
	Directive,
	Input,
	provide
} from "@angular/core";

import {FieldChooser} from "./fieldchooser";
import {FieldFactory} from "./fieldfactory";
import {FieldRegistry} from "./fieldregistry";

@Component({
	selector: "schema-form",
	directives: [FieldChooser],
	providers: [provide(FieldFactory,{useClass: FieldFactory, deps:[FieldRegistry,ComponentResolver]})],
	template: require("./form.component.html")+"<span>{{getModela}}</span>"
})
export class Form {

	private actions = [];
	private fields = [];
	private fieldsets : {fields:{field: any, type: string, id: string, settings: any}[], id: string, title: string}[]=[];
	@Input() schema: any;
	@Input() model: any = {};
	constructor() {
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

	private parseFieldsets(schema: any) {
		let requiredFields = schema.required;
		for(let fieldsetId in schema.fieldsets){
			let fieldsetProp = schema.fieldsets[fieldsetId];
			let fieldsetData = {fields: [],id: fieldsetProp.id, title: fieldsetProp.title};
			for(let fieldIdx in fieldsetProp.fields){
				let fieldId = fieldsetProp.fields[fieldIdx];
				let fieldSettings = schema.properties[fieldId];
				let fieldType = fieldSettings.widget || fieldSettings.type;
				if (requiredFields.indexOf(fieldId) > -1) {
					fieldSettings.required = true;
				}
				if (fieldId === "description") {
					fieldType = "textline";
				}
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

	onSubmit(evt) {
		alert(evt);
	}

	get getModela() {
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
