import { AtomicProperty } from "./atomicproperty";

export class IntegerProperty extends AtomicProperty{

	protected fallbackValue() {
		if (this.schema.minimum) {
			return this.schema.minimum;
		} else {
			return 0;
		}
	}

}
