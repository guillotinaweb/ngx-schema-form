import {Binding} from './binding';
import { Injectable } from "@angular/core";

@Injectable()
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
