import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionRegistry, FormPropertyFactory, SchemaPreprocessor, ValidatorRegistry } from './model';
import { errorGenerator } from './errorGenerator';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidatorfactory';
import { WidgetFactory } from './widgetfactory';
import { TerminatorService } from './terminator.service';
export function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
}
;
var FormComponent = (function () {
    function FormComponent(formPropertyFactory, actionRegistry, validatorRegistry, cdr, terminator) {
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.cdr = cdr;
        this.terminator = terminator;
        this.schema = null;
        this.actions = {};
        this.validators = {};
        this.onChange = new EventEmitter();
        this.rootProperty = null;
    }
    FormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.errors) {
            this.setErrors();
        }
        if (changes.actions) {
            this.setActions();
        }
        console.info('scheme1', this.schema);
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            SchemaPreprocessor.preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) { _this.onChange.emit({ value: value }); });
        }
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
        console.info('scheme2', this.schema);
    };
    FormComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    FormComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    FormComponent.prototype.setErrors = function () {
        if (!this.errors)
            return;
        var errors = errorGenerator(this.errors);
        for (var errorKey in errors) {
            this.validatorRegistry.register(errorKey, errors[errorKey]);
        }
    };
    FormComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form',
                    template: "<form #form=\"ngForm\"><sf-form-element\n  *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-form-element></form>",
                    providers: [
                        ActionRegistry,
                        ValidatorRegistry,
                        SchemaPreprocessor,
                        WidgetFactory,
                        {
                            provide: SchemaValidatorFactory,
                            useClass: ZSchemaValidatorFactory
                        }, {
                            provide: FormPropertyFactory,
                            useFactory: useFactory,
                            deps: [SchemaValidatorFactory, ValidatorRegistry]
                        },
                        TerminatorService,
                    ]
                },] },
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory, },
        { type: ActionRegistry, },
        { type: ValidatorRegistry, },
        { type: ChangeDetectorRef, },
        { type: TerminatorService, },
    ]; };
    FormComponent.propDecorators = {
        'schema': [{ type: Input },],
        'model': [{ type: Input },],
        'errors': [{ type: Input },],
        'actions': [{ type: Input },],
        'validators': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return FormComponent;
}());
export { FormComponent };
