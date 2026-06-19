import { FormProperty, PropertyGroup } from './formproperty';
import { FormPropertyFactory } from './formpropertyfactory';
import { PROPERTY_TYPE_MAPPING } from './typemapping';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { ValidatorRegistry } from './validatorregistry';
import { ExpressionCompilerFactory } from '../expression-compiler-factory';
import { ISchema } from './ISchema';
import { LogService } from '../log.service';

export class ArrayProperty extends PropertyGroup {

  constructor(private formPropertyFactory: FormPropertyFactory,
              schemaValidatorFactory: SchemaValidatorFactory,
              validatorRegistry: ValidatorRegistry,
              expressionCompilerFactory: ExpressionCompilerFactory,
              schema: ISchema,
              parent: PropertyGroup,
              path: string,
              logger: LogService) {
    super(schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
  }

  addItem(value: any = null): FormProperty {
    let newProperty = this.addProperty();
    newProperty.reset(value, false);
    newProperty._bindVisibility();
    return newProperty;
  }

  private addProperty() {
    const schema = this.schema;
    const withPrefix = schema as ISchema & { prefixItems?: ISchema[] };
    const prefixItems = withPrefix.prefixItems;
    const tupleFromPrefix = Array.isArray(prefixItems) && prefixItems.length > 0;
    const legacyTuple = Array.isArray(schema.items);

    let itemSchema: ISchema;

    if (tupleFromPrefix) {
      const pos = (<FormProperty[]>this.properties).length;
      if (pos < prefixItems.length) {
        itemSchema = prefixItems[pos];
      } else {
        const rest =
          schema.items && typeof schema.items === 'object' && !Array.isArray(schema.items)
            ? schema.items
            : schema.additionalItems;
        if (!rest) {
          return null;
        }
        itemSchema = rest;
      }
    } else if (legacyTuple) {
      const itemSchemas = schema.items as ISchema[];
      const pos = (<FormProperty[]>this.properties).length;
      if (pos < itemSchemas.length) {
        itemSchema = itemSchemas[pos];
      } else if (schema.additionalItems) {
        itemSchema = schema.additionalItems;
      } else {
        // souldn't add new items since schema is undefined for the item at its position
        return null
      }
    } else {
      itemSchema = schema.items as ISchema;
    }

    let newProperty = this.formPropertyFactory.createProperty(itemSchema, this);
    (<FormProperty[]>this.properties).push(newProperty);
    return newProperty;
  }

  removeItem(item: FormProperty) {
    this.properties = (<FormProperty[]>this.properties).filter(i => i !== item);
    this.updateValueAndValidity(false, true);
  }

  setValue(value: any, onlySelf: boolean) {
    this.createProperties();
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  public _hasValue(): boolean {
    return true;
  }

  public _updateValue() {
    this.reduceValue();
  }

  private reduceValue(): void {
    const value = [];
    this.forEachChild((property, _) => {
      if (property.visible && property._hasValue()) {
        value.push(property.value);
      }
    });
    this._value = value;
  }

  reset(value: any, onlySelf = true) {
    value = value || this.schema.default || [];
    this.properties = [];
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  private createProperties() {
    this.properties = [];
  }


  private resetProperties(value: any) {
    for (let idx in value) {
      if (value.hasOwnProperty(idx)) {
        let property = this.addProperty();
        property.reset(value[idx], true);
      }
    }
  }
}

PROPERTY_TYPE_MAPPING.array = (
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    expressionCompilerFactory: ExpressionCompilerFactory,
    schema: ISchema,
    parent: PropertyGroup,
    path: string,
    formPropertyFactory: FormPropertyFactory,
    logger: LogService
) => {
    return new ArrayProperty(
        formPropertyFactory, schemaValidatorFactory, validatorRegistry, expressionCompilerFactory, schema, parent, path, logger);
};
