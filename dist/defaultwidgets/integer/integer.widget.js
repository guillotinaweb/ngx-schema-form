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
import { Component, } from '@angular/core';
import { ControlWidget } from '../../widget';
var IntegerWidget = (function (_super) {
    __extends(IntegerWidget, _super);
    function IntegerWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntegerWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-integer-widget',
                    template: "<div>\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<div>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [attr.readonly]=\"schema.readOnly?true:null\" [name]=\"name\" class=\"text-widget integer-widget form-control\" [formControl]=\"control\" [attr.type]=\"'number'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.placeholder]=\"schema.placeholder\" >\n</div>"
                },] },
    ];
    /** @nocollapse */
    IntegerWidget.ctorParameters = function () { return []; };
    return IntegerWidget;
}(ControlWidget));
export { IntegerWidget };
