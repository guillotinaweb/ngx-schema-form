/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ObjectLayoutWidget } from '../../widget';
var ObjectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectWidget, _super);
    function ObjectWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-form-object',
                    template: "<fieldset *ngFor=\"let fieldset of formProperty.schema.fieldsets\">\n\t<legend *ngIf=\"fieldset.title\">{{fieldset.title}}</legend>\n\t<div *ngIf=\"fieldset.description\">{{fieldset.description}}</div>\n\t<div *ngFor=\"let fieldId of fieldset.fields\">\n\t\t<sf-form-element [formProperty]=\"formProperty.getProperty(fieldId)\"></sf-form-element>\n\t</div>\n</fieldset>"
                },] },
    ];
    return ObjectWidget;
}(ObjectLayoutWidget));
export { ObjectWidget };
function ObjectWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ObjectWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ObjectWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9kZWZhdWx0d2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDOztJQVloQix3Q0FBa0I7Ozs7O2dCQVZuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1YQU1BO2lCQUNYOzt1QkFiRDtFQWNrQyxrQkFBa0I7U0FBdkMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1mb3JtLW9iamVjdCcsXG4gIHRlbXBsYXRlOiBgPGZpZWxkc2V0ICpuZ0Zvcj1cImxldCBmaWVsZHNldCBvZiBmb3JtUHJvcGVydHkuc2NoZW1hLmZpZWxkc2V0c1wiPlxuXHQ8bGVnZW5kICpuZ0lmPVwiZmllbGRzZXQudGl0bGVcIj57e2ZpZWxkc2V0LnRpdGxlfX08L2xlZ2VuZD5cblx0PGRpdiAqbmdJZj1cImZpZWxkc2V0LmRlc2NyaXB0aW9uXCI+e3tmaWVsZHNldC5kZXNjcmlwdGlvbn19PC9kaXY+XG5cdDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkSWQgb2YgZmllbGRzZXQuZmllbGRzXCI+XG5cdFx0PHNmLWZvcm0tZWxlbWVudCBbZm9ybVByb3BlcnR5XT1cImZvcm1Qcm9wZXJ0eS5nZXRQcm9wZXJ0eShmaWVsZElkKVwiPjwvc2YtZm9ybS1lbGVtZW50PlxuXHQ8L2Rpdj5cbjwvZmllbGRzZXQ+YFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgeyB9XG4iXX0=