import {FormProperty, PropertyGroup} from './formproperty';
import {SchemaValidatorFactory} from '../schemavalidatorfactory';
import {ValidatorRegistry} from './validatorregistry';
import {PropertyBindingRegistry} from '../property-binding-registry';
import { ExpressionCompilerFactory } from '../expression-compiler-factory';
import { PROPERTY_TYPE_MAPPING } from './typemapping';
import {ISchema} from './ISchema';
import { LogService } from '../log.service';

export class FormPropertyFactory {

  constructor(private schemaValidatorFactory: SchemaValidatorFactory, private validatorRegistry: ValidatorRegistry,
              private propertyBindingRegistry: PropertyBindingRegistry,
              private expressionCompilerFactory: ExpressionCompilerFactory,
              private logger: LogService) {
  }

  createProperty(schema: ISchema, parent: PropertyGroup = null, propertyId?: string): FormProperty {
    let newProperty = null;
    let path = '';
    let _canonicalPath = '';
    if (parent) {
      path += parent.path;
      if (parent.parent !== null) {
        path += '/';
        _canonicalPath += '/';
      }
      if (parent.type === 'object') {
        path += propertyId;
        _canonicalPath += propertyId;
      } else if (parent.type === 'array') {
        path += '*';
        _canonicalPath += '*';
      } else {
        throw 'Instanciation of a FormProperty with an unknown parent type: ' + parent.type;
      }
      _canonicalPath = (parent._canonicalPath || parent.path) + _canonicalPath;
    } else {
      path = '/';
      _canonicalPath = '/';
    }

    if (schema.$ref) {
      const refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
      newProperty = this.createProperty(refSchema, parent, path);
    } else {
        if (PROPERTY_TYPE_MAPPING[schema.type]) {
            if (schema.type === 'object' || schema.type === 'array') {
                newProperty = PROPERTY_TYPE_MAPPING[schema.type](
                    this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this, this.logger);
            } else {
                newProperty = PROPERTY_TYPE_MAPPING[schema.type](
                    this.schemaValidatorFactory, this.validatorRegistry, this.expressionCompilerFactory, schema, parent, path, this.logger);
            }
        } else {
            throw new TypeError(`Undefined type ${schema.type} (existing: ${Object.keys(PROPERTY_TYPE_MAPPING)})`);
        }
    }

    newProperty._propertyBindingRegistry = this.propertyBindingRegistry;
    newProperty._canonicalPath = _canonicalPath;

    if (newProperty instanceof PropertyGroup) {
      this.initializeRoot(newProperty);
    }

    return newProperty;
  }

  private initializeRoot(rootProperty: PropertyGroup) {
    rootProperty.reset(null, true);
    rootProperty._bindVisibility();
  }
}
