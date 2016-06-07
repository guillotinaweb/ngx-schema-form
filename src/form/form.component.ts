import {
	Component,
	ComponentResolver,
	Directive,
	Input,
	provide
} from "@angular/core";

import {FieldChooser} from "./chooser";
import {FieldFactory} from "./fieldfactory";
import {FieldRegistry} from "./fieldregistry";

@Component({
	selector: "schema-form",
	directives: [FieldChooser],
	providers: [provide(FieldFactory,{useClass: FieldFactory, deps:[FieldRegistry,ComponentResolver]})],
	template: require("./form.component.html")
})
export class Form {

	fields: { field: any, type: string, id: string, settings: any}[] = [];
	@Input() schema: any;
	@Input() model: any = {};
	constructor() {
	}

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
			fields.push({
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
