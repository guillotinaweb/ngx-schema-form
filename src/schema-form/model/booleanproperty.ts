import { AtomicProperty } from "./atomicproperty";

export class BooleanProperty extends AtomicProperty {

  protected fallbackValue() {
    return false;
  }

}
