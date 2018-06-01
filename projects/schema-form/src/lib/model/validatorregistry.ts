import { Validator } from './validator';

export class ValidatorRegistry {
  private validators: Validator[] = [];

  register(path: string, validator: Validator) {
    this.validators[path] = validator;
  }

  get(path: string): Validator {
    return this.validators[path];
  }

  clear() {
    this.validators = [];
  }
}
