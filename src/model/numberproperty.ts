import { AtomicProperty } from './atomicproperty';

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

  setValue(value, onlySelf = false) {
    if (typeof value === 'string') {
       value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
    }
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }
}
