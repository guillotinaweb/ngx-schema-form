import { PropertyGroup } from "./formproperty";
import { FormPropertyFactory } from "./formpropertyfactory";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
import { ValidatorRegistry } from "./validatorregistry";

export class ObjectProperty extends PropertyGroup {

  private propertiesId: string[]= [];

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    validatorRegistry: ValidatorRegistry,
    schema: any,
    parent: PropertyGroup,
    path: string
  ) {
    super(schemaValidatorFactory, validatorRegistry, schema, parent, path);
    this.createProperties();
  }

  setValue(value: any, onlySelf: boolean) {
    for (let propertyId in value) {
      this.properties[propertyId].setValue(value[propertyId], true);
    }
    this.updateValueAndValidity(onlySelf, true);
  }

  reset(value: any, onlySelf: boolean = true) {
    value = value || this.schema.default || {};
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  resetProperties(value: any) {
    for (let propertyId in this.schema.properties) {
      this.properties[propertyId].reset(value[propertyId], true);
    }
  }

  createProperties() {
    this.properties = {};
    this.propertiesId = [];
    for (let propertyId in this.schema.properties) {
      let propertySchema = this.schema.properties[propertyId];
      let property = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
      this.properties[propertyId] = property;
      this.propertiesId.push(propertyId);
    }
  }

  public _updateValue() {
    this.reduceValue();
  }

  private reduceValue(): void {
    let value = {};
    this.forEachChild((property, propertyId: string) => {
      if (property.visible) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }

}
