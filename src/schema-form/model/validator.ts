import { FormProperty } from "./formproperty";
import { PropertyGroup } from "./propertygroup"

export interface Validator {
	(value: any, formProperty: FormProperty, form: PropertyGroup): [{[key: string]: any}];
}
