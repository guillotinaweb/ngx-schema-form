import { FormProperty, PropertyGroup } from './formproperty';
import { Error } from './error';

export type Validator = (value: any, formProperty: FormProperty, form: PropertyGroup) => Error[] | null;
