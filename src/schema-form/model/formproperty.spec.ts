import {
	FormProperty,
	FormPropertyGroup
} from "./formproperty";
import {
	ZSchemaValidatorFactory,
	SchemaValidatorFactory
} from "../schemavalidatorfactory";

class FormPropertyImpl extends FormProperty {

	protected fallbackValue() {
		return Symbol();
	}

	reset() {}
}

class FormPropertyGroupImpl extends FormPropertyGroup {

	onChildValueChanged(formProperty: FormProperty) {}

	reset() {}
}

describe("FormProperty", () => {
	let A_VALUE = "FOO";
	let THE_VALUE = "BAR";
	let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
	let THE_SCHEMA_VALIDATOR_FACTORY;
	let A_PROPERTY_SCHEMA = {};
	let THE_PROPERTY_SCHEMA = {};
	let THE_PARENT_PROPERTY_SCHEMA = {};
	let THE_VALIDATOR;

	let formProperty: FormProperty;
	let parentProperty: FormPropertyGroup;

	beforeEach(() => {
		THE_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
		THE_VALIDATOR = jasmine.createSpy("a_validator");
		spyOn(THE_SCHEMA_VALIDATOR_FACTORY, "createValidatorFn").and.returnValue(THE_VALIDATOR);

		parentProperty = new FormPropertyGroupImpl(THE_SCHEMA_VALIDATOR_FACTORY,THE_PARENT_PROPERTY_SCHEMA);
		spyOn(parentProperty,"onChildValueChanged");
		formProperty = new FormPropertyImpl(THE_SCHEMA_VALIDATOR_FACTORY, THE_PROPERTY_SCHEMA, parentProperty);
	});

	it("should create a validator on construction", () => {
		expect(THE_SCHEMA_VALIDATOR_FACTORY.createValidatorFn).toHaveBeenCalledWith(THE_PROPERTY_SCHEMA);
	});

	it("should validate using the validator created on construction", () => {

		formProperty.validate();
		
		expect(THE_VALIDATOR).toHaveBeenCalled();

	});

	it("with parent should notify parent when changed", () => {
		formProperty.updateValue(A_VALUE);

		expect(parentProperty.onChildValueChanged).toHaveBeenCalledWith(formProperty);
	});

	it("with no parent should not throw when changed", () => {
		let orphanFormProperty = new FormPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, THE_PROPERTY_SCHEMA, null);

		function updateValue() {
			orphanFormProperty.updateValue(A_VALUE);
		}

		expect(updateValue).not.toThrow();
	});


});
