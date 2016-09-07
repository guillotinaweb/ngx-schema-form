import { ObjectProperty } from "./objectproperty";
import { FormProperty } from "./formproperty";
import { FormPropertyFactory } from "./formpropertyfactory";

import {
	SchemaValidatorFactory,
	ZSchemaValidatorFactory
} from "../schemavalidatorfactory";

import { ValidatorRegistry } from "./validatorregistry";

describe("ObjectProperty", () => {

	let A_VALIDATOR_REGISTRY = new ValidatorRegistry();
	let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
	let A_FORM_PROPERTY_FACTORY = new FormPropertyFactory(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY);


	let THE_OBJECT_SCHEMA = {
		type: "object",
		properties: {
			FOO: {type: "integer"},
			BAR: {type: "integer"},
			BAZ: {type: "object"}
		}
	};

	let objProperty: ObjectProperty;


	beforeEach(() => {
		objProperty = new ObjectProperty(A_FORM_PROPERTY_FACTORY, A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_OBJECT_SCHEMA, null, "");
	});

	it("should create same properties as in the schema", () => {

		for (let propertyId in THE_OBJECT_SCHEMA.properties) {
			let property = objProperty.getProperty(propertyId);
			expect(property).toBeDefined();
		}
	});

	it("should reset all its properties on reset", () => {
		let propFactory = new FormPropertyFactory(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY);
		let objProp = new ObjectProperty(propFactory, A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_OBJECT_SCHEMA, null, "");
		let property = new (<any>FormProperty)(A_SCHEMA_VALIDATOR_FACTORY, {}, objProp);

		for (let propertyId in THE_OBJECT_SCHEMA.properties) {
			let newProperty = objProperty.getProperty(propertyId);
			expect(newProperty).not.toBe(property);
		}

		spyOn(propFactory, "createProperty").and.returnValue(property);

		objProp.reset(null);

		for (let propertyId in THE_OBJECT_SCHEMA.properties) {
			let newProperty = objProp.getProperty(propertyId);
			expect(newProperty).toBe(property);
		}
	});

});
