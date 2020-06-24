import {
  AtomicProperty
} from './atomicproperty';

import {
  StringProperty
} from './stringproperty';

import {
  NumberProperty
} from './numberproperty';

import {
  ValidatorRegistry
} from './validatorregistry';

import {
  ZSchemaValidatorFactory
} from '../schemavalidatorfactory';
import { JEXLExpressionCompilerFactory } from '../expression-compiler-factory';
import {ISchema} from './ISchema';
import { DefaultLogService, LogLevel } from '../log.service';

class AtomicPropertyImpl extends AtomicProperty {

  fallbackValue() {
    return Symbol();
  }
}

describe('Atomic properties', () => {
  const A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
  const A_VALIDATOR_REGISTRY = new ValidatorRegistry();
  const A_EXPRESSION_COMPILER_FACTORY = new JEXLExpressionCompilerFactory();
  const A_LOGGER = new DefaultLogService(LogLevel.off);

  describe('AtomicProperty', () => {
    const THE_PROPERTY_SCHEMA = {};
    let atomicProperty: AtomicProperty;

    beforeEach(() => {
      atomicProperty = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, A_EXPRESSION_COMPILER_FACTORY, THE_PROPERTY_SCHEMA, null, '', A_LOGGER);
    });

    it('reset with no argument and default value in schema should use the default value', () => {
      const THE_DEFAULT_VALUE = Symbol();
      const A_SCHEMA_WITH_DEFAULT = {'default': THE_DEFAULT_VALUE };
      const atomicPropertyWithDefault = new AtomicPropertyImpl(
        A_SCHEMA_VALIDATOR_FACTORY,
        A_VALIDATOR_REGISTRY,
        A_EXPRESSION_COMPILER_FACTORY,
        A_SCHEMA_WITH_DEFAULT,
        null,
        '',
        A_LOGGER
      );

      atomicPropertyWithDefault.reset();

      expect(atomicPropertyWithDefault.value).toBe(THE_DEFAULT_VALUE);
    });

    it('reset with no argument, and no default value in schema use property\'s type fallback default', () => {
      const fallback = Symbol();
      spyOn(atomicProperty, 'fallbackValue').and.returnValue(fallback);

      atomicProperty.reset();

      expect(atomicProperty.value).toBe(fallback);
    });
  });

  describe('StringProperty', () => {

    const A_STRING_PROPERTY: ISchema = {'type': 'string'};

    it('should fallback to empty string', () => {
      const property = new StringProperty(
        A_SCHEMA_VALIDATOR_FACTORY,
        A_VALIDATOR_REGISTRY,
        A_EXPRESSION_COMPILER_FACTORY,
        A_STRING_PROPERTY,
        null,
        '',
        A_LOGGER
      );

      property.reset();

      expect(property.value).toBe('');
    });
  });

  describe('NumberProperty', () => {

    const AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM: ISchema = {'type': 'number'};

    it('without minimum in schema should fallback to null on reset', () => {
      const property = new NumberProperty(
        A_SCHEMA_VALIDATOR_FACTORY,
        A_VALIDATOR_REGISTRY,
        A_EXPRESSION_COMPILER_FACTORY,
        AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM,
        null,
        '',
        A_LOGGER
      );

      property.reset();

      expect(property.value).toBe(null);
    });
  });
});
