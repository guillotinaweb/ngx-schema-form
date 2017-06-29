import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionRegistry } from './model';
var FormElementComponent = (function () {
    function FormElementComponent(actionRegistry) {
        this.actionRegistry = actionRegistry;
        this.control = new FormControl('', function () { return null; });
        this.widget = null;
        this.buttons = [];
    }
    FormElementComponent.prototype.ngOnInit = function () {
        this.parseButtons();
    };
    FormElementComponent.prototype.parseButtons = function () {
        if (this.formProperty.schema.buttons !== undefined) {
            this.buttons = this.formProperty.schema.buttons;
            for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                var button = _a[_i];
                this.createButtonCallback(button);
            }
        }
    };
    FormElementComponent.prototype.createButtonCallback = function (button) {
        var _this = this;
        button.action = function (e) {
            var action;
            if (button.id && (action = _this.actionRegistry.get(button.id))) {
                if (action) {
                    action(_this.formProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
    };
    FormElementComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (FormElementComponent.counter++);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    FormElementComponent.counter = 0;
    FormElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form-element',
                    template: "\n    <div *ngIf=\"formProperty.visible\"\n         class=\"widget form-group\"\n         [class.has-error]=\"!control.valid\"\n         [class.has-success]=\"control.valid\">\n      <sf-widget-chooser\n        (widgetInstanciated)=\"onWidgetInstanciated($event)\"\n        [widgetInfo]=\"formProperty.schema.widget\">\n      </sf-widget-chooser>\n      <p *ngIf=\"control.errors\" class=\"help-block\">{{control.errors[0].message}}</p>\n      <button *ngFor=\"let button of buttons\" (click)=\"button.action($event)\">{{button.label}}</button>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    FormElementComponent.ctorParameters = function () { return [
        { type: ActionRegistry, },
    ]; };
    FormElementComponent.propDecorators = {
        'formProperty': [{ type: Input },],
    };
    return FormElementComponent;
}());
export { FormElementComponent };
