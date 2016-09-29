import { AtomicProperty } from "./atomicproperty";

export class NumberProperty extends AtomicProperty {

  protected fallbackValue() {
    let value;
    if (this.schema.minimum !== undefined) {
      value = this.schema.minimum;
    } else {
      value = 0;
    }
    return value;
  }

}
