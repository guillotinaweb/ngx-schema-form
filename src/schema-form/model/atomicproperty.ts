import { FormProperty } from "./formproperty";

export abstract class AtomicProperty extends FormProperty {
	reset(value: any = null) {
		this.resetValue(value)
	}

	resetValue(value: any = null): void {
		if (value === null) {
			if (this.schema.default !== undefined) {
				value = this.schema.default;
			} else {
			value = this.fallbackValue();
			}
		}
		this.updateValue(value);
	}

	protected abstract fallbackValue(): any;
}
