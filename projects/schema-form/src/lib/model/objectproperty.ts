import { PROPERTY_TYPE_MAPPING } from './typemapping';
import {PropertyGroup} from './formproperty';
import {FormPropertyFactory} from './formpropertyfactory';
import {SchemaValidatorFactory} from '../schemavalidatorfactory';
import {ValidatorRegistry} from './validatorregistry';
import { ExpressionCompilerFactory } from '../expression-compiler-factory';
import {ISchema} from './ISchema';
import { LogService } from '../log.service';

export class ObjectProperty extends PropertyGroup {

  private propertiesId: string[] = [];

  constructor(private formPropertyFactory: FormPropertyFactory,
              schemaValidatorFactory: SchemaValidatorFactory,
              validatorRegistry: ValidatorRegistry,
              expressionCompilerFactory: ExpressionCompilerFactory,
              schema: ISchema,
              parent: PropertyGroup,
              path: string,
              logger: LogService) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
    this.createProperties();
  }

  setValue(value: any, onlySelf: boolean) {
    for (const propertyId in value) {
      if (value.hasOwnProperty(propertyId)) {
        this.properties[propertyId].setValue(value[propertyId], true);
      }
    }
    this.updateValueAndValidity(onlySelf, true);
  }

  reset(value: any, onlySelf = true) {
    value = value || this.schema.default || {};
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  resetProperties(value: any) {
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        this.properties[propertyId].reset(value[propertyId], true);
      }
    }
  }

  createProperties() {
    this.properties = {};
    this.propertiesId = [];
    for (const propertyId in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(propertyId)) {
        const propertySchema = this.schema.properties[propertyId];
        this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
        this.propertiesId.push(propertyId);
      }
    }
  }

  public _hasValue(): boolean {
    return !!Object.keys(this.value).length;
  }

  public _updateValue() {
    this.reduceValue();
  }

  public _runValidation() {
    super._runValidation();

    if (this._errors) {
      this._errors.forEach(error => {
        const prop = this.searchProperty(error.path.slice(1));
        if (prop) {
          prop.extendErrors(error);
        }
      });
    }
  }

  private reduceValue(): void {
    const value = {};
    this.forEachChild((property, propertyId: string) => {
      if (property.visible && property._hasValue()) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }
}

PROPERTY_TYPE_MAPPING.object = (
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    expressionCompilerFactory: ExpressionCompilerFactory,
    schema: ISchema,
    parent: PropertyGroup,
    path: string,
    formPropertyFactory: FormPropertyFactory,
    logger: LogService
) => {
    return new ObjectProperty(
        formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
