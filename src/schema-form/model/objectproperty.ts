import { FormProperty, FormPropertyGroup } from "./formproperty";
import { FormPropertyFactory } from "./formpropertyfactory"
import { SchemaValidatorFactory } from "../schemavalidatorfactory"

export class ObjectProperty extends FormPropertyGroup {

	private properties: {[key:string]: FormProperty} = {}; 
	private propertiesId: string[]= [];

	constructor(
		private formPropertyFactory: FormPropertyFactory,
		schemaValidatorFactory: SchemaValidatorFactory,
		schema: any,
		parent : ObjectProperty) {
		super(schemaValidatorFactory, schema, parent);
	}

	
	getProperty(key: string) {
		return this.properties[key];
	}

	resetValue(value: any) {
		value = value || {};
		this.properties = {};
		this.propertiesId = [];
		this.createProperties();
		for (let propertyId of this.propertiesId) {
			let property = this.properties[propertyId];
			property.reset(value && value[propertyId]);
			value[propertyId] = property.valueChanges.getValue();
		}
		return value;
	}

	createProperties() {
		for (let propertyId in this.schema.properties) {
			let propertySchema = this.schema.properties[propertyId];
			let property = this.formPropertyFactory.createProperty(propertySchema, this);
			this.properties[propertyId] = property;
			this.propertiesId.push(propertyId);
		}

	}

	onChildValueChanged(formproperty: FormProperty) {
	}
}
