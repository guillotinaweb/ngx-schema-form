import { FormProperty, PropertyGroup } from './formproperty';

import {
  ZSchemaValidatorFactory
} from '../schemavalidatorfactory';

import { ValidatorRegistry } from './validatorregistry';
import { JEXLExpressionCompilerFactory } from '../expression-compiler-factory';
import { DefaultLogService, LogLevel } from '../log.service';

class FormPropertyImpl extends FormProperty {

  fallbackValue() {
    return Symbol();
  }
  _updateValue() {}
  setValue() {}
  reset() {}
  _hasValue() {return true;}
}

class PropertyGroupImpl extends PropertyGroup {

  _updateValue() {}
  setValue() {}
  _hasValue() {return true;}

  reset() {}
}

describe('FormProperty', () => {
  let THE_SCHEMA_VALIDATOR_FACTORY =  new ZSchemaValidatorFactory();
  let THE_VALIDATOR_REGISTRY = new ValidatorRegistry();
  let THE_EXPRESSION_COMPILER_FACTORY = new JEXLExpressionCompilerFactory();
  let THE_PROPERTY_SCHEMA = {};
  let THE_PARENT_PROPERTY_SCHEMA = {};
  let THE_VALIDATOR;
  let THE_LOGGER = new DefaultLogService(LogLevel.off);

  let formProperty: FormProperty;
  let propertyGroup: PropertyGroup;

  beforeEach(() => {
    THE_VALIDATOR = jasmine.createSpy('a_validator');
    spyOn(THE_SCHEMA_VALIDATOR_FACTORY, 'createValidatorFn').and.returnValue(THE_VALIDATOR);

    propertyGroup = new PropertyGroupImpl(
      THE_SCHEMA_VALIDATOR_FACTORY,
      THE_VALIDATOR_REGISTRY,
      THE_EXPRESSION_COMPILER_FACTORY,
      THE_PARENT_PROPERTY_SCHEMA,
      null,
      '',
      THE_LOGGER
    );
    spyOn(propertyGroup, 'updateValueAndValidity');
    formProperty = new FormPropertyImpl(
      THE_SCHEMA_VALIDATOR_FACTORY,
      THE_VALIDATOR_REGISTRY,
      THE_EXPRESSION_COMPILER_FACTORY,
      THE_PROPERTY_SCHEMA,
      propertyGroup,
      '',
      THE_LOGGER
    );
  });

  it('should create a validator on construction', () => {
    expect(THE_SCHEMA_VALIDATOR_FACTORY.createValidatorFn).toHaveBeenCalledWith(THE_PROPERTY_SCHEMA);
  });

  it('should validate using the validator created on construction', () => {

    formProperty._runValidation();

    expect(THE_VALIDATOR).toHaveBeenCalled();

  });

  describe('With a parent', () => {

    it('should notify parent when changed', () => {
      formProperty.updateValueAndValidity();

      expect(propertyGroup.updateValueAndValidity).toHaveBeenCalled();
    });

  });

  describe('Without a parent', () => {

    it('should not throw when changed', () => {
      let orphanFormProperty = new FormPropertyImpl(
        THE_SCHEMA_VALIDATOR_FACTORY,
        THE_VALIDATOR_REGISTRY,
        THE_EXPRESSION_COMPILER_FACTORY,
        THE_PROPERTY_SCHEMA,
        propertyGroup,
        '',
        THE_LOGGER
      );
      let updateValue = (() => { orphanFormProperty.updateValueAndValidity(); });

      expect(updateValue).not.toThrow();
    });

  });



});
