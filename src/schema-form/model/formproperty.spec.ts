import {
	FormProperty,
	FormPropertyGroup
} from "./formproperty";
import {
	ZSchemaValidatorFactory,
	SchemaValidatorFactory
} from "../schemavalidatorfactory";

class FormPropertyImpl extends FormProperty {
	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		propertySchema: any,
		parent: FormPropertyGroup = null
	) {
		super("test_property",schemaValidatorFactory, propertySchema, parent );
	}

	protected fallbackValue() {
		return Symbol();
	}
}

class FormPropertyGroupImpl extends FormPropertyGroup {
	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		groupSchema: any,
		parent: FormPropertyGroup = null
	) {
		super("test_group",schemaValidatorFactory, groupSchema, parent);
	}

	onChildValueChanged(formProperty: FormProperty) {}

	protected fallbackValue() {
		return Symbol();
	}

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
	})

	it("with no parent should not throw when changed", () => {
		let orphanFormProperty = new FormPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, THE_PROPERTY_SCHEMA, null);

		function updateValue() {
			orphanFormProperty.updateValue(A_VALUE);
		}

		expect(updateValue).not.toThrow();
	})

	it("should call updateValue when reset", () => {
		spyOn(formProperty, "updateValue");
		formProperty.reset();

		expect(formProperty.updateValue).toHaveBeenCalled();
	})

	it("reset with argument should call updateValue with this argument", () => {
		spyOn(formProperty, "updateValue");
		formProperty.reset(THE_VALUE);

		expect(formProperty.updateValue).toHaveBeenCalledWith(THE_VALUE);
	})
	
	it("reset with no argument and default value in schema should use the default value", () => {
		let THE_DEFAULT_VALUE = Symbol();
		let A_SCHEMA_WITH_DEFAULT = {"default": THE_DEFAULT_VALUE };
		let formPropertyWithDefault = new FormPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_SCHEMA_WITH_DEFAULT);
		spyOn(formPropertyWithDefault, "updateValue");

		formPropertyWithDefault.reset();
		
		expect(formPropertyWithDefault.updateValue).toHaveBeenCalledWith(THE_DEFAULT_VALUE);

	})

	it ("reset with no argument, and no default value in schema call property's default", () => {
		let fallback = Symbol();
		spyOn(formProperty, "fallbackValue").and.returnValue(fallback);
		spyOn(formProperty, "updateValue");

		formProperty.reset();

		expect(formProperty.updateValue).toHaveBeenCalledWith(fallback);
	})

});
