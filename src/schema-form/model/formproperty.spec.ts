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
  let THE_SCHEMA_VALIDATOR_FACTORY =  new ZSchemaValidatorFactory();
  let THE_VALIDATOR_REGISTRY = new ValidatorRegistry();
  let THE_PROPERTY_SCHEMA = {};
  let THE_PARENT_PROPERTY_SCHEMA = {};
  let THE_VALIDATOR;

  let formProperty: FormProperty;
  let propertyGroup: PropertyGroup;

  beforeEach(() => {
    THE_VALIDATOR = jasmine.createSpy("a_validator");
    spyOn(THE_SCHEMA_VALIDATOR_FACTORY, "createValidatorFn").and.returnValue(THE_VALIDATOR);

    propertyGroup = new PropertyGroupImpl(THE_SCHEMA_VALIDATOR_FACTORY, THE_VALIDATOR_REGISTRY, THE_PARENT_PROPERTY_SCHEMA, null, "");
    spyOn(propertyGroup, "updateValueAndValidity");
    formProperty = new FormPropertyImpl(THE_SCHEMA_VALIDATOR_FACTORY, THE_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, propertyGroup, "");
  });

  it("should create a validator on construction", () => {
    expect(THE_SCHEMA_VALIDATOR_FACTORY.createValidatorFn).toHaveBeenCalledWith(THE_PROPERTY_SCHEMA);
  });

  it("should validate using the validator created on construction", () => {

    formProperty._runValidation();

    expect(THE_VALIDATOR).toHaveBeenCalled();

  });

  describe("With a parent", () => {

    it("should notify parent when changed", () => {
      formProperty.updateValueAndValidity();

      expect(propertyGroup.updateValueAndValidity).toHaveBeenCalled();
    });

  });

  describe("Without a parent", () => {

    it("should not throw when changed", () => {
      let orphanFormProperty = new FormPropertyImpl(THE_SCHEMA_VALIDATOR_FACTORY, THE_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, propertyGroup, "");
      let updateValue = (() => { orphanFormProperty.updateValueAndValidity(); });

      expect(updateValue).not.toThrow();
    });

  });



});
