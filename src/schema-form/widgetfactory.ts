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
				let componentClass = this.registry.getWidgetType(type);
				this.resolver.resolveComponent(componentClass).then(
					componentFactory => {
						let component = container.createComponent(componentFactory);
						resolve(component);
					}
				);
			}
		);
	}
}
