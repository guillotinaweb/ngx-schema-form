import { FormProperty } from "./formproperty";
import { FormPropertyFactory } from "./formpropertyfactory"
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class ObjectProperty extends FormProperty {

	private built = false;
	private properties: {[key:string]: FormProperty} = {}; 
	private propertiesId: string[]= [];

	constructor(
		private formPropertyFactory: FormPropertyFactory,
		schemaValidatorFactory: SchemaValidatorFactory,
		schema: any,
		parent : ObjectProperty
	) {
		super(schemaValidatorFactory, schema, parent);
		this.createProperties();
		this.reset(null);
	}

	setValue(value: any, onlySelf: boolean) {
		for (let propertyId in value) {
			this.properties[propertyId].setValue(value[propertyId], true);
		}
		this.updateValueAndValidity(onlySelf, true);
	}

	reset(value: any, onlySelf: boolean = true) {
		this.resetProperties(value);
		this.updateValueAndValidity(onlySelf, true);
	}

	resetProperties(value: any) {
		value = value || {};
		for (let propertyId in this.schema.properties) {
			this.properties[propertyId].reset(value[propertyId], true);
		}
	}

	createProperties() {
		this.properties = {};
		this.propertiesId = [];
		for (let propertyId in this.schema.properties) {
			let propertySchema = this.schema.properties[propertyId];
			let property = this.formPropertyFactory.createProperty(propertySchema, this);
			this.properties[propertyId] = property;
			this.propertiesId.push(propertyId);
		}
	}

	protected updateValue() {
		this.reduceValue();
	}

	reduceValue(): any {
		let value = {};
		this.forEachChild((property, propertyId) => {
			if (property.visible) {
				value[propertyId] = property.value;
			}
		});
		this._value = value;
	}

	getProperty(path: string) {
		let subPathIdx = path.indexOf("/");
		let propertyId = subPathIdx !== -1 ? path.substr(subPathIdx+1) : path ;
		let property = this.properties[propertyId];

		if (property !== null && subPathIdx !== -1 && property instanceof ObjectProperty) {
			let subPath = path.substr(0, subPathIdx);
			property = (<ObjectProperty>property).getProperty(subPath);
		}
		return property;
	}

	public forEachChild(fn: (FormProperty, string) => void) {
		for (let propertyId in this.properties) {
			let property = this.properties[propertyId]; 
			fn(property, propertyId);
		}
	}

	public forEachChildRecursive(fn: (FormProperty) => void) {
		this.forEachChild((child) => {
			fn(child);
			if (child instanceof ObjectProperty) {
				(<ObjectProperty>child).forEachChildRecursive(fn);
			}
		});
	}

	public _bindVisibility() {
		super._bindVisibility();
		if (this instanceof ObjectProperty) {
			this._bindVisibilityRecursive();
		}
	}

	private _bindVisibilityRecursive () {
		this.forEachChildRecursive((property) => {
			property._bindVisibility();
		});
	}

}
