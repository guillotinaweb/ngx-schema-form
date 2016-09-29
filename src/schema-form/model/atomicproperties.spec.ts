import {
  AtomicProperty
} from "./atomicproperty";

import {
  FormProperty
} from "./formproperty";

import {
  NumberProperty
} from "./numberproperty";

import {
  ValidatorRegistry
} from "./validatorregistry";

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
  let A_VALIDATOR_REGISTRY = new ValidatorRegistry();

  describe("AtomicProperty", () => {
    let THE_PROPERTY_SCHEMA = {};
    let THE_VALUE = "FOO";
    let atomicProperty: AtomicProperty;

    beforeEach(() => {
      atomicProperty = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, null, "");
    });

    it("should call updateValue when reset", () => {
      spyOn(atomicProperty, "_updateValue");
      atomicProperty.reset();

      expect(atomicProperty._updateValue).toHaveBeenCalled();
    });


    it("reset with argument should call updateValue with this argument", () => {
      spyOn(atomicProperty, "_updateValue");
      atomicProperty.reset(THE_VALUE);

      expect(atomicProperty._updateValue).toHaveBeenCalledWith(THE_VALUE);
    });

    it("reset with no argument and default value in schema should use the default value", () => {
      let THE_DEFAULT_VALUE = Symbol();
      let A_SCHEMA_WITH_DEFAULT = {"default": THE_DEFAULT_VALUE };
      let atomicPropertyWithDefault = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, A_SCHEMA_WITH_DEFAULT, null, "");
      spyOn(atomicPropertyWithDefault, "_updateValue");

      atomicPropertyWithDefault.reset();

      expect(atomicPropertyWithDefault._updateValue).toHaveBeenCalledWith(THE_DEFAULT_VALUE);

    });

    it("reset with no argument, and no default value in schema use property's type fallback default", () => {
      let fallback = Symbol();
      spyOn(atomicProperty, "fallbackValue").and.returnValue(fallback);
      spyOn(atomicProperty, "_updateValue");

      atomicProperty.reset();

      expect(atomicProperty._updateValue).toHaveBeenCalledWith(fallback);
    });
  });

  describe("NumberProperty", () => {

    let AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM = {"type": "number", "minimum": 10};
    let AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM = {"type": "number"};

    it("with minimum in schema should fallback to minimum on reset", () => {
      let property = new NumberProperty(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM, null, "");

      property.reset();

      expect(property.value).toBe(AN_INT_PROPERTY_SCHEMA_WITH_MINIMUM.minimum);
    });

    it("without minimum in schema should fallback to 0 on reset", () => {
      let property = new NumberProperty(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM, null, "");

      property.reset();

      expect(property.value).toBe(0);
    });
  });
});
