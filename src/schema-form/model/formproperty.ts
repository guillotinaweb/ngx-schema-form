import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
export abstract class FormProperty {
	
	public schemaValidator: Function;
	public required: boolean;
	
	private _value: any;
	private _errors: any;
	private _valueChanges: BehaviorSubject<any>;
	private _errorsChanges: BehaviorSubject<any>;

	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		public schema: any,
		private parent: FormPropertyGroup = null
	) {
		this.schema = schema;
		this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
		this._value = null;
		this._valueChanges = new BehaviorSubject<any>(null);
		this._errors = null;
		this._errorsChanges = new BehaviorSubject<any>(null);
	}

	public setValue(value: any, emit: boolean = false) {
		this._value = value;
		this.validate();
		if (emit) {
			this._valueChanges.next(value);
		}
	}

	public get valueChanges() {
		return this._valueChanges;
	}

	public get errorsChanges() {
		return this._errorsChanges;
	}

	public get type(): string {
		return this.schema.type;
	}


	reset(value: any = null) {
		value = this.resetValue(value);
		this.setValue(value, true);
	}
	
	abstract resetValue(value: any): any;

	private validate() : any {
		let errors = this.schemaValidator(this._value);
		this.setErrors(errors);
	}

	private setErrors(errors) {
		this._errors = errors;
		this._errorsChanges.next(errors);
	}
}

export abstract class FormPropertyGroup extends FormProperty {
	abstract onChildValueChanged(formProperty: FormProperty);
}
