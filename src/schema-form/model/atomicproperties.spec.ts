import {
	FormProperty
} from "./formproperty";

import {
	AtomicProperty
} from "./atomicproperty";

import {
	IntegerProperty
} from "./integerproperty";

import {
	ZSchemaValidatorFactory,
	SchemaValidatorFactory
} from "../schemavalidatorfactory";

class AtomicPropertyImpl extends AtomicProperty {

	protected fallbackValue() {
		return Symbol();
	}
}

describe("Atomic properties", () => {
	let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();

	describe("AtomicProperty", () => {
		let THE_PROPERTY_SCHEMA = {};
		let THE_VALUE = "FOO";
		let atomicProperty: AtomicProperty;

		beforeEach(() => {
			atomicProperty = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, THE_PROPERTY_SCHEMA);
		});

		it("should call updateValue when reset", () => {
			spyOn(atomicProperty, "updateValue");
			atomicProperty.reset();

			expect(atomicProperty.updateValue).toHaveBeenCalled();
		});

		it("reset with argument should call updateValue with this argument", () => {
			spyOn(atomicProperty, "updateValue");
			atomicProperty.reset(THE_VALUE);

			expect(atomicProperty.updateValue).toHaveBeenCalledWith(THE_VALUE);
		});

		it("reset with no argument and default value in schema should use the default value", () => {
			let THE_DEFAULT_VALUE = Symbol();
			let A_SCHEMA_WITH_DEFAULT = {"default": THE_DEFAULT_VALUE };
			let atomicPropertyWithDefault = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_SCHEMA_WITH_DEFAULT);
			spyOn(atomicPropertyWithDefault, "updateValue");

			atomicPropertyWithDefault.reset();

			expect(atomicPropertyWithDefault.updateValue).toHaveBeenCalledWith(THE_DEFAULT_VALUE);

		});

		it("reset with no argument, and no default value in schema use property's type fallback default", () => {
			let fallback = Symbol();
			spyOn(atomicProperty, "fallbackValue").and.returnValue(fallback);
			spyOn(atomicProperty, "updateValue");

			atomicProperty.reset();

			expect(atomicProperty.updateValue).toHaveBeenCalledWith(fallback);
		});
	});

	describe("IntegerProperty", () => {

		let AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM = {"type": "integer", "minimum": 10};
		let AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM = {"type": "integer"};

		it("with minimum in schema should fallback to minimum on reset", () => {
			let property = new IntegerProperty(A_SCHEMA_VALIDATOR_FACTORY, AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM);

			property.reset();

			expect(property.value).toBe(AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM.minimum);
		})

		it("without minimum in schema should fallback to 0 on reset", () => {
			let property = new IntegerProperty(A_SCHEMA_VALIDATOR_FACTORY, AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM);

			property.reset();

			expect(property.value).toBe(0)
		})
	})
})
