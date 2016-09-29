import {
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  ReflectiveInjector,
  Injectable
} from "@angular/core";

import { WidgetRegistry } from "./widgetregistry";

@Injectable()
export class WidgetFactory {

  private resolver: ComponentFactoryResolver;
  private registry: WidgetRegistry;

  constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver) {
    this.registry = registry;
    this.resolver = resolver;
  }

  createWidget(container: ViewContainerRef, type: string): ComponentRef<any> {
    let componentClass = this.registry.getWidgetType(type);

    let componentFactory = this.resolver.resolveComponentFactory(componentClass);
    return container.createComponent(componentFactory);
  }
}
