import { PropertyGroup } from './formproperty';
import { FormPropertyFactory } from './formpropertyfactory';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { ValidatorRegistry } from './validatorregistry';
export declare class ObjectProperty extends PropertyGroup {
    private formPropertyFactory;
    private propertiesId;
    constructor(formPropertyFactory: FormPropertyFactory, schemaValidatorFactory: SchemaValidatorFactory, validatorRegistry: ValidatorRegistry, schema: any, parent: PropertyGroup, path: string);
    setValue(value: any, onlySelf: boolean): void;
    reset(value: any, onlySelf?: boolean): void;
    resetProperties(value: any): void;
    createProperties(): void;
    _updateValue(): void;
    private reduceValue();
}
