import {
	ViewContainerRef,
	ComponentRef,
	ComponentResolver,
	ReflectiveInjector
} from "@angular/core" ;
import {StringField} from "./fields/string"
import {IntegerField} from "./fields/integer"
import {TextLineField} from "./fields/textline"

export class FieldFactory {

	private resolver: ComponentResolver;
	private fieldTypes: {[type:string] : any} = {};

	constructor(resolver: ComponentResolver){
		this.resolver = resolver;
		this.registerFieldType("string", StringField)
		this.registerFieldType("integer", IntegerField)
		this.registerFieldType("textline", TextLineField)
	}

	registerFieldType(type: string, field: any){
		this.fieldTypes[type]=field;
	}

	getFieldType(type: string): any{
		return this.fieldTypes[type];
	}

	getFieldTypes(): any{
		return this.fieldTypes;
	}

	createField(container : ViewContainerRef, type: string): Promise<ComponentRef<any>>{
		return new Promise(
			(resolve,reject) => {
				let ComponentClass = this.getFieldType(type);
				this.resolver.resolveComponent(ComponentClass).then(
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
