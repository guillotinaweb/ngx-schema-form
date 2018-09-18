import { FormProperty, PropertyGroup } from './formproperty';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { ValidatorRegistry } from './validatorregistry';
export declare class FormPropertyFactory {
    private schemaValidatorFactory;
    private validatorRegistry;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, validatorRegistry: ValidatorRegistry);
    createProperty(schema: any, parent?: PropertyGroup, propertyId?: string): FormProperty;
    private initializeRoot(rootProperty);
}
