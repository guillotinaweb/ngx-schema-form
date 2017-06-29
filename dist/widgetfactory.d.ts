import { ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { WidgetRegistry } from './widgetregistry';
export declare class WidgetFactory {
    private resolver;
    private registry;
    constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver);
    createWidget(container: ViewContainerRef, type: string): ComponentRef<any>;
}
