import { FormControl } from "@angular/forms";

export class FieldModel {
	constructor(private id: string, private schema: any) { }

	private control: FormControl;
	private visible: boolean = false;
}

export class FormModel {
	private initialModel: any;
	changeEmitter;

}

export class FormModelFactory {

	createFormModel() {
		return new FormModel();
	}
}
