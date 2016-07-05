import { FormControl } from "@angular/forms";

export class BaseField {

	value: any = "";
	id: string = "";
	name: string = "";
	settings: any = {};
	control: FormControl = new FormControl("", () => { return null; });
	constructor() { }
}
