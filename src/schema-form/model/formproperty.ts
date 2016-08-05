import { SchemaValidatorFactory } from "../schemavalidatorfactory";

export abstract class FormProperty {

	public schemaValidator: Function;
	public schema: any;
	public required: boolean;
	private _type: string;
	private _value: any;

	constructor(
		type,
		schemaValidatorFactory: SchemaValidatorFactory,
		schema: any,
		private parent: FormPropertyGroup = null
	) {
		this._type = type;
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

	get type(): string {
		return this._type;
	}

	validate() : any {
		return this.schemaValidator(this.value);
	}

	reset(value: any = null): void {
		if (value === null) {
			if (this.schema.default !== undefined) {
				value = this.schema.default;
			} else {
			value = this.fallbackValue();
			}
		}
		this.updateValue(value);
	}

	protected abstract fallbackValue() : any;
}

export abstract class FormPropertyGroup extends FormProperty {
	abstract onChildValueChanged(formProperty: FormProperty);
}
