/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionRegistry } from './model/actionregistry';
import { FormProperty } from './model/formproperty';
import { BindingRegistry } from './model/bindingregistry';
var FormElementComponent = /** @class */ (function () {
    function FormElementComponent(actionRegistry, bindingRegistry, renderer, elementRef) {
        this.actionRegistry = actionRegistry;
        this.bindingRegistry = bindingRegistry;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.control = new FormControl('', function () { return null; });
        this.widget = null;
        this.buttons = [];
        this.unlisten = [];
    }
    /**
     * @return {?}
     */
    FormElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.parseButtons();
        this.setupBindings();
    };
    /**
     * @return {?}
     */
    FormElementComponent.prototype.setupBindings = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ bindings = this.bindingRegistry.get(this.formProperty.path);
        if ((bindings || []).length) {
            bindings.forEach(function (binding) {
                for (var /** @type {?} */ eventId in binding) {
                    _this.createBinding(eventId, binding[eventId]);
                }
            });
        }
    };
    /**
     * @param {?} eventId
     * @param {?} listener
     * @return {?}
     */
    FormElementComponent.prototype.createBinding = /**
     * @param {?} eventId
     * @param {?} listener
     * @return {?}
     */
    function (eventId, listener) {
        var _this = this;
        this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, function (event) {
            if (listener instanceof Function) {
                listener(event, _this.formProperty);
            }
            else {
                console.warn('Calling non function handler for eventId ' + eventId + ' for path ' + _this.formProperty.path);
            }
        }));
    };
    /**
     * @return {?}
     */
    FormElementComponent.prototype.parseButtons = /**
     * @return {?}
     */
    function () {
        if (this.formProperty.schema.buttons !== undefined) {
            this.buttons = this.formProperty.schema.buttons;
            try {
                for (var _a = tslib_1.__values(this.buttons), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var button = _b.value;
                    this.createButtonCallback(button);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    };
    /**
     * @param {?} button
     * @return {?}
     */
    FormElementComponent.prototype.createButtonCallback = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        var _this = this;
        button.action = function (e) {
            var /** @type {?} */ action;
            if (button.id && (action = _this.actionRegistry.get(button.id))) {
                if (action) {
                    action(_this.formProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
    };
    /**
     * @param {?} widget
     * @return {?}
     */
    FormElementComponent.prototype.onWidgetInstanciated = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        this.widget = widget;
        var /** @type {?} */ id = 'field' + (FormElementComponent.counter++);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    /**
     * @return {?}
     */
    FormElementComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.unlisten) {
            this.unlisten.forEach(function (item) {
                item();
            });
        }
    };
    FormElementComponent.counter = 0;
    FormElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form-element',
                    template: "\n    <div *ngIf=\"formProperty.visible\"\n         [class.has-error]=\"!control.valid\"\n         [class.has-success]=\"control.valid\">\n      <sf-widget-chooser\n        (widgetInstanciated)=\"onWidgetInstanciated($event)\"\n        [widgetInfo]=\"formProperty.schema.widget\">\n      </sf-widget-chooser>\n      <sf-form-element-action *ngFor=\"let button of buttons\" [button]=\"button\" [formProperty]=\"formProperty\"></sf-form-element-action>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    FormElementComponent.ctorParameters = function () { return [
        { type: ActionRegistry, },
        { type: BindingRegistry, },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    FormElementComponent.propDecorators = {
        "formProperty": [{ type: Input },],
    };
    return FormElementComponent;
}());
export { FormElementComponent };
function FormElementComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormElementComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormElementComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FormElementComponent.propDecorators;
    /** @type {?} */
    FormElementComponent.counter;
    /** @type {?} */
    FormElementComponent.prototype.formProperty;
    /** @type {?} */
    FormElementComponent.prototype.control;
    /** @type {?} */
    FormElementComponent.prototype.widget;
    /** @type {?} */
    FormElementComponent.prototype.buttons;
    /** @type {?} */
    FormElementComponent.prototype.unlisten;
    /** @type {?} */
    FormElementComponent.prototype.actionRegistry;
    /** @type {?} */
    FormElementComponent.prototype.bindingRegistry;
    /** @type {?} */
    FormElementComponent.prototype.renderer;
    /** @type {?} */
    FormElementComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2Zvcm1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBQ0csU0FBUyxFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7O0lBOEJ0RCw4QkFBb0IsY0FBOEIsRUFDOUIsaUJBQ0EsVUFDQTtRQUhBLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWU7UUFDZixhQUFRLEdBQVIsUUFBUTtRQUNSLGVBQVUsR0FBVixVQUFVO3VCQVhQLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztzQkFFaEMsSUFBSTt1QkFFaEIsRUFBRTt3QkFFRCxFQUFFO0tBTVo7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRU8sNENBQWE7Ozs7O1FBQ25CLHFCQUFNLFFBQVEsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsUUFB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QyxJQUFJO2dCQUN6QixJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQztTQUNKO0tBQ0Y7bUNBcEZ3QixDQUFDOztnQkFmM0IsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnZEFTRDtpQkFDVjs7OztnQkFsQk8sY0FBYztnQkFFZCxlQUFlO2dCQVhiLFNBQVM7Z0JBRk4sVUFBVTs7O2lDQWtDcEIsS0FBSzs7K0JBbkNSOztTQStCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIElucHV0LCBPbkRlc3Ryb3ksXG4gIE9uSW5pdCwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7V2lkZ2V0fSBmcm9tICcuL3dpZGdldCc7XG5cbmltcG9ydCB7QWN0aW9uUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYWN0aW9ucmVnaXN0cnknO1xuaW1wb3J0IHtGb3JtUHJvcGVydHl9IGZyb20gJy4vbW9kZWwvZm9ybXByb3BlcnR5JztcbmltcG9ydCB7QmluZGluZ1JlZ2lzdHJ5fSBmcm9tICcuL21vZGVsL2JpbmRpbmdyZWdpc3RyeSc7XG5pbXBvcnQge0JpbmRpbmd9IGZyb20gJy4vbW9kZWwvYmluZGluZyc7XG5pbXBvcnQge0Z1bmN0aW9ufSBmcm9tICdlc3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJmb3JtUHJvcGVydHkudmlzaWJsZVwiXG4gICAgICAgICBbY2xhc3MuaGFzLWVycm9yXT1cIiFjb250cm9sLnZhbGlkXCJcbiAgICAgICAgIFtjbGFzcy5oYXMtc3VjY2Vzc109XCJjb250cm9sLnZhbGlkXCI+XG4gICAgICA8c2Ytd2lkZ2V0LWNob29zZXJcbiAgICAgICAgKHdpZGdldEluc3RhbmNpYXRlZCk9XCJvbldpZGdldEluc3RhbmNpYXRlZCgkZXZlbnQpXCJcbiAgICAgICAgW3dpZGdldEluZm9dPVwiZm9ybVByb3BlcnR5LnNjaGVtYS53aWRnZXRcIj5cbiAgICAgIDwvc2Ytd2lkZ2V0LWNob29zZXI+XG4gICAgICA8c2YtZm9ybS1lbGVtZW50LWFjdGlvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIiBbYnV0dG9uXT1cImJ1dHRvblwiIFtmb3JtUHJvcGVydHldPVwiZm9ybVByb3BlcnR5XCI+PC9zZi1mb3JtLWVsZW1lbnQtYWN0aW9uPlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY291bnRlciA9IDA7XG5cbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XG4gIGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCAoKSA9PiBudWxsKTtcblxuICB3aWRnZXQ6IFdpZGdldDxhbnk+ID0gbnVsbDtcblxuICBidXR0b25zID0gW107XG5cbiAgdW5saXN0ZW4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvblJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBiaW5kaW5nUmVnaXN0cnk6IEJpbmRpbmdSZWdpc3RyeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFyc2VCdXR0b25zKCk7XG4gICAgdGhpcy5zZXR1cEJpbmRpbmdzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwQmluZGluZ3MoKSB7XG4gICAgY29uc3QgYmluZGluZ3M6IEJpbmRpbmdbXSA9IHRoaXMuYmluZGluZ1JlZ2lzdHJ5LmdldCh0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoKTtcbiAgICBpZiAoKGJpbmRpbmdzIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgIGJpbmRpbmdzLmZvckVhY2goKGJpbmRpbmcpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudElkIGluIGJpbmRpbmcpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUJpbmRpbmcoZXZlbnRJZCwgYmluZGluZ1tldmVudElkXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQmluZGluZyhldmVudElkLCBsaXN0ZW5lcikge1xuICAgIHRoaXMudW5saXN0ZW4ucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGV2ZW50SWQsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBsaXN0ZW5lcihldmVudCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignQ2FsbGluZyBub24gZnVuY3Rpb24gaGFuZGxlciBmb3IgZXZlbnRJZCAnICsgZXZlbnRJZCArICcgZm9yIHBhdGggJyArIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQnV0dG9ucygpIHtcbiAgICBpZiAodGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5idXR0b25zID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLmJ1dHRvbnM7XG5cbiAgICAgIGZvciAobGV0IGJ1dHRvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25DYWxsYmFjayhidXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQnV0dG9uQ2FsbGJhY2soYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFjdGlvbiA9IChlKSA9PiB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKGJ1dHRvbi5pZCAmJiAoYWN0aW9uID0gdGhpcy5hY3Rpb25SZWdpc3RyeS5nZXQoYnV0dG9uLmlkKSkpIHtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgIGFjdGlvbih0aGlzLmZvcm1Qcm9wZXJ0eSwgYnV0dG9uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgfVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBsZXQgaWQgPSAnZmllbGQnICsgKEZvcm1FbGVtZW50Q29tcG9uZW50LmNvdW50ZXIrKyk7XG5cbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQubmFtZSA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmlkID0gaWQ7XG4gICAgdGhpcy53aWRnZXQuY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVubGlzdGVuKSB7XG4gICAgICB0aGlzLnVubGlzdGVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==