import {Component, Directive, Input} from "@angular/core";
import {FieldChooser} from "./chooser";
import {FieldRegistry} from "./registry";
import {StringField} from "./fields/string";
import {IntegerField} from "./fields/integer";
import {TextLineField} from "./fields/textline";
import {Router} from "@angular/router";

FieldRegistry.registerField("string", StringField);
FieldRegistry.registerField("integer", IntegerField);
FieldRegistry.registerField("textline", TextLineField);

@Component({
	selector: "schema-form",
	directives: [
		FieldChooser
	],
	template: require("./form.component.html")
})
export class Form {

	@Input() schema: any;
	_components: {} = {};
	fields: { field: any, type: string, id: string, settings: any}[] = [];
	@Input() model: any = {};
	constructor(
	) {}

	ngOnInit() {

		let fields = [];
		let ids = [];

		for (let id in this.schema.properties) {
			let settings = this.schema.properties[id];
			if(this.model.hasOwnProperty(id)) {
				settings.value=this.model[id];
			}
			if (this.schema.required.indexOf(id) > -1) {
				settings.required = true;
			}
			let type = settings["type"];
			// TODO: remove exception
			if (id === "description") {
				type = "textline";
			}
			this._components[id] = new FieldChooser();
			fields.push({
				field: this._components[id],
				type: type,
				id: id,
				settings: settings
			});
			ids.push(id);

		}
		this.fields = fields;
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
