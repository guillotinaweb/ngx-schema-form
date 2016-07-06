import {
	ViewContainerRef,
	ComponentRef,
	ComponentResolver,
	ReflectiveInjector,
	Injectable
} from "@angular/core";

import { FieldRegistryService } from "./fieldregistry.service";

@Injectable()
export class FieldFactory {

	private resolver: ComponentResolver;
	private registry: FieldRegistryService;

	constructor(registry: FieldRegistryService, resolver: ComponentResolver) {
		this.registry = registry;
		this.resolver = resolver;
	}

	createField(container: ViewContainerRef, type: string): Promise<ComponentRef<any>> {
		return new Promise(
			(resolve, reject) => {
				let ComponentClass = this.registry.getFieldType(type);
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
