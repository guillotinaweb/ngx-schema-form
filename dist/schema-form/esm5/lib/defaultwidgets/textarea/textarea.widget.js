/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var TextAreaWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-textarea-widget',
                    template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\"\n\t\tclass=\"text-widget textarea-widget form-control\"\n\t\t[attr.placeholder]=\"schema.placeholder\"\n\t\t[attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n\t\t[formControl]=\"control\"></textarea>\n</div>"
                },] },
    ];
    return TextAreaWidget;
}(ControlWidget));
export { TextAreaWidget };
function TextAreaWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextAreaWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextAreaWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFpQlQsMENBQWE7Ozs7O2dCQWZoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGlpQkFXTDtpQkFDTjs7eUJBbEJEO0VBbUJvQyxhQUFhO1NBQXBDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhLXdpZGdldCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldCBmb3JtLWdyb3VwXCI+XG5cdDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBjbGFzcz1cImhvcml6b250YWwgY29udHJvbC1sYWJlbFwiPlxuXHRcdHt7IHNjaGVtYS50aXRsZSB9fVxuXHQ8L2xhYmVsPlxuICAgIDxzcGFuICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJmb3JtSGVscFwiPnt7c2NoZW1hLmRlc2NyaXB0aW9ufX08L3NwYW4+XG5cdDx0ZXh0YXJlYSBbYXR0ci5yZWFkb25seV09XCJzY2hlbWEucmVhZE9ubHlcIiBbbmFtZV09XCJuYW1lXCJcblx0XHRjbGFzcz1cInRleHQtd2lkZ2V0IHRleHRhcmVhLXdpZGdldCBmb3JtLWNvbnRyb2xcIlxuXHRcdFthdHRyLnBsYWNlaG9sZGVyXT1cInNjaGVtYS5wbGFjZWhvbGRlclwiXG5cdFx0W2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG5cdFx0W2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj48L3RleHRhcmVhPlxuPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge31cbiJdfQ==