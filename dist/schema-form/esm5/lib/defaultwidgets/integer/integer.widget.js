/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, } from '@angular/core';
import { ControlWidget } from '../../widget';
var IntegerWidget = /** @class */ (function (_super) {
    tslib_1.__extends(IntegerWidget, _super);
    function IntegerWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntegerWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-integer-widget',
                    template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n  <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [attr.readonly]=\"schema.readOnly?true:null\" [name]=\"name\"\n\tclass=\"text-widget integer-widget form-control\" [formControl]=\"control\"\n\t[attr.type]=\"'number'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\"\n\t[attr.placeholder]=\"schema.placeholder\"\n\t[attr.maxLength]=\"schema.maxLength || null\"\n  [attr.minLength]=\"schema.minLength || null\">\n</div>"
                },] },
    ];
    return IntegerWidget;
}(ControlWidget));
export { IntegerWidget };
function IntegerWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    IntegerWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    IntegerWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdlci53aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvZGVmYXVsdHdpZGdldHMvaW50ZWdlci9pbnRlZ2VyLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFpQlYseUNBQWE7Ozs7O2dCQWYvQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHFtQkFXTDtpQkFDTjs7d0JBcEJEO0VBcUJtQyxhQUFhO1NBQW5DLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaW50ZWdlci13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cbiAgPHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cblx0PGlucHV0IFthdHRyLnJlYWRvbmx5XT1cInNjaGVtYS5yZWFkT25seT90cnVlOm51bGxcIiBbbmFtZV09XCJuYW1lXCJcblx0Y2xhc3M9XCJ0ZXh0LXdpZGdldCBpbnRlZ2VyLXdpZGdldCBmb3JtLWNvbnRyb2xcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG5cdFthdHRyLnR5cGVdPVwiJ251bWJlcidcIiBbYXR0ci5taW5dPVwic2NoZW1hLm1pbmltdW1cIiBbYXR0ci5tYXhdPVwic2NoZW1hLm1heGltdW1cIlxuXHRbYXR0ci5wbGFjZWhvbGRlcl09XCJzY2hlbWEucGxhY2Vob2xkZXJcIlxuXHRbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlZ2VyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCB7fVxuIl19