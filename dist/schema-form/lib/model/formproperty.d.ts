import { BehaviorSubject } from 'rxjs';
import { SchemaValidatorFactory } from '../schemavalidatorfactory';
import { ValidatorRegistry } from './validatorregistry';
export declare abstract class FormProperty {
    private validatorRegistry;
    schema: any;
    schemaValidator: Function;
    _value: any;
    _errors: any;
    private _valueChanges;
    private _errorsChanges;
    private _visible;
    private _visibilityChanges;
    private _root;
    private _parent;
    private _path;
    constructor(schemaValidatorFactory: SchemaValidatorFactory, validatorRegistry: ValidatorRegistry, schema: any, parent: PropertyGroup, path: string);
    readonly valueChanges: BehaviorSubject<any>;
    readonly errorsChanges: BehaviorSubject<any>;
    readonly type: string;
    readonly parent: PropertyGroup;
    readonly root: PropertyGroup;
    readonly path: string;
    readonly value: any;
    readonly visible: boolean;
    readonly valid: boolean;
    abstract setValue(value: any, onlySelf: boolean): any;
    abstract reset(value: any, onlySelf: boolean): any;
    updateValueAndValidity(onlySelf?: boolean, emitEvent?: boolean): void;
    /**
     * @internal
     */
    abstract _hasValue(): boolean;
    /**
     *  @internal
     */
    abstract _updateValue(): any;
    /**
     * @internal
     */
    _runValidation(): any;
    private mergeErrors(errors, newErrors);
    private setErrors(errors);
    extendErrors(errors: any): void;
    searchProperty(path: string): FormProperty;
    findRoot(): PropertyGroup;
    private setVisible(visible);
    _bindVisibility(): void;
}
export declare abstract class PropertyGroup extends FormProperty {
    properties: FormProperty[] | {
        [key: string]: FormProperty;
    };
    getProperty(path: string): any;
    forEachChild(fn: (formProperty: FormProperty, str: String) => void): void;
    forEachChildRecursive(fn: (formProperty: FormProperty) => void): void;
    _bindVisibility(): void;
    private _bindVisibilityRecursive();
    isRoot(): boolean;
}
