
export class FieldModel {
	constructor(private id: string, private schema: any) { }

	get id() {
		return id;
	}
	private control: FormControl;
	private visible: boolean = false;
}

export class FormModel {
	private fields : any,
	private controls[],
	private fieldValidators[];
	actions[];
	initialModel: json;
	changeEmitter;

}

export class FormModelFactory {
	
	createFormModel() {
		return new FormModel();
	}
}
