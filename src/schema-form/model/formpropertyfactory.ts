import { FormProperty } from "./formproperty";
import { NumberProperty } from "./numberproperty";
import { StringProperty } from "./stringproperty";
import { BooleanProperty } from "./booleanproperty";
import { ObjectProperty } from "./objectproperty";
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class FormPropertyFactory {
	constructor(private schemaValidatorFactory: SchemaValidatorFactory) {}
	createProperty(schema: any, parent: ObjectProperty = null): FormProperty {
		let newProperty = null;
		switch(schema.type) {
			case "integer":
			case "number":
				newProperty = new NumberProperty(this.schemaValidatorFactory, schema, parent);
			break;
			case "string":
				newProperty = new StringProperty(this.schemaValidatorFactory, schema, parent);
			break;
			case "boolean":
				newProperty = new BooleanProperty(this.schemaValidatorFactory, schema, parent);
			break;
			case "object":
				newProperty = new ObjectProperty(this, this.schemaValidatorFactory, schema, parent);
			break;
			default:
				throw new TypeError(`Undefined type ${schema.type}`)
		}

		if(schema.type === "object" && parent === null) {
			this.initializeRoot(newProperty);
		}
		return newProperty;
	}
	
	private initializeRoot(rootProperty: ObjectProperty) {
		rootProperty.reset(null, true);
		rootProperty._bindVisibility();
	}
}
