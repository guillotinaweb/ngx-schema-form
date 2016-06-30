import {StringField} from "./fields/string";
import {IntegerField} from "./fields/integer";
import {TextLineField} from "./fields/textline";
import {SelectField} from "./fields/select";
import {RadioField} from "./fields/radio";
import {CheckboxField} from "./fields/checkbox";
import {RichTextField} from "./fields/richtext";
import {BaseField} from "./fields/base";

export class FieldRegistry {
	private fieldTypes: { [type: string]: any } = {};
	private defaultFieldType = StringField;

	constructor() {
		this.registerFieldType("string", StringField);
		this.registerFieldType("search", StringField);
		this.registerFieldType("tel", StringField);
		this.registerFieldType("url", StringField);
		this.registerFieldType("email", StringField);
		this.registerFieldType("password", StringField);
		this.registerFieldType("color", StringField);
		this.registerFieldType("date", StringField);
		this.registerFieldType("date-time", StringField);
		this.registerFieldType("time", StringField);

		this.registerFieldType("select", SelectField);
		this.registerFieldType("radio", RadioField);
		this.registerFieldType("boolean", CheckboxField);
		this.registerFieldType("checkbox", CheckboxField);

		this.registerFieldType("integer", IntegerField);
		this.registerFieldType("number", IntegerField);
		this.registerFieldType("range", IntegerField);
		this.registerFieldType("textline", TextLineField);
		this.registerFieldType("richtext", RichTextField);
	}

	setDefaultFieldType(fieldType: any) {
		this.defaultFieldType = fieldType;
	}

	getDefaultFieldType() {
		return this.defaultFieldType;
	}

	hasFieldType(type: string) {
		return this.fieldTypes.hasOwnProperty(type);
	}

	registerFieldType(type: string, field: any) {
		this.fieldTypes[type] = field;
	}

	getFieldType(type: string): any {
		if (this.hasFieldType(type)) {
			return this.fieldTypes[type];
		}
		return this.defaultFieldType;
	}

	getFieldTypes(): any {
		return this.fieldTypes;
	}

}
