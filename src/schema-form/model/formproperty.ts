import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
import { ObjectProperty } from "./objectproperty"
export abstract class FormProperty {
	public schemaValidator: Function;
	public required: boolean;
	
protected value: any = null;
	private errors: any = null ;
	private _valueChanges = new BehaviorSubject<any>(null);
	private _errorsChanges = new BehaviorSubject<any>(null);

	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		public schema: any,
		private parent: ObjectProperty
	) {
		this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
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

	public abstract setValue(value: any, onlySelf: boolean);

	protected updateValueAndValidity(onlySelf = false, emitEvent = true){
		this.updateValue();
		if (emitEvent) {
			this.valueChanges.next(this.value);
		}
		this.validate();
		if (this.parent && !onlySelf) {
			this.parent.updateValueAndValidity(onlySelf, emitEvent);
		}
	}

	protected abstract updateValue();

	abstract reset(value: any, onlySelf : boolean)
	
	private validate() : any {
		this.errors = this.schemaValidator(this.value);
		this.setErrors(this.errors);
	}

	private setErrors(errors) {
		this.errors = errors;
		this._errorsChanges.next(errors);
	}

}
