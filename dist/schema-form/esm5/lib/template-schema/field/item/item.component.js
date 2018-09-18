/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
import { TemplateSchemaElement } from '../../template-schema-element';
var ItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ItemComponent, _super);
    function ItemComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.description = this.getTextContent(this.elementRef);
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sf-item',
                    template: "<ng-content></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    ItemComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ItemComponent.propDecorators = {
        "value": [{ type: Input },],
    };
    return ItemComponent;
}(TemplateSchemaElement));
export { ItemComponent };
function ItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ItemComponent.propDecorators;
    /** @type {?} */
    ItemComponent.prototype.value;
    /** @type {?} */
    ItemComponent.prototype.description;
    /** @type {?} */
    ItemComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtc2NoZW1hL2ZpZWxkL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBUW5DLHlDQUFxQjtJQU90RCx1QkFBb0IsVUFBc0I7UUFBMUMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztLQUV6Qzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekQ7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSw2QkFDWDtpQkFDQTs7OztnQkFiQSxVQUFVOzs7MEJBZ0JSLEtBQUs7O3dCQWxCUjtFQWdCbUMscUJBQXFCO1NBQTNDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuIENvbXBvbmVudCxcbiBFbGVtZW50UmVmLFxuIElucHV0LFxuIE9uSW5pdCxcbiBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZS1zY2hlbWEtZWxlbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmdldFRleHRDb250ZW50KHRoaXMuZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19