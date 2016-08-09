import { FormProperty } from "./formproperty";
import { IntegerProperty } from "./integerproperty";
import { ObjectProperty } from "./objectproperty";
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class FormPropertyFactory {
	constructor(private schemaValidatorFactory: SchemaValidatorFactory) {}
	createProperty(schema: any, parent: ObjectProperty = null): FormProperty {
		switch(schema.type) {
			case"integer":
				return new IntegerProperty(this.schemaValidatorFactory, schema, parent);
			case "object":
				return new ObjectProperty(this, this.schemaValidatorFactory, schema, parent);
			default:
				throw new TypeError(`Undefined type ${schema.type}`)
		}
	}
}
