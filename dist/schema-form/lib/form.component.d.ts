import { ChangeDetectorRef, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Action } from './model/action';
import { ActionRegistry } from './model/actionregistry';
import { FormProperty } from './model/formproperty';
import { FormPropertyFactory } from './model/formpropertyfactory';
import { ValidatorRegistry } from './model/validatorregistry';
import { Validator } from './model/validator';
import { Binding } from './model/binding';
import { BindingRegistry } from './model/bindingregistry';
import { TerminatorService } from './terminator.service';
export declare function useFactory(schemaValidatorFactory: any, validatorRegistry: any): FormPropertyFactory;
export declare class FormComponent implements OnChanges, ControlValueAccessor {
    private formPropertyFactory;
    private actionRegistry;
    private validatorRegistry;
    private bindingRegistry;
    private cdr;
    private terminator;
    schema: any;
    model: any;
    actions: {
        [actionId: string]: Action;
    };
    validators: {
        [path: string]: Validator;
    };
    bindings: {
        [path: string]: Binding;
    };
    onChange: EventEmitter<{
        value: any;
    }>;
    modelChange: EventEmitter<any>;
    isValid: EventEmitter<boolean>;
    onErrorChange: EventEmitter<{
        value: any[];
    }>;
    onErrorsChange: EventEmitter<{
        value: any;
    }>;
    rootProperty: FormProperty;
    private onChangeCallback;
    constructor(formPropertyFactory: FormPropertyFactory, actionRegistry: ActionRegistry, validatorRegistry: ValidatorRegistry, bindingRegistry: BindingRegistry, cdr: ChangeDetectorRef, terminator: TerminatorService);
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setValidators();
    private setActions();
    private setBindings();
    reset(): void;
    private setModel(value);
    private onValueChanges(value);
}
