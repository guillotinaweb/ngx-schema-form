/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
export class WidgetFactory {
    /**
     * @param {?} registry
     * @param {?} resolver
     */
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    createWidget(container, type) {
        let /** @type {?} */ componentClass = this.registry.getWidgetType(type);
        let /** @type {?} */ componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    }
}
WidgetFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WidgetFactory.ctorParameters = () => [
    { type: WidgetRegistry, },
    { type: ComponentFactoryResolver, },
];
function WidgetFactory_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WidgetFactory.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WidgetFactory.ctorParameters;
    /** @type {?} */
    WidgetFactory.prototype.resolver;
    /** @type {?} */
    WidgetFactory.prototype.registry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi93aWRnZXRmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbEQsTUFBTTs7Ozs7SUFLSixZQUFZLFFBQXdCLEVBQUUsUUFBa0M7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7OztJQUVELFlBQVksQ0FBQyxTQUEyQixFQUFFLElBQVk7UUFDcEQscUJBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELHFCQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNwRDs7O1lBaEJGLFVBQVU7Ozs7WUFGRixjQUFjO1lBSnJCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cmVnaXN0cnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG5cbiAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICBwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeTtcblxuICBjb25zdHJ1Y3RvcihyZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgdGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuICB9XG5cbiAgY3JlYXRlV2lkZ2V0KGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdHlwZTogc3RyaW5nKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0V2lkZ2V0VHlwZSh0eXBlKTtcblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRDbGFzcyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cbn1cbiJdfQ==