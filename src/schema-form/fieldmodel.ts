import { EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

export class FieldModel {

	valueChanges = new EventEmitter();

	constructor(
		public id: string,
		public settings: any,
		public widgetInfo: any,
		public control: FormControl,
		public visible: boolean
	) { }

}
