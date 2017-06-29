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
var FileWidget = (function (_super) {
    __extends(FileWidget, _super);
    function FileWidget() {
        return _super.call(this) || this;
    }
    FileWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-file-widget',
                    template: "<div>\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [name]=\"name\" class=\"text-widget file-widget\" [attr.id]=\"id\" [formControl]=\"control\" type=\"file\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                },] },
    ];
    /** @nocollapse */
    FileWidget.ctorParameters = function () { return []; };
    return FileWidget;
}(ControlWidget));
export { FileWidget };
