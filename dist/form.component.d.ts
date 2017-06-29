import { ChangeDetectorRef, OnChanges, EventEmitter } from '@angular/core';
import { Action, ActionRegistry, FormPropertyFactory, FormProperty, ValidatorRegistry, Validator } from './model';
import { TerminatorService } from './terminator.service';
export declare function useFactory(schemaValidatorFactory: any, validatorRegistry: any): FormPropertyFactory;
export declare class FormComponent implements OnChanges {
    private formPropertyFactory;
    private actionRegistry;
    private validatorRegistry;
    private cdr;
    private terminator;
    schema: any;
    model: any;
    errors: any;
    actions: {
        [actionId: string]: Action;
    };
    validators: {
        [path: string]: Validator;
    };
    onChange: EventEmitter<{
        value: any;
    }>;
    rootProperty: FormProperty;
    constructor(formPropertyFactory: FormPropertyFactory, actionRegistry: ActionRegistry, validatorRegistry: ValidatorRegistry, cdr: ChangeDetectorRef, terminator: TerminatorService);
    ngOnChanges(changes: any): void;
    private setValidators();
    private setActions();
    private setErrors();
    reset(): void;
}
