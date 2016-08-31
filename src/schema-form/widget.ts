import { FormControl } from "@angular/forms";
import { ArrayProperty } from "./model";

export class BaseWidget {

	id: string = "";
	name: string = "";
	settings: any = {};
	control: FormControl = new FormControl("", () => null);
	constructor() {}
}

export class ArrayLayoutWidget {
	formProperty: ArrayProperty = null;
	constructor () {}
}
