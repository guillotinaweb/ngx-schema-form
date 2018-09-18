/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { WidgetFactory } from "./widgetfactory";
import { TerminatorService } from "./terminator.service";
export class FormElementComponentAction {
    /**
     * @param {?=} widgetFactory
     * @param {?=} terminator
     */
    constructor(widgetFactory = null, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subs = this.terminator.onDestroy.subscribe(destroy => {
            if (destroy) {
                this.ref.destroy();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
        this.ref.instance.button = this.button;
        this.ref.instance.formProperty = this.formProperty;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
FormElementComponentAction.decorators = [
    { type: Component, args: [{
                selector: 'sf-form-element-action',
                template: '<ng-template #target></ng-template>'
            },] },
];
/** @nocollapse */
FormElementComponentAction.ctorParameters = () => [
    { type: WidgetFactory, },
    { type: TerminatorService, },
];
FormElementComponentAction.propDecorators = {
    "button": [{ type: Input },],
    "formProperty": [{ type: Input },],
    "container": [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
};
function FormElementComponentAction_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormElementComponentAction.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormElementComponentAction.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FormElementComponentAction.propDecorators;
    /** @type {?} */
    FormElementComponentAction.prototype.button;
    /** @type {?} */
    FormElementComponentAction.prototype.formProperty;
    /** @type {?} */
    FormElementComponentAction.prototype.container;
    /** @type {?} */
    FormElementComponentAction.prototype.ref;
    /** @type {?} */
    FormElementComponentAction.prototype.subs;
    /** @type {?} */
    FormElementComponentAction.prototype.widgetFactory;
    /** @type {?} */
    FormElementComponentAction.prototype.terminator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWVsZW1lbnQuYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtZWxlbWVudC5hY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBR2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQU12RCxNQUFNOzs7OztJQWFKLFlBQW9CLGdCQUErQixJQUFJLEVBQ25DO1FBREEsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVUsR0FBVixVQUFVO0tBQzdCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNwQjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNwRDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3pCOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxxQ0FBcUM7YUFDaEQ7Ozs7WUFOTyxhQUFhO1lBQ2IsaUJBQWlCOzs7dUJBUXRCLEtBQUs7NkJBR0wsS0FBSzswQkFHTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7V2lkZ2V0RmFjdG9yeX0gZnJvbSBcIi4vd2lkZ2V0ZmFjdG9yeVwiO1xuaW1wb3J0IHtUZXJtaW5hdG9yU2VydmljZX0gZnJvbSBcIi4vdGVybWluYXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWZvcm0tZWxlbWVudC1hY3Rpb24nLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtRWxlbWVudENvbXBvbmVudEFjdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1Qcm9wZXJ0eTogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5ID0gbnVsbCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzID0gdGhpcy50ZXJtaW5hdG9yLm9uRGVzdHJveS5zdWJzY3JpYmUoZGVzdHJveSA9PiB7XG4gICAgICBpZiAoZGVzdHJveSkge1xuICAgICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnJlZiA9IHRoaXMud2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGhpcy5jb250YWluZXIsIHRoaXMuYnV0dG9uLndpZGdldCB8fCAnYnV0dG9uJyk7XG4gICAgdGhpcy5yZWYuaW5zdGFuY2UuYnV0dG9uID0gdGhpcy5idXR0b247XG4gICAgdGhpcy5yZWYuaW5zdGFuY2UuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19