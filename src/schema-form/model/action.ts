import { FormProperty } from './formproperty';
export interface Action {
  (formProperty: FormProperty, parameters: any): void;
}
