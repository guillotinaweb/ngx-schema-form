import { FormProperty, PropertyGroup } from './formproperty';
import { FormPropertyFactory } from './formpropertyfactory';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { ValidatorRegistry } from './validatorregistry';
export declare class ArrayProperty extends PropertyGroup {
    private formPropertyFactory;
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, validatorRegistry: ValidatorRegistry, schema: any, parent: PropertyGroup, path: string);
    addItem(value?: any): FormProperty;
    private addProperty();
    removeItem(index: number): void;
    setValue(value: any, onlySelf: boolean): void;
    _updateValue(): void;
    private reduceValue();
    reset(value: any, onlySelf?: boolean): void;
    private createProperties();
    private resetProperties(value);
}
