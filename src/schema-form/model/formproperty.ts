import { SchemaValidatorFactory } from "../schemavalidatorfactory";
export abstract class FormProperty {

	public schemaValidator: Function;
	public required: boolean;
	private _type: string;
	private _value: any;

	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		public schema: any,
		private parent: FormPropertyGroup = null
	) {
		this.schema = schema;
		this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
	}

	public updateValue(value: any): void {
		this._value = value;
		if (this.parent !== null) {
			this.parent.onChildValueChanged(this);
		}
		
	}
	
	public get value() {
		return this._value;
	}

	public get type(): string {
		return this.schema.type;
	}

	validate() : any {
		return this.schemaValidator(this.value);
	}

	abstract reset(value: any): void;
}

export abstract class FormPropertyGroup extends FormProperty {
	abstract onChildValueChanged(formProperty: FormProperty);
}
