import { FormProperty, PropertyGroup } from './formproperty';

export interface Validator {
  (value: any, formProperty: FormProperty, form: PropertyGroup): [{[key: string]: any}];
}
