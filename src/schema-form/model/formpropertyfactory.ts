import { FormProperty } from "./formproperty";
import { NumberProperty } from "./numberproperty";
import { StringProperty } from "./stringproperty";
import { BooleanProperty } from "./booleanproperty";
import { ObjectProperty } from "./objectproperty";
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class FormPropertyFactory {
	constructor(private schemaValidatorFactory: SchemaValidatorFactory) {}
	createProperty(schema: any, parent: ObjectProperty = null): FormProperty {
		switch(schema.type) {
			case "integer":
			case "number":
				return new NumberProperty(this.schemaValidatorFactory, schema, parent);
			case "string":
				return new StringProperty(this.schemaValidatorFactory, schema, parent);
			case "boolean":
				return new BooleanProperty(this.schemaValidatorFactory, schema, parent);
			case "object":
				return new ObjectProperty(this, this.schemaValidatorFactory, schema, parent);
			default:
				throw new TypeError(`Undefined type ${schema.type}`)
		}
	}
}
