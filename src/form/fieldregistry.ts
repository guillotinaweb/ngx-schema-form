import {StringField} from "./fields/string"
import {IntegerField} from "./fields/integer"
import {TextLineField} from "./fields/textline"

export class FieldRegistry {
	private fieldTypes: {[type:string] : any} = {};

	constructor(){
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

}
