/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    WidgetFactory.prototype.createWidget = /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    function (container, type) {
        var /** @type {?} */ componentClass = this.registry.getWidgetType(type);
        var /** @type {?} */ componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    };
    WidgetFactory.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WidgetFactory.ctorParameters = function () { return [
        { type: WidgetRegistry, },
        { type: ComponentFactoryResolver, },
    ]; };
    return WidgetFactory;
}());
export { WidgetFactory };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0ZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zY2hlbWEtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi93aWRnZXRmYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBUWhELHVCQUFZLFFBQXdCLEVBQUUsUUFBa0M7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7OztJQUVELG9DQUFZOzs7OztJQUFaLFVBQWEsU0FBMkIsRUFBRSxJQUFZO1FBQ3BELHFCQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxxQkFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDcEQ7O2dCQWhCRixVQUFVOzs7O2dCQUZGLGNBQWM7Z0JBSnJCLHdCQUF3Qjs7d0JBSDFCOztTQVVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0YWJsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHJlZ2lzdHJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xuXG4gIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnk7XG5cbiAgY29uc3RydWN0b3IocmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5LCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcbiAgfVxuXG4gIGNyZWF0ZVdpZGdldChjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHR5cGU6IHN0cmluZyk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFdpZGdldFR5cGUodHlwZSk7XG5cbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50Q2xhc3MpO1xuICAgIHJldHVybiBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG59XG4iXX0=