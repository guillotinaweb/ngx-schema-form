import {ViewContainerRef, ComponentRef, ComponentMetadata, ComponentResolver, ReflectiveInjector} from "@angular/core" ;

export class FieldFactory {
	private resolver: ComponentResolver;
	private fields: {[type:string] : any} = {};

	constructor(resolver: ComponentResolver){
		this.resolver = resolver;
	}

	registerFieldType(type: string, field: any){
		this.fields[type]=field;
	}

	getFieldType(type: string): any{
		return this.fields[type];
	}

	createField(container : ViewContainerRef, type: string): Promise<ComponentRef<any>>{
		return new Promise(
			(resolve,reject) => {
				let ComponentClass = this.getFieldType(type);
				let decoratedComponent = ComponentClass;
				this.resolver.resolveComponent(decoratedComponent).then(
					componentFactory => {
						let injector = ReflectiveInjector.fromResolvedProviders([], container.injector);
						let component = container.createComponent(componentFactory,0,injector);
						resolve(component);
					}
				);
			}
		);
	}
}
