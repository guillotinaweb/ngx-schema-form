import { ObjectProperty } from './objectproperty';
import { FormPropertyFactory } from './formpropertyfactory';

import {
  ZSchemaValidatorFactory
} from '../schemavalidatorfactory';

import { ValidatorRegistry } from './validatorregistry';

describe('ObjectProperty', () => {

  let A_VALIDATOR_REGISTRY = new ValidatorRegistry();
  let A_SCHEMA_VALIDATOR_FACTORY = new ZSchemaValidatorFactory();
  let A_FORM_PROPERTY_FACTORY = new FormPropertyFactory(A_SCHEMA_VALIDATOR_FACTORY, A_VALIDATOR_REGISTRY);


  let THE_OBJECT_SCHEMA = {
    type: 'object',
    properties: {
      FOO: {type: 'integer'},
      BAR: {type: 'integer'},
      BAZ: {type: 'object'}
    }
  };

  let objProperty: ObjectProperty;


  beforeEach(() => {
    objProperty = new ObjectProperty(
      A_FORM_PROPERTY_FACTORY,
      A_SCHEMA_VALIDATOR_FACTORY,
      A_VALIDATOR_REGISTRY,
      THE_OBJECT_SCHEMA,
      null,
      ''
    );
  });

  it('should create same properties as in the schema', () => {

    for (let propertyId in THE_OBJECT_SCHEMA.properties) {
      if (THE_OBJECT_SCHEMA.properties.hasOwnProperty(propertyId)) {
        let property = objProperty.getProperty(propertyId);
        expect(property).toBeDefined();
      }
    }
  });

});
