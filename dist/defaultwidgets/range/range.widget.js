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
var RangeWidget = (function (_super) {
    __extends(RangeWidget, _super);
    function RangeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-range-widget',
                    template: "<div>\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\t\n\t<input [name]=\"name\" class=\"text-widget range-widget\" [attr.id]=\"id\"\n\t[formControl]=\"control\" [attr.type]=\"'range'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\">\n</div>"
                },] },
    ];
    /** @nocollapse */
    RangeWidget.ctorParameters = function () { return []; };
    return RangeWidget;
}(ControlWidget));
export { RangeWidget };
