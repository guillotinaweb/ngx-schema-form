import { AtomicProperty } from './atomicproperty';

export class BooleanProperty extends AtomicProperty {

  fallbackValue() {
    return null;
  }
}
