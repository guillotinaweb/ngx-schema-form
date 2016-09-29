import { AtomicProperty } from "./atomicproperty";

export class StringProperty extends AtomicProperty {

  protected fallbackValue() {
    return "";
  }

}
