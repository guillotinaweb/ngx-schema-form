import { FormProperty } from './formproperty';

export abstract class AtomicProperty extends FormProperty {

  setValue(value, onlySelf = false) {
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }

  reset(value: any = null, onlySelf = true) {
    this.resetValue(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  protected resetValue(value: any): any {
    if (value === null) {
      if (this.schema.default !== undefined) {
        value = this.schema.default;
      } else {
      value = this.fallbackValue();
      }
    }
    this._value = value;
  }

  protected abstract fallbackValue(): any;

  public _updateValue() {};

}
