import { FormProperty, PropertyGroup } from "./formproperty";

import {
	ZSchemaValidatorFactory,
	SchemaValidatorFactory
} from "../schemavalidatorfactory";

import { ValidatorRegistry } from "./validatorregistry";

class FormPropertyImpl extends FormProperty {

	protected fallbackValue() {
		return Symbol();
	}
	_updateValue() {}
	setValue() {}
	reset() {}
}

class PropertyGroupImpl extends PropertyGroup {

	_updateValue() {}
	setValue() {}

	reset() {}
}

describe("FormProperty", () => {
	let A_VALUE = "FOO";
	let THE_VALUE = "BAR";
	let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
	let A_VALIDATOR_REGISTRY = new ValidatorRegistry();
	let THE_SCHEMA_VALIDATOR_FACTORY;
	let A_PROPERTY_SCHEMA = {};
	let THE_PROPERTY_SCHEMA = {};
	let THE_PARENT_PROPERTY_SCHEMA = {};
	let THE_VALIDATOR;

	let formProperty: FormProperty;
	let parentProperty: PropertyGroup;

	beforeEach(() => {
		THE_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
		THE_VALIDATOR = jasmine.createSpy("a_validator");
		spyOn(THE_SCHEMA_VALIDATOR_FACTORY, "createValidatorFn").and.returnValue(THE_VALIDATOR);

		parentProperty = new PropertyGroupImpl(THE_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_PARENT_PROPERTY_SCHEMA, null, "");
		spyOn(parentProperty,"updateValueAndValidity");
		formProperty = new FormPropertyImpl(THE_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, parentProperty, "");
	});

	it("should create a validator on construction", () => {
		expect(THE_SCHEMA_VALIDATOR_FACTORY.createValidatorFn).toHaveBeenCalledWith(THE_PROPERTY_SCHEMA);
	});

	it("should validate using the validator created on construction", () => {

		formProperty._runValidation();
		
		expect(THE_VALIDATOR).toHaveBeenCalled();

	});

	it("with parent should notify parent when changed", () => {
		formProperty.updateValueAndValidity();

		expect(parentProperty.updateValueAndValidity).toHaveBeenCalledWith(formProperty);
	});

	it("with no parent should not throw when changed", () => {
		let orphanFormProperty = new FormPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, null, "");

		let updateValue = (() => {orphanFormProperty.updateValueAndValidity();})

		expect(updateValue).not.toThrow();
	});


});
