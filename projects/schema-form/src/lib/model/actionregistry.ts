import { Action } from './action';
import { Injectable } from "@angular/core";

@Injectable()
export class ActionRegistry {
  actions: {[key: string]: Action} = {};

  clear() {
    this.actions = {};
  }

  register(actionId: string, action: Action) {
    this.actions[actionId] = action;
  }

  get(actionId: string) {
    return this.actions[actionId];
  }
}
