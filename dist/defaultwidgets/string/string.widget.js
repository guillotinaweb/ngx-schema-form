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
var StringWidget = (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringWidget.prototype.getInputType = function () {
        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
            return 'text';
        }
        else {
            return this.schema.widget.id;
        }
    };
    StringWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-string-widget',
                    template: "<div>\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n    \t{{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n    <input [name]=\"name\" [attr.readonly]=\"(schema.widget.id!=='color') && schema.readOnly?true:null\"  class=\"text-widget.id textline-widget form-control\" [attr.type]=\"this.getInputType()\" [attr.id]=\"id\"  [formControl]=\"control\" [attr.placeholder]=\"schema.placeholder\" [attr.disabled]=\"(schema.widget.id=='color' && schema.readOnly)?true:null\">\n    <input *ngIf=\"(schema.widget.id==='color' && schema.readOnly)\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n  </div>"
                },] },
    ];
    /** @nocollapse */
    StringWidget.ctorParameters = function () { return []; };
    return StringWidget;
}(ControlWidget));
export { StringWidget };
