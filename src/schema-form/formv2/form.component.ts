import {
	Component,
	Input,
	provide
} from "@angular/core";

import { FormPropertyFactory } from "../model/formpropertyfactory";
import { FormPropertyGroup } from "../model/formproperty";
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
	rootProperty: FormPropertyGroup = null;

	constructor(private formPropertyFactory: FormPropertyFactory) { }

	ngOnInit() {
		SchemaPreprocessor.preprocess(this.schema);
		this.rootProperty = <FormPropertyGroup>(this.formPropertyFactory.createProperty(this.schema));
		this.rootProperty.reset(this.model);
	}
}
