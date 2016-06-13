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
	template: require("./form.component.html")
})
export class Form {

	private actions = [];
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
			this.fields=this.parseFieldsets(schema);
		} else if (schema.hasOwnProperty("order")) {
			this.fields=this.parseOrder(schema);
		}
		
		this.parseActions(schema);
	}

	private parseFieldsets(schema: any): any[]{
		let requiredFields = schema.required;
		for(let fieldsetId in schema.fieldsets){
			let fieldsetProp = schema.fieldsets[fieldsetId];
			let fieldsetData = {fields: [],id: fieldsetProp.id, title: fieldsetProp.title};
			for(let fieldIdx in fieldsetProp.fields){
				let fieldId = fieldsetProp.fields[fieldIdx];
				let fieldSettings = schema.properties[fieldId];
				let fieldType = fieldSettings.type;
				if (requiredFields.indexOf(fieldId) > -1) {
					fieldSettings.required = true;
				}
				if (fieldId === "description") {
					fieldType = "textline";
				}
				if(this.model.hasOwnProperty(fieldId)){
					fieldSettings.value=this.model[fieldId];
				}
				fieldsetData.fields.push({type:fieldType, id: fieldId, settings: fieldSettings});
			}
			this.fieldsets.push(fieldsetData);
		}
	}

	private parseOrder(schema: any): any[]{
		schema.fieldsets = [{
			id: "fieldset-default",
			title: "",
			fields: schema.order
		}];
		this.parseFieldsets(schema);
	}

	private parseActions(schema): any[]{
		if(schema.links !== undefined){
			this.actions = schema.links;
		} else {
			this.actions = [];
		}
	}

	onSubmit(evt){
		alert(evt);
	}

	getModel(): any{
		let model = {};
		for(let id in this.fields) {
			let field = this.fields[id];
			model[field.id]=field.settings.value;
		}
		return model;
	}
}
