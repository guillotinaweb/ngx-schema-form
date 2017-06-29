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
var TextAreaWidget = (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-textarea-widget',
                    template: "<div>\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\" class=\"text-widget textarea-widget form-control\" [formControl]=\"control\"></textarea>\n</div>"
                },] },
    ];
    /** @nocollapse */
    TextAreaWidget.ctorParameters = function () { return []; };
    return TextAreaWidget;
}(ControlWidget));
export { TextAreaWidget };
