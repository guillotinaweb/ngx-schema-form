/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var RadioWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RadioWidget, _super);
    function RadioWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-radio-widget',
                    template: "<div class=\"widget form-group\">\n\t<label>{{schema.title}}</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let option of schema.oneOf\" class=\"radio\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" value=\"{{option.enum[0]}}\" type=\"radio\"  [attr.disabled]=\"schema.readOnly\">\n\t\t\t{{option.description}}\n\t\t</label>\n\t</div>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                },] },
    ];
    return RadioWidget;
}(ControlWidget));
export { RadioWidget };
function RadioWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RadioWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RadioWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFnQlosdUNBQWE7Ozs7O2dCQWQ3QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLCtqQkFVTDtpQkFDTjs7c0JBakJEO0VBa0JpQyxhQUFhO1NBQWpDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXJhZGlvLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbD57e3NjaGVtYS50aXRsZX19PC9sYWJlbD5cbiAgICA8c3BhbiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybUhlbHBcIj57e3NjaGVtYS5kZXNjcmlwdGlvbn19PC9zcGFuPlxuXHQ8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLm9uZU9mXCIgY2xhc3M9XCJyYWRpb1wiPlxuXHRcdDxsYWJlbCBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdFx0PGlucHV0IFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgdmFsdWU9XCJ7e29wdGlvbi5lbnVtWzBdfX1cIiB0eXBlPVwicmFkaW9cIiAgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCI+XG5cdFx0XHR7e29wdGlvbi5kZXNjcmlwdGlvbn19XG5cdFx0PC9sYWJlbD5cblx0PC9kaXY+XG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb1dpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiJdfQ==