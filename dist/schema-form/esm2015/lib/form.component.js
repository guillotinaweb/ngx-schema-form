/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActionRegistry } from './model/actionregistry';
import { FormPropertyFactory } from './model/formpropertyfactory';
import { SchemaPreprocessor } from './model/schemapreprocessor';
import { ValidatorRegistry } from './model/validatorregistry';
import { BindingRegistry } from './model/bindingregistry';
import { SchemaValidatorFactory } from './schemavalidatorfactory';
import { WidgetFactory } from './widgetfactory';
import { TerminatorService } from './terminator.service';
/**
 * @param {?} schemaValidatorFactory
 * @param {?} validatorRegistry
 * @return {?}
 */
export function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
}
export class FormComponent {
    /**
     * @param {?} formPropertyFactory
     * @param {?} actionRegistry
     * @param {?} validatorRegistry
     * @param {?} bindingRegistry
     * @param {?} cdr
     * @param {?} terminator
     */
    constructor(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.bindingRegistry = bindingRegistry;
        this.cdr = cdr;
        this.terminator = terminator;
        this.schema = null;
        this.actions = {};
        this.validators = {};
        this.bindings = {};
        this.onChange = new EventEmitter();
        this.modelChange = new EventEmitter();
        this.isValid = new EventEmitter();
        this.onErrorChange = new EventEmitter();
        this.onErrorsChange = new EventEmitter();
        this.rootProperty = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (this.rootProperty) {
            this.rootProperty.reset(obj, false);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
        if (this.rootProperty) {
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["validators"]) {
            this.setValidators();
        }
        if (changes["actions"]) {
            this.setActions();
        }
        if (changes["bindings"]) {
            this.setBindings();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes["schema"]) {
            if (!changes["schema"].firstChange) {
                this.terminator.destroy();
            }
            SchemaPreprocessor.preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            if (this.model) {
                // this.rootProperty.reset(this.model, false);
            }
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
            this.rootProperty.errorsChanges.subscribe(value => {
                this.onErrorChange.emit({ value: value });
                this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes["model"] || changes["schema"])) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    setValidators() {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (const /** @type {?} */ validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setActions() {
        this.actionRegistry.clear();
        if (this.actions) {
            for (const /** @type {?} */ actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setBindings() {
        this.bindingRegistry.clear();
        if (this.bindings) {
            for (const /** @type {?} */ bindingPath in this.bindings) {
                if (this.bindings.hasOwnProperty(bindingPath)) {
                    this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.rootProperty.reset(null, true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setModel(value) {
        if (this.model) {
            Object.assign(this.model, value);
        }
        else {
            this.model = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChanges(value) {
        if (this.onChangeCallback) {
            this.setModel(value);
            this.onChangeCallback(value);
        }
        // two way binding is used
        if (this.modelChange.observers.length > 0) {
            if (!this.onChangeCallback) {
                this.setModel(value);
            }
            this.modelChange.emit(value);
        }
        this.onChange.emit({ value: value });
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-form',
                template: `
    <form>
      <sf-form-element
        *ngIf="rootProperty" [formProperty]="rootProperty"></sf-form-element>
    </form>`,
                providers: [
                    ActionRegistry,
                    ValidatorRegistry,
                    BindingRegistry,
                    SchemaPreprocessor,
                    WidgetFactory,
                    {
                        provide: FormPropertyFactory,
                        useFactory: useFactory,
                        deps: [SchemaValidatorFactory, ValidatorRegistry]
                    },
                    TerminatorService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: FormComponent,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormPropertyFactory, },
    { type: ActionRegistry, },
    { type: ValidatorRegistry, },
    { type: BindingRegistry, },
    { type: ChangeDetectorRef, },
    { type: TerminatorService, },
];
FormComponent.propDecorators = {
    "schema": [{ type: Input },],
    "model": [{ type: Input },],
    "actions": [{ type: Input },],
    "validators": [{ type: Input },],
    "bindings": [{ type: Input },],
    "onChange": [{ type: Output },],
    "modelChange": [{ type: Output },],
    "isValid": [{ type: Output },],
    "onErrorChange": [{ type: Output },],
    "onErrorsChange": [{ type: Output },],
};
function FormComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FormComponent.propDecorators;
    /** @type {?} */
    FormComponent.prototype.schema;
    /** @type {?} */
    FormComponent.prototype.model;
    /** @type {?} */
    FormComponent.prototype.actions;
    /** @type {?} */
    FormComponent.prototype.validators;
    /** @type {?} */
    FormComponent.prototype.bindings;
    /** @type {?} */
    FormComponent.prototype.onChange;
    /** @type {?} */
    FormComponent.prototype.modelChange;
    /** @type {?} */
    FormComponent.prototype.isValid;
    /** @type {?} */
    FormComponent.prototype.onErrorChange;
    /** @type {?} */
    FormComponent.prototype.onErrorsChange;
    /** @type {?} */
    FormComponent.prototype.rootProperty;
    /** @type {?} */
    FormComponent.prototype.onChangeCallback;
    /** @type {?} */
    FormComponent.prototype.formPropertyFactory;
    /** @type {?} */
    FormComponent.prototype.actionRegistry;
    /** @type {?} */
    FormComponent.prototype.validatorRegistry;
    /** @type {?} */
    FormComponent.prototype.bindingRegistry;
    /** @type {?} */
    FormComponent.prototype.cdr;
    /** @type {?} */
    FormComponent.prototype.terminator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXZELE1BQU0scUJBQXFCLHNCQUFzQixFQUFFLGlCQUFpQjtJQUNsRSxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0NBQzNFO0FBNEJELE1BQU07Ozs7Ozs7OztJQTBCSixZQUNVLHFCQUNBLGdCQUNBLG1CQUNBLGlCQUNBLEtBQ0E7UUFMQSx3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLG1CQUFjLEdBQWQsY0FBYztRQUNkLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsb0JBQWUsR0FBZixlQUFlO1FBQ2YsUUFBRyxHQUFI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Q0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztZQTNMdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7WUFJQTtnQkFDVixTQUFTLEVBQUU7b0JBQ1QsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixhQUFhO29CQUNiO3dCQUNFLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQztxQkFDbEQ7b0JBQ0QsaUJBQWlCO29CQUNqQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsYUFBYTt3QkFDMUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztZQXhDTyxtQkFBbUI7WUFGbkIsY0FBYztZQUlkLGlCQUFpQjtZQUdqQixlQUFlO1lBbEJyQixpQkFBaUI7WUFzQlgsaUJBQWlCOzs7dUJBa0N0QixLQUFLO3NCQUVMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsTUFBTTs0QkFFTixNQUFNO3dCQUVOLE1BQU07OEJBRU4sTUFBTTsrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL21vZGVsL2FjdGlvbic7XG5pbXBvcnQge0FjdGlvblJlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2FjdGlvbnJlZ2lzdHJ5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVByZXByb2Nlc3Nvcn0gZnJvbSAnLi9tb2RlbC9zY2hlbWFwcmVwcm9jZXNzb3InO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeSc7XG5pbXBvcnQge1ZhbGlkYXRvcn0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3InO1xuaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL21vZGVsL2JpbmRpbmcnO1xuaW1wb3J0IHtCaW5kaW5nUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYmluZGluZ3JlZ2lzdHJ5JztcblxuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtXaWRnZXRGYWN0b3J5fSBmcm9tICcuL3dpZGdldGZhY3RvcnknO1xuaW1wb3J0IHtUZXJtaW5hdG9yU2VydmljZX0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdmFsaWRhdG9yUmVnaXN0cnkpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybT5cbiAgICAgIDxzZi1mb3JtLWVsZW1lbnRcbiAgICAgICAgKm5nSWY9XCJyb290UHJvcGVydHlcIiBbZm9ybVByb3BlcnR5XT1cInJvb3RQcm9wZXJ0eVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuICAgIDwvZm9ybT5gLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY3Rpb25SZWdpc3RyeSxcbiAgICBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBCaW5kaW5nUmVnaXN0cnksXG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLFxuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgVmFsaWRhdG9yUmVnaXN0cnldXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBGb3JtQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIGFjdGlvbnM6IHsgW2FjdGlvbklkOiBzdHJpbmddOiBBY3Rpb24gfSA9IHt9O1xuXG4gIEBJbnB1dCgpIHZhbGlkYXRvcnM6IHsgW3BhdGg6IHN0cmluZ106IFZhbGlkYXRvciB9ID0ge307XG5cbiAgQElucHV0KCkgYmluZGluZ3M6IHsgW3BhdGg6IHN0cmluZ106IEJpbmRpbmcgfSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTogYW55IH0+KCk7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IGFueVtdIH0+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7dmFsdWU6IGFueX0+KCk7XG5cbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xuXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICBwcml2YXRlIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBwcml2YXRlIGJpbmRpbmdSZWdpc3RyeTogQmluZGluZ1JlZ2lzdHJ5LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlXG4gICkgeyB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQob2JqLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5KSB7XG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgLy8gc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKT86IHZvaWRcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudmFsaWRhdG9ycykge1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYWN0aW9ucykge1xuICAgICAgdGhpcy5zZXRBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYmluZGluZ3MpIHtcbiAgICAgIHRoaXMuc2V0QmluZGluZ3MoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgIXRoaXMuc2NoZW1hLnR5cGUpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgY2hhbmdlcy5zY2hlbWEpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zY2hlbWEuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3ModGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEpO1xuICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgLy8gdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdCghKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgKGNoYW5nZXMubW9kZWwgfHwgY2hhbmdlcy5zY2hlbWEgKSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0b3JzKSB7XG4gICAgICBmb3IgKGNvbnN0IHZhbGlkYXRvcklkIGluIHRoaXMudmFsaWRhdG9ycykge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRvcklkKSkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkucmVnaXN0ZXIodmFsaWRhdG9ySWQsIHRoaXMudmFsaWRhdG9yc1t2YWxpZGF0b3JJZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25zKCkge1xuICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5hY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGlvbklkIGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmhhc093blByb3BlcnR5KGFjdGlvbklkKSkge1xuICAgICAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkucmVnaXN0ZXIoYWN0aW9uSWQsIHRoaXMuYWN0aW9uc1thY3Rpb25JZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCaW5kaW5ncygpIHtcbiAgICB0aGlzLmJpbmRpbmdSZWdpc3RyeS5jbGVhcigpO1xuICAgIGlmICh0aGlzLmJpbmRpbmdzKSB7XG4gICAgICBmb3IgKGNvbnN0IGJpbmRpbmdQYXRoIGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuYmluZGluZ3MuaGFzT3duUHJvcGVydHkoYmluZGluZ1BhdGgpKSB7XG4gICAgICAgICAgdGhpcy5iaW5kaW5nUmVnaXN0cnkucmVnaXN0ZXIoYmluZGluZ1BhdGgsIHRoaXMuYmluZGluZ3NbYmluZGluZ1BhdGhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldChudWxsLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZWwodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kZWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZXModmFsdWUpIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnNldE1vZGVsKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdHdvIHdheSBiaW5kaW5nIGlzIHVzZWRcbiAgICBpZiAodGhpcy5tb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCF0aGlzLm9uQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRNb2RlbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICB9XG59XG4iXX0=