import {ViewContainerRef, ComponentMetadata} from "@angular/core" ;

export class FieldFactory {
	private resolver: ComponentResolver;
	private fields: {[type:string] : any}={};

	constructor(resolver: ComponentResolver){
		this.resolver = resolver;
	}

	registerFieldType(type: string, field: any){
		this.fields[type]=field;
	}

	getFieldType(type: string): any{
		return this.fields[type];
	}

	createField(container : ViewContainerRef, type: string, metadata: ComponentMetadata): Promise<Component>{
		let ComponentClass = getField(type);
		let decoratedComponent = Component(metadata)(ComponentClass);
		this.resolver.resolveComponent(decoratedComponent).then(
			componentFactory => {
				let injector = ReflectiveInjector.fromResolvedProviders([], container.injector);
				this.container.createComponent(factory,0,injector);
			}
		);
	}
}
