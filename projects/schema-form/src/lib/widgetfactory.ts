import {
  ViewContainerRef,
  ComponentRef,
  Injectable
} from '@angular/core';

import { WidgetRegistry } from './widgetregistry';

@Injectable()
export class WidgetFactory {

  constructor(private registry: WidgetRegistry) {}

  createWidget(container: ViewContainerRef, type: string): ComponentRef<any> {
    const componentClass = this.registry.getWidgetType(type);
    return container.createComponent(componentClass);
  }
}
