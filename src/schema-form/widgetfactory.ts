import {
	ViewContainerRef,
	ComponentRef,
	ComponentResolver,
	ReflectiveInjector,
	Injectable
} from "@angular/core";

import { WidgetRegistry } from "./widgetregistry";

@Injectable()
export class WidgetFactory {

	private resolver: ComponentResolver;
	private registry: WidgetRegistry;

	constructor(registry: WidgetRegistry, resolver: ComponentResolver) {
		this.registry = registry;
		this.resolver = resolver;
	}

	createWidget(container: ViewContainerRef, type: string): Promise<ComponentRef<any>> {

		return new Promise(
			(resolve, reject) => {
				let ComponentClass = this.registry.getWidgetType(type);
				this.resolver.resolveComponent(ComponentClass).then(
					componentFactory => {
						let injector = ReflectiveInjector.fromResolvedProviders([], container.injector);
						let component = container.createComponent(componentFactory, 0, injector);
						resolve(component);
					}
				);
			}
		);
	}
}
