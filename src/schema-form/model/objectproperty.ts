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
		this.resetProperties();
	}

	createProperties() {
		for (let propertyId in this.schema.properties) {
			let propertySchema = this.schema.properties[propertyId];
			let property = this.formPropertyFactory.createProperty(propertySchema, this);
			this.properties[propertyId] = property;
			this.propertiesId.push(propertyId);
		}

	}

	getProperty(key: string) {
		return this.properties[key];
	}

	reset(value: any = null) {
		this.resetProperties(value);
	}

	resetProperties(value: any = null) {
		this.properties = {};
		this.propertiesId = [];
		this.createProperties();
	}

	onChildValueChanged(formproperty: FormProperty) {
	}
}
