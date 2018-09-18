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
var FormComponent = /** @class */ (function () {
    function FormComponent(formPropertyFactory, actionRegistry, validatorRegistry, bindingRegistry, cdr, terminator) {
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
    FormComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (this.rootProperty) {
            this.rootProperty.reset(obj, false);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FormComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
        if (this.rootProperty) {
            this.rootProperty.valueChanges.subscribe(this.onValueChanges.bind(this));
        }
    };
    // TODO implement
    /**
     * @param {?} fn
     * @return {?}
     */
    FormComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    // TODO implement
    // setDisabledState(isDisabled: boolean)?: void
    /**
     * @param {?} changes
     * @return {?}
     */
    FormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
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
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes["model"] || changes["schema"])) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.setValidators = /**
     * @return {?}
     */
    function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var /** @type {?} */ validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.setActions = /**
     * @return {?}
     */
    function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var /** @type {?} */ actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.setBindings = /**
     * @return {?}
     */
    function () {
        this.bindingRegistry.clear();
        if (this.bindings) {
            for (var /** @type {?} */ bindingPath in this.bindings) {
                if (this.bindings.hasOwnProperty(bindingPath)) {
                    this.bindingRegistry.register(bindingPath, this.bindings[bindingPath]);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.rootProperty.reset(null, true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FormComponent.prototype.setModel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.model) {
            Object.assign(this.model, value);
        }
        else {
            this.model = value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FormComponent.prototype.onValueChanges = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form',
                    template: "\n    <form>\n      <sf-form-element\n        *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"></sf-form-element>\n    </form>",
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
    FormComponent.ctorParameters = function () { return [
        { type: FormPropertyFactory, },
        { type: ActionRegistry, },
        { type: ValidatorRegistry, },
        { type: BindingRegistry, },
        { type: ChangeDetectorRef, },
        { type: TerminatorService, },
    ]; };
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
    return FormComponent;
}());
export { FormComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRXZELE1BQU0scUJBQXFCLHNCQUFzQixFQUFFLGlCQUFpQjtJQUNsRSxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0NBQzNFOztJQXNEQyx1QkFDVSxxQkFDQSxnQkFDQSxtQkFDQSxpQkFDQSxLQUNBO1FBTEEsd0JBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQixtQkFBYyxHQUFkLGNBQWM7UUFDZCxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZTtRQUNmLFFBQUcsR0FBSCxHQUFHO1FBQ0gsZUFBVSxH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QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7Z0JBM0x0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxzSUFJQTtvQkFDVixTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiOzRCQUNFLE9BQU8sRUFBRSxtQkFBbUI7NEJBQzVCLFVBQVUsRUFBRSxVQUFVOzRCQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQzt5QkFDbEQ7d0JBQ0QsaUJBQWlCO3dCQUNqQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsYUFBYTs0QkFDMUIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBeENPLG1CQUFtQjtnQkFGbkIsY0FBYztnQkFJZCxpQkFBaUI7Z0JBR2pCLGVBQWU7Z0JBbEJyQixpQkFBaUI7Z0JBc0JYLGlCQUFpQjs7OzJCQWtDdEIsS0FBSzswQkFFTCxLQUFLOzRCQUVMLEtBQUs7K0JBRUwsS0FBSzs2QkFFTCxLQUFLOzZCQUVMLE1BQU07Z0NBRU4sTUFBTTs0QkFFTixNQUFNO2tDQUVOLE1BQU07bUNBRU4sTUFBTTs7d0JBM0VUOztTQXVEYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuL21vZGVsL2FjdGlvbic7XG5pbXBvcnQge0FjdGlvblJlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2FjdGlvbnJlZ2lzdHJ5JztcbmltcG9ydCB7Rm9ybVByb3BlcnR5fSBmcm9tICcuL21vZGVsL2Zvcm1wcm9wZXJ0eSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eUZhY3Rvcnl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5ZmFjdG9yeSc7XG5pbXBvcnQge1NjaGVtYVByZXByb2Nlc3Nvcn0gZnJvbSAnLi9tb2RlbC9zY2hlbWFwcmVwcm9jZXNzb3InO1xuaW1wb3J0IHtWYWxpZGF0b3JSZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3JyZWdpc3RyeSc7XG5pbXBvcnQge1ZhbGlkYXRvcn0gZnJvbSAnLi9tb2RlbC92YWxpZGF0b3InO1xuaW1wb3J0IHtCaW5kaW5nfSBmcm9tICcuL21vZGVsL2JpbmRpbmcnO1xuaW1wb3J0IHtCaW5kaW5nUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYmluZGluZ3JlZ2lzdHJ5JztcblxuaW1wb3J0IHtTY2hlbWFWYWxpZGF0b3JGYWN0b3J5fSBmcm9tICcuL3NjaGVtYXZhbGlkYXRvcmZhY3RvcnknO1xuaW1wb3J0IHtXaWRnZXRGYWN0b3J5fSBmcm9tICcuL3dpZGdldGZhY3RvcnknO1xuaW1wb3J0IHtUZXJtaW5hdG9yU2VydmljZX0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFjdG9yeShzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCB2YWxpZGF0b3JSZWdpc3RyeSkge1xuICByZXR1cm4gbmV3IEZvcm1Qcm9wZXJ0eUZhY3Rvcnkoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgdmFsaWRhdG9yUmVnaXN0cnkpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybT5cbiAgICAgIDxzZi1mb3JtLWVsZW1lbnRcbiAgICAgICAgKm5nSWY9XCJyb290UHJvcGVydHlcIiBbZm9ybVByb3BlcnR5XT1cInJvb3RQcm9wZXJ0eVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuICAgIDwvZm9ybT5gLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY3Rpb25SZWdpc3RyeSxcbiAgICBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBCaW5kaW5nUmVnaXN0cnksXG4gICAgU2NoZW1hUHJlcHJvY2Vzc29yLFxuICAgIFdpZGdldEZhY3RvcnksXG4gICAge1xuICAgICAgcHJvdmlkZTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICAgIHVzZUZhY3Rvcnk6IHVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBbU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgVmFsaWRhdG9yUmVnaXN0cnldXG4gICAgfSxcbiAgICBUZXJtaW5hdG9yU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBGb3JtQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIGFjdGlvbnM6IHsgW2FjdGlvbklkOiBzdHJpbmddOiBBY3Rpb24gfSA9IHt9O1xuXG4gIEBJbnB1dCgpIHZhbGlkYXRvcnM6IHsgW3BhdGg6IHN0cmluZ106IFZhbGlkYXRvciB9ID0ge307XG5cbiAgQElucHV0KCkgYmluZGluZ3M6IHsgW3BhdGg6IHN0cmluZ106IEJpbmRpbmcgfSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTogYW55IH0+KCk7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IGFueVtdIH0+KCk7XG5cbiAgQE91dHB1dCgpIG9uRXJyb3JzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7dmFsdWU6IGFueX0+KCk7XG5cbiAgcm9vdFByb3BlcnR5OiBGb3JtUHJvcGVydHkgPSBudWxsO1xuXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBwcml2YXRlIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICBwcml2YXRlIHZhbGlkYXRvclJlZ2lzdHJ5OiBWYWxpZGF0b3JSZWdpc3RyeSxcbiAgICBwcml2YXRlIGJpbmRpbmdSZWdpc3RyeTogQmluZGluZ1JlZ2lzdHJ5LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlXG4gICkgeyB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIGlmICh0aGlzLnJvb3RQcm9wZXJ0eSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQob2JqLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgaWYgKHRoaXMucm9vdFByb3BlcnR5KSB7XG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICB9XG5cbiAgLy8gVE9ETyBpbXBsZW1lbnRcbiAgLy8gc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKT86IHZvaWRcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudmFsaWRhdG9ycykge1xuICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYWN0aW9ucykge1xuICAgICAgdGhpcy5zZXRBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYmluZGluZ3MpIHtcbiAgICAgIHRoaXMuc2V0QmluZGluZ3MoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgIXRoaXMuc2NoZW1hLnR5cGUpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgY2hhbmdlcy5zY2hlbWEpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zY2hlbWEuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy50ZXJtaW5hdG9yLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hUHJlcHJvY2Vzc29yLnByZXByb2Nlc3ModGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5yb290UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkodGhpcy5zY2hlbWEpO1xuICAgICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgICAgLy8gdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJvb3RQcm9wZXJ0eS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VzLmJpbmQodGhpcylcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucm9vdFByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdCghKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgKGNoYW5nZXMubW9kZWwgfHwgY2hhbmdlcy5zY2hlbWEgKSkge1xuICAgICAgdGhpcy5yb290UHJvcGVydHkucmVzZXQodGhpcy5tb2RlbCwgZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWxpZGF0b3JzKCkge1xuICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0b3JzKSB7XG4gICAgICBmb3IgKGNvbnN0IHZhbGlkYXRvcklkIGluIHRoaXMudmFsaWRhdG9ycykge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHZhbGlkYXRvcklkKSkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdG9yUmVnaXN0cnkucmVnaXN0ZXIodmFsaWRhdG9ySWQsIHRoaXMudmFsaWRhdG9yc1t2YWxpZGF0b3JJZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25zKCkge1xuICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5hY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGlvbklkIGluIHRoaXMuYWN0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb25zLmhhc093blByb3BlcnR5KGFjdGlvbklkKSkge1xuICAgICAgICAgIHRoaXMuYWN0aW9uUmVnaXN0cnkucmVnaXN0ZXIoYWN0aW9uSWQsIHRoaXMuYWN0aW9uc1thY3Rpb25JZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCaW5kaW5ncygpIHtcbiAgICB0aGlzLmJpbmRpbmdSZWdpc3RyeS5jbGVhcigpO1xuICAgIGlmICh0aGlzLmJpbmRpbmdzKSB7XG4gICAgICBmb3IgKGNvbnN0IGJpbmRpbmdQYXRoIGluIHRoaXMuYmluZGluZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuYmluZGluZ3MuaGFzT3duUHJvcGVydHkoYmluZGluZ1BhdGgpKSB7XG4gICAgICAgICAgdGhpcy5iaW5kaW5nUmVnaXN0cnkucmVnaXN0ZXIoYmluZGluZ1BhdGgsIHRoaXMuYmluZGluZ3NbYmluZGluZ1BhdGhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLnJvb3RQcm9wZXJ0eS5yZXNldChudWxsLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZWwodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMubW9kZWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZXModmFsdWUpIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnNldE1vZGVsKHZhbHVlKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gdHdvIHdheSBiaW5kaW5nIGlzIHVzZWRcbiAgICBpZiAodGhpcy5tb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCF0aGlzLm9uQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZXRNb2RlbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe3ZhbHVlOiB2YWx1ZX0pO1xuICB9XG59XG4iXX0=