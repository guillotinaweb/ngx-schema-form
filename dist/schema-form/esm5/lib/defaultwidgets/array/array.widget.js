/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
var ArrayWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayWidget, _super);
    function ArrayWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ArrayWidget.prototype.addItem = /**
     * @return {?}
     */
    function () {
        this.formProperty.addItem();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ArrayWidget.prototype.removeItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.formProperty.removeItem(index);
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    ArrayWidget.prototype.trackByIndex = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return index;
    };
    ArrayWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-array-widget',
                    template: "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex\">\n\t\t<sf-form-element [formProperty]=\"itemProperty\"></sf-form-element>\n\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t</button>\n\t</div>\n\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t</button>\n</div>"
                },] },
    ];
    return ArrayWidget;
}(ArrayLayoutWidget));
export { ArrayWidget };
function ArrayWidget_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ArrayWidget.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ArrayWidget.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHR3aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDOztJQW9CaEIsdUNBQWlCOzs7Ozs7O0lBRWhELDZCQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDN0I7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7Ozs7OztJQUVELGtDQUFZOzs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLElBQVM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwrdkJBY0w7aUJBQ047O3NCQXJCRDtFQXNCaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheS13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQgZm9ybS1ncm91cFwiPlxuXHQ8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJob3Jpem9udGFsIGNvbnRyb2wtbGFiZWxcIj5cblx0XHR7eyBzY2hlbWEudGl0bGUgfX1cblx0PC9sYWJlbD5cblx0PHNwYW4gKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm1IZWxwXCI+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvc3Bhbj5cblx0PGRpdiAqbmdGb3I9XCJsZXQgaXRlbVByb3BlcnR5IG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzOyBsZXQgaT1pbmRleDsgdHJhY2tCeTp0cmFja0J5SW5kZXhcIj5cblx0XHQ8c2YtZm9ybS1lbGVtZW50IFtmb3JtUHJvcGVydHldPVwiaXRlbVByb3BlcnR5XCI+PC9zZi1mb3JtLWVsZW1lbnQ+XG5cdFx0PGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGFycmF5LXJlbW92ZS1idXR0b25cIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4gUmVtb3ZlXG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuXHQ8YnV0dG9uIChjbGljayk9XCJhZGRJdGVtKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBhcnJheS1hZGQtYnV0dG9uXCI+XG5cdFx0PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IEFkZFxuXHQ8L2J1dHRvbj5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCB7XG5cbiAgYWRkSXRlbSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGRJdGVtKCk7XG4gIH1cblxuICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yZW1vdmVJdGVtKGluZGV4KTtcbiAgfVxuXG4gIHRyYWNrQnlJbmRleChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cbiJdfQ==