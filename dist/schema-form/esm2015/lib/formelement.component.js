/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionRegistry } from './model/actionregistry';
import { FormProperty } from './model/formproperty';
import { BindingRegistry } from './model/bindingregistry';
export class FormElementComponent {
    /**
     * @param {?} actionRegistry
     * @param {?} bindingRegistry
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(actionRegistry, bindingRegistry, renderer, elementRef) {
        this.actionRegistry = actionRegistry;
        this.bindingRegistry = bindingRegistry;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.control = new FormControl('', () => null);
        this.widget = null;
        this.buttons = [];
        this.unlisten = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parseButtons();
        this.setupBindings();
    }
    /**
     * @return {?}
     */
    setupBindings() {
        const /** @type {?} */ bindings = this.bindingRegistry.get(this.formProperty.path);
        if ((bindings || []).length) {
            bindings.forEach((binding) => {
                for (const /** @type {?} */ eventId in binding) {
                    this.createBinding(eventId, binding[eventId]);
                }
            });
        }
    }
    /**
     * @param {?} eventId
     * @param {?} listener
     * @return {?}
     */
    createBinding(eventId, listener) {
        this.unlisten.push(this.renderer.listen(this.elementRef.nativeElement, eventId, (event) => {
            if (listener instanceof Function) {
                listener(event, this.formProperty);
            }
            else {
                console.warn('Calling non function handler for eventId ' + eventId + ' for path ' + this.formProperty.path);
            }
        }));
    }
    /**
     * @return {?}
     */
    parseButtons() {
        if (this.formProperty.schema.buttons !== undefined) {
            this.buttons = this.formProperty.schema.buttons;
            for (let /** @type {?} */ button of this.buttons) {
                this.createButtonCallback(button);
            }
        }
    }
    /**
     * @param {?} button
     * @return {?}
     */
    createButtonCallback(button) {
        button.action = (e) => {
            let /** @type {?} */ action;
            if (button.id && (action = this.actionRegistry.get(button.id))) {
                if (action) {
                    action(this.formProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    onWidgetInstanciated(widget) {
        this.widget = widget;
        let /** @type {?} */ id = 'field' + (FormElementComponent.counter++);
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.unlisten) {
            this.unlisten.forEach((item) => {
                item();
            });
        }
    }
}
FormElementComponent.counter = 0;
FormElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-form-element',
                template: `
    <div *ngIf="formProperty.visible"
         [class.has-error]="!control.valid"
         [class.has-success]="control.valid">
      <sf-widget-chooser
        (widgetInstanciated)="onWidgetInstanciated($event)"
        [widgetInfo]="formProperty.schema.widget">
      </sf-widget-chooser>
      <sf-form-element-action *ngFor="let button of buttons" [button]="button" [formProperty]="formProperty"></sf-form-element-action>
    </div>`
            },] },
];
/** @nocollapse */
FormElementComponent.ctorParameters = () => [
    { type: ActionRegistry, },
    { type: BindingRegistry, },
    { type: Renderer2, },
    { type: ElementRef, },
];
FormElementComponent.propDecorators = {
    "formProperty": [{ type: Input },],
};
function FormElementComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormElementComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormElementComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FormElementComponent.propDecorators;
    /** @type {?} */
    FormElementComponent.counter;
    /** @type {?} */
    FormElementComponent.prototype.formProperty;
    /** @type {?} */
    FormElementComponent.prototype.control;
    /** @type {?} */
    FormElementComponent.prototype.widget;
    /** @type {?} */
    FormElementComponent.prototype.buttons;
    /** @type {?} */
    FormElementComponent.prototype.unlisten;
    /** @type {?} */
    FormElementComponent.prototype.actionRegistry;
    /** @type {?} */
    FormElementComponent.prototype.bindingRegistry;
    /** @type {?} */
    FormElementComponent.prototype.renderer;
    /** @type {?} */
    FormElementComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL2Zvcm1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLEtBQUssRUFDRyxTQUFTLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxXQUFXLEVBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUl4QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQWlCeEQsTUFBTTs7Ozs7OztJQWFKLFlBQW9CLGNBQThCLEVBQzlCLGlCQUNBLFVBQ0E7UUFIQSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlO1FBQ2YsYUFBUSxHQUFSLFFBQVE7UUFDUixlQUFVLEdBQVYsVUFBVTt1QkFYUCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO3NCQUVoQyxJQUFJO3VCQUVoQixFQUFFO3dCQUVELEVBQUU7S0FNWjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRU8sYUFBYTtRQUNuQix1QkFBTSxRQUFRLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVCLFFBQVEsQ0FB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QUM7YUFDUixDQUFDLENBQUM7U0FDSjtLQUNGOzsrQkFwRndCLENBQUM7O1lBZjNCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7OztXQVNEO2FBQ1Y7Ozs7WUFsQk8sY0FBYztZQUVkLGVBQWU7WUFYYixTQUFTO1lBRk4sVUFBVTs7OzZCQWtDcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgSW5wdXQsIE9uRGVzdHJveSxcbiAgT25Jbml0LCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEZvcm1Db250cm9sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtXaWRnZXR9IGZyb20gJy4vd2lkZ2V0JztcblxuaW1wb3J0IHtBY3Rpb25SZWdpc3RyeX0gZnJvbSAnLi9tb2RlbC9hY3Rpb25yZWdpc3RyeSc7XG5pbXBvcnQge0Zvcm1Qcm9wZXJ0eX0gZnJvbSAnLi9tb2RlbC9mb3JtcHJvcGVydHknO1xuaW1wb3J0IHtCaW5kaW5nUmVnaXN0cnl9IGZyb20gJy4vbW9kZWwvYmluZGluZ3JlZ2lzdHJ5JztcbmltcG9ydCB7QmluZGluZ30gZnJvbSAnLi9tb2RlbC9iaW5kaW5nJztcbmltcG9ydCB7RnVuY3Rpb259IGZyb20gJ2VzdHJlZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWZvcm0tZWxlbWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImZvcm1Qcm9wZXJ0eS52aXNpYmxlXCJcbiAgICAgICAgIFtjbGFzcy5oYXMtZXJyb3JdPVwiIWNvbnRyb2wudmFsaWRcIlxuICAgICAgICAgW2NsYXNzLmhhcy1zdWNjZXNzXT1cImNvbnRyb2wudmFsaWRcIj5cbiAgICAgIDxzZi13aWRnZXQtY2hvb3NlclxuICAgICAgICAod2lkZ2V0SW5zdGFuY2lhdGVkKT1cIm9uV2lkZ2V0SW5zdGFuY2lhdGVkKCRldmVudClcIlxuICAgICAgICBbd2lkZ2V0SW5mb109XCJmb3JtUHJvcGVydHkuc2NoZW1hLndpZGdldFwiPlxuICAgICAgPC9zZi13aWRnZXQtY2hvb3Nlcj5cbiAgICAgIDxzZi1mb3JtLWVsZW1lbnQtYWN0aW9uICpuZ0Zvcj1cImxldCBidXR0b24gb2YgYnV0dG9uc1wiIFtidXR0b25dPVwiYnV0dG9uXCIgW2Zvcm1Qcm9wZXJ0eV09XCJmb3JtUHJvcGVydHlcIj48L3NmLWZvcm0tZWxlbWVudC1hY3Rpb24+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHN0YXRpYyBjb3VudGVyID0gMDtcblxuICBASW5wdXQoKSBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eTtcbiAgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsICgpID0+IG51bGwpO1xuXG4gIHdpZGdldDogV2lkZ2V0PGFueT4gPSBudWxsO1xuXG4gIGJ1dHRvbnMgPSBbXTtcblxuICB1bmxpc3RlbiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uUmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5LFxuICAgICAgICAgICAgICBwcml2YXRlIGJpbmRpbmdSZWdpc3RyeTogQmluZGluZ1JlZ2lzdHJ5LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYXJzZUJ1dHRvbnMoKTtcbiAgICB0aGlzLnNldHVwQmluZGluZ3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBCaW5kaW5ncygpIHtcbiAgICBjb25zdCBiaW5kaW5nczogQmluZGluZ1tdID0gdGhpcy5iaW5kaW5nUmVnaXN0cnkuZ2V0KHRoaXMuZm9ybVByb3BlcnR5LnBhdGgpO1xuICAgIGlmICgoYmluZGluZ3MgfHwgW10pLmxlbmd0aCkge1xuICAgICAgYmluZGluZ3MuZm9yRWFjaCgoYmluZGluZykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50SWQgaW4gYmluZGluZykge1xuICAgICAgICAgIHRoaXMuY3JlYXRlQmluZGluZyhldmVudElkLCBiaW5kaW5nW2V2ZW50SWRdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCaW5kaW5nKGV2ZW50SWQsIGxpc3RlbmVyKSB7XG4gICAgdGhpcy51bmxpc3Rlbi5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgZXZlbnRJZCxcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBpZiAobGlzdGVuZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdDYWxsaW5nIG5vbiBmdW5jdGlvbiBoYW5kbGVyIGZvciBldmVudElkICcgKyBldmVudElkICsgJyBmb3IgcGF0aCAnICsgdGhpcy5mb3JtUHJvcGVydHkucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VCdXR0b25zKCkge1xuICAgIGlmICh0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWEuYnV0dG9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWEuYnV0dG9ucztcblxuICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIHRoaXMuYnV0dG9ucykge1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNhbGxiYWNrKGJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCdXR0b25DYWxsYmFjayhidXR0b24pIHtcbiAgICBidXR0b24uYWN0aW9uID0gKGUpID0+IHtcbiAgICAgIGxldCBhY3Rpb247XG4gICAgICBpZiAoYnV0dG9uLmlkICYmIChhY3Rpb24gPSB0aGlzLmFjdGlvblJlZ2lzdHJ5LmdldChidXR0b24uaWQpKSkge1xuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgYWN0aW9uKHRoaXMuZm9ybVByb3BlcnR5LCBidXR0b24ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICB9XG5cbiAgb25XaWRnZXRJbnN0YW5jaWF0ZWQod2lkZ2V0OiBXaWRnZXQ8YW55Pikge1xuICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuICAgIGxldCBpZCA9ICdmaWVsZCcgKyAoRm9ybUVsZW1lbnRDb21wb25lbnQuY291bnRlcisrKTtcblxuICAgIHRoaXMud2lkZ2V0LmZvcm1Qcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5O1xuICAgIHRoaXMud2lkZ2V0LnNjaGVtYSA9IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYTtcbiAgICB0aGlzLndpZGdldC5uYW1lID0gaWQ7XG4gICAgdGhpcy53aWRnZXQuaWQgPSBpZDtcbiAgICB0aGlzLndpZGdldC5jb250cm9sID0gdGhpcy5jb250cm9sO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudW5saXN0ZW4pIHtcbiAgICAgIHRoaXMudW5saXN0ZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19