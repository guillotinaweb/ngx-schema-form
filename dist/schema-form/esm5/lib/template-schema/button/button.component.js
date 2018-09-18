/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { TemplateSchemaElement } from '../template-schema-element';
var ButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonComponent, _super);
    function ButtonComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.label = '';
        _this.click = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.setLabelFromContent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ textContent = this.getTextContent(this.elementRef);
        // label as @Input takes priority over content text
        if (textContent && !this.label) {
            this.label = textContent;
        }
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setLabelFromContent();
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-button',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        {
                            provide: TemplateSchemaElement,
                            useExisting: forwardRef(function () { return ButtonComponent; }),
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ButtonComponent.propDecorators = {
        "id": [{ type: Input },],
        "label": [{ type: Input },],
        "widget": [{ type: Input },],
        "click": [{ type: Output },],
    };
    return ButtonComponent;
}(TemplateSchemaElement));
export { ButtonComponent };
function ButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ButtonComponent.propDecorators;
    /** @type {?} */
    ButtonComponent.prototype.id;
    /** @type {?} */
    ButtonComponent.prototype.label;
    /** @type {?} */
    ButtonComponent.prototype.widget;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1zY2hlbWEvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBYzlCLDJDQUFxQjtJQWN4RCx5QkFBb0IsVUFBc0I7UUFBMUMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO3NCQVJsQyxFQUFFO3NCQU1GLElBQUksWUFBWSxFQUFPOztLQUk5Qjs7OztJQUVPLDZDQUFtQjs7OztRQUN6QixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBR3pELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQzFCOzs7OztJQUlILDRDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw2QkFDWDtvQkFDQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQzt5QkFDL0M7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBbkJDLFVBQVU7Ozt1QkFzQlQsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7MEJBR0wsTUFBTTs7MEJBcENUO0VBeUJxQyxxQkFBcUI7U0FBN0MsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25Db21wb25lbnQpLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGxhYmVsID0gJyc7XG5cbiAgQElucHV0KClcbiAgd2lkZ2V0OiBzdHJpbmcgfCBvYmplY3Q7XG5cbiAgQE91dHB1dCgpXG4gIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGFiZWxGcm9tQ29udGVudCgpIHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcblxuICAgIC8vIGxhYmVsIGFzIEBJbnB1dCB0YWtlcyBwcmlvcml0eSBvdmVyIGNvbnRlbnQgdGV4dFxuICAgIGlmICh0ZXh0Q29udGVudCAmJiAhdGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IHRleHRDb250ZW50O1xuICAgIH1cblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2V0TGFiZWxGcm9tQ29udGVudCgpO1xuICB9XG5cbn1cbiJdfQ==