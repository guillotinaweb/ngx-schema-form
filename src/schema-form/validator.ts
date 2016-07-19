import { FormControl } from "@angular/forms"

/**
 * A field validator function that can be added to a SchemaForm through the fieldValidators input.
 *
 * @param value The new value of the field
 * @param formValue the new value of the form
 * @param controls the controls of each field of the form
 *
 * @return null if the field is valid () or a json object describing the error otherwise
 */
export interface Validator {
	(value: any, formValue?: {[fieldId: string]: any}, controls?: {[fieldId:string]: FormControl}): {[key:string]: any};
};
