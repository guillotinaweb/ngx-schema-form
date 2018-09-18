/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { TemplateSchemaElement } from '../../template-schema-element';
export class ItemComponent extends TemplateSchemaElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.description = this.getTextContent(this.elementRef);
    }
}
ItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                template: `<ng-content></ng-content>
`
            },] },
];
/** @nocollapse */
ItemComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ItemComponent.propDecorators = {
    "value": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtc2NoZW1hL2ZpZWxkL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVF0RSxNQUFNLG9CQUFxQixTQUFRLHFCQUFxQjs7OztJQU90RCxZQUFvQixVQUFzQjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7S0FFekM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6RDs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFO0NBQ1g7YUFDQTs7OztZQWJBLFVBQVU7OztzQkFnQlIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gQ29tcG9uZW50LFxuIEVsZW1lbnRSZWYsXG4gSW5wdXQsXG4gT25Jbml0LFxuIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlU2NoZW1hRWxlbWVudCB9IGZyb20gJy4uLy4uL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBUZW1wbGF0ZVNjaGVtYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG5cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZ2V0VGV4dENvbnRlbnQodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=