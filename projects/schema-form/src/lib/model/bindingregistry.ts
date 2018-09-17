import {Binding} from './binding';

export class BindingRegistry {
  bindings: Binding[] = [];

  clear() {
    this.bindings = [];
  }

  register(path: string, binding: Binding | Binding[]) {
    this.bindings[path] = [].concat(binding);
  }

  get(path: string): Binding[] {
    return this.bindings[path];
  }
}
