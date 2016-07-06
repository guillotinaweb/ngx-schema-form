import { FormControl } from "@angular/forms";
import { OpaqueToken } from "@angular/core";
import ZSchema = require("z-schema");

export abstract class SchemaValidatorFactory {
	abstract createValidatorFn(schema) : (control: FormControl) => any;
}

export class ZSchemaValidatorFactory extends SchemaValidatorFactory {
	private zschema;

	constructor() {
		super();
		this.zschema = new ZSchema({});
	}

	createValidatorFn(schema : any) {
		return (control): { [key: string]: boolean } => {
			let value = control.value;

			if (schema.type === "number" || schema.type === "integer") {
				value = +value;
			}

			let result = this.zschema.validate(value, schema);
			let err = this.zschema.getLastErrors();
			return err || null;
		};
	}
}
