import {
  AtomicProperty
} from './atomicproperty';

import {
  NumberProperty
} from './numberproperty';

import {
  ValidatorRegistry
} from './validatorregistry';

import {
  ZSchemaValidatorFactory
} from '../schemavalidatorfactory';

class AtomicPropertyImpl extends AtomicProperty {

  fallbackValue() {
    return Symbol();
  }
}

describe('Atomic properties', () => {
  let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
  let A_VALIDATOR_REGISTRY = new ValidatorRegistry();

  describe('AtomicProperty', () => {
    let THE_PROPERTY_SCHEMA = {};
    let atomicProperty: AtomicProperty;

    beforeEach(() => {
      atomicProperty = new AtomicPropertyImpl(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY, THE_PROPERTY_SCHEMA, null, '');
    });

    it('reset with no argument and default value in schema should use the default value', () => {
      let THE_DEFAULT_VALUE = Symbol();
      let A_SCHEMA_WITH_DEFAULT = {'default': THE_DEFAULT_VALUE };
      let atomicPropertyWithDefault = new AtomicPropertyImpl(
        A_SCHEMA_VALIDATOR_FACTORY,
        A_VALIDATOR_REGISTRY,
        A_SCHEMA_WITH_DEFAULT,
        null,
        ''
      );

      atomicPropertyWithDefault.reset();

      expect(atomicPropertyWithDefault.value).toBe(THE_DEFAULT_VALUE);
    });

    it('reset with no argument, and no default value in schema use property\'s type fallback default', () => {
      let fallback = Symbol();
      spyOn(atomicProperty, 'fallbackValue').and.returnValue(fallback);

      atomicProperty.reset();

      expect(atomicProperty.value).toBe(fallback);
    });
  });

  describe('NumberProperty', () => {

    let AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM = {'type': 'number'};

    it('without minimum in schema should fallback to null on reset', () => {
      let property = new NumberProperty(
        A_SCHEMA_VALIDATOR_FACTORY,
        A_VALIDATOR_REGISTRY,
        AN_INT_PROPERTY_SCHEMA_WITHOUT_MINIMUM,
        null,
        ''
      );

      property.reset();

      expect(property.value).toBe(null);
    });
  });
});
