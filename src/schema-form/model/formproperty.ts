import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SchemaValidatorFactory } from "../schemavalidatorfactory";
export abstract class FormProperty {
	
	
	public schemaValidator: Function;
	public required: boolean;
	private _valueChanges: BehaviorSubject<any>;

	constructor(
		schemaValidatorFactory: SchemaValidatorFactory,
		public schema: any,
		private parent: FormPropertyGroup = null
	) {
		this.schema = schema;
		this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
		this._valueChanges = new BehaviorSubject<any>(null);
	}

	private emitValueChanged(value: any): void {
		/*if (this.parent !== null) {
			this.parent.onChildValueChanged(this);
		}*/
		this._valueChanges.next(value);
	}

	public get valueChanges() {
		return this._valueChanges;
	}

	public get type(): string {
		return this.schema.type;
	}

	validate() : any {
		return this.schemaValidator(this._valueChanges.getValue());
	}

	reset(value: any = null) {
		value = this.resetValue(value);
		this.emitValueChanged(value);
	}
	
	abstract resetValue(value: any): any;
}

export abstract class FormPropertyGroup extends FormProperty {
	abstract onChildValueChanged(formProperty: FormProperty);
}
