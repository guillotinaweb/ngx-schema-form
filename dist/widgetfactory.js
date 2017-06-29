import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
var WidgetFactory = (function () {
    function WidgetFactory(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    WidgetFactory.prototype.createWidget = function (container, type) {
        var componentClass = this.registry.getWidgetType(type);
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
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
