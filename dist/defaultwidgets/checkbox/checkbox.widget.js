var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var CheckboxWidget = (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-checkbox-widget',
                    template: "<div>\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n        {{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div class=\"checkbox\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" [attr.disabled]=\"schema.readOnly\">\n\t\t\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n\t\t\t{{schema.description}}\n\t\t</label>\n\t</div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    CheckboxWidget.ctorParameters = function () { return []; };
    return CheckboxWidget;
}(ControlWidget));
export { CheckboxWidget };
