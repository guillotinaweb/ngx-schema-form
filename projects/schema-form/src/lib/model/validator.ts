import { FormProperty, PropertyGroup } from './formproperty';

export type Validator = (value: any, formProperty: FormProperty, form: PropertyGroup) => [{[key: string]: any}] | null;
