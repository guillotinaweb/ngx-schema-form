import { FormProperty } from "./formproperty";
import { FormPropertyFactory } from "./formpropertyfactory"
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class ObjectProperty extends FormProperty {

	private properties: {[key:string]: FormProperty} = {}; 
	private propertiesId: string[]= [];

	constructor(
		private formPropertyFactory: FormPropertyFactory,
		schemaValidatorFactory: SchemaValidatorFactory,
		schema: any,
		parent : ObjectProperty) {
		super(schemaValidatorFactory, schema, parent);
	}

	setValue(value: any, emitEvent: boolean) {
		for (let propertyId in value) {
			this.properties[propertyId].setValue(value[propertyId], true);
		}
		this.updateValueAndValidity(true, false);
	}

	reset(value: any, onlySelf) {
		value = value || {};
		this.initializeProperties(value);
		this.updateValueAndValidity(true, true);
	}

	initializeProperties(value: any) {
		this.properties = {};
		this.propertiesId = [];

		value = value || {};
		for (let propertyId in this.schema.properties) {
			let propertySchema = this.schema.properties[propertyId];
			let property = this.formPropertyFactory.createProperty(propertySchema, this);
			property.reset(value[propertyId], true);
			this.properties[propertyId] = property;
			this.propertiesId.push(propertyId);
		}
	}

	protected updateValue() {
		this.reduceValue();
	}

	reduceValue(): any {
		let value = {};
		for (let propertyId of this.propertiesId) {
			let property = this.properties[propertyId];
			value[propertyId] = property.valueChanges.getValue();
		}
		this.value = value;
	}

	getProperty(key: string) {
		return this.properties[key];
	}

}
