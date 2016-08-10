import { FormProperty } from "./formproperty";

export abstract class AtomicProperty extends FormProperty {

	resetValue(value: any = null): void {
		if (value === null) {
			if (this.schema.default !== undefined) {
				value = this.schema.default;
			} else {
			value = this.fallbackValue();
			}
		}
		return value;
	}

	protected abstract fallbackValue(): any;
}
