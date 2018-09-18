/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { TemplateSchemaElement } from '../template-schema-element';
export class ButtonComponent extends TemplateSchemaElement {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        this.label = '';
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    setLabelFromContent() {
        const /** @type {?} */ textContent = this.getTextContent(this.elementRef);
        // label as @Input takes priority over content text
        if (textContent && !this.label) {
            this.label = textContent;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setLabelFromContent();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-button',
                template: `<ng-content></ng-content>
`,
                providers: [
                    {
                        provide: TemplateSchemaElement,
                        useExisting: forwardRef(() => ButtonComponent),
                    }
                ]
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ButtonComponent.propDecorators = {
    "id": [{ type: Input },],
    "label": [{ type: Input },],
    "widget": [{ type: Input },],
    "click": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi90ZW1wbGF0ZS1zY2hlbWEvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWNuRSxNQUFNLHNCQUF1QixTQUFRLHFCQUFxQjs7OztJQWN4RCxZQUFvQixVQUFzQjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQVk7cUJBUmxDLEVBQUU7cUJBTUYsSUFBSSxZQUFZLEVBQU87S0FJOUI7Ozs7SUFFTyxtQkFBbUI7UUFDekIsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUd6RCxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztTQUMxQjs7Ozs7SUFJSCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTtDQUNYO2dCQUNDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDL0M7aUJBQ0Y7YUFDRjs7OztZQW5CQyxVQUFVOzs7bUJBc0JULEtBQUs7c0JBR0wsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGVtcGxhdGVTY2hlbWFFbGVtZW50IH0gZnJvbSAnLi4vdGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGVtcGxhdGVTY2hlbWFFbGVtZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ29tcG9uZW50KSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgVGVtcGxhdGVTY2hlbWFFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBsYWJlbCA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHdpZGdldDogc3RyaW5nIHwgb2JqZWN0O1xuXG4gIEBPdXRwdXQoKVxuICBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExhYmVsRnJvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0aGlzLmdldFRleHRDb250ZW50KHRoaXMuZWxlbWVudFJlZik7XG5cbiAgICAvLyBsYWJlbCBhcyBASW5wdXQgdGFrZXMgcHJpb3JpdHkgb3ZlciBjb250ZW50IHRleHRcbiAgICBpZiAodGV4dENvbnRlbnQgJiYgIXRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSB0ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNldExhYmVsRnJvbUNvbnRlbnQoKTtcbiAgfVxuXG59XG4iXX0=