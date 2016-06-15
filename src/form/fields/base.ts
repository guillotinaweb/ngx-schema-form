import {AbstractControl} from "@angular/common";
export class BaseField {

	value: any="";
	id: string="";
	name: string="";
	settings: any={};
	control: AbstractControl;

	constructor() {}
}
