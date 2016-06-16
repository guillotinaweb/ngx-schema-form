import {AbstractControl, Control} from "@angular/common";
export class BaseField {

	value: any="";
	id: string="";
	name: string="";
	settings: any={};
	control: AbstractControl=new Control('',()=>{return null;});
	visible: boolean=true;
	constructor() {}
}
