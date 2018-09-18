/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var SelectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SelectWidget, _super);
    function SelectWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-select-widget',
                    template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">\n\t\t{{schema.description}}\n\t</span>\n\n\t<select *ngIf=\"schema.type!='array'\" [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<select *ngIf=\"schema.type==='array'\" multiple [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t\t<option *ngFor=\"let option of schema.items.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>"
                },] },
    ];
    return SelectWidget;
}(ControlWidget));
export { SelectWidget };
function SelectWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9kZWZhdWx0d2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUF3Qlgsd0NBQWE7Ozs7O2dCQXRCOUMsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxrNUJBa0JKO2lCQUNOOzt1QkF6QkQ7RUEwQmtDLGFBQWE7U0FBbEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc2Ytc2VsZWN0LXdpZGdldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuXG5cdDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPlxuXHRcdHt7c2NoZW1hLmRlc2NyaXB0aW9ufX1cblx0PC9zcGFuPlxuXG5cdDxzZWxlY3QgKm5nSWY9XCJzY2hlbWEudHlwZSE9J2FycmF5J1wiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIuZGlzYWJsZWRdPVwic2NoZW1hLnJlYWRPbmx5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2NoZW1hLm9uZU9mXCIgW25nVmFsdWVdPVwib3B0aW9uLmVudW1bMF1cIiA+e3tvcHRpb24uZGVzY3JpcHRpb259fTwvb3B0aW9uPlxuXHQ8L3NlbGVjdD5cblxuXHQ8c2VsZWN0ICpuZ0lmPVwic2NoZW1hLnR5cGU9PT0nYXJyYXknXCIgbXVsdGlwbGUgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiBbYXR0ci5kaXNhYmxlZF09XCJzY2hlbWEucmVhZE9ubHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXHRcdDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzY2hlbWEuaXRlbXMub25lT2ZcIiBbbmdWYWx1ZV09XCJvcHRpb24uZW51bVswXVwiID57e29wdGlvbi5kZXNjcmlwdGlvbn19PC9vcHRpb24+XG5cdDwvc2VsZWN0PlxuXG5cdDxpbnB1dCAqbmdJZj1cInNjaGVtYS5yZWFkT25seVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIHR5cGU9XCJoaWRkZW5cIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IHt9XG4iXX0=