import {
	Component,
	Input,
	OnInit,
	ViewContainerRef
} from "@angular/core";
import { Validators } from "@angular/common";
import { FormControl } from "@angular/forms";

import { FieldFactory } from "../fieldfactory";
import { DefaultField } from "../fields";

@Component({
	selector: "field-chooser",
	template: "",
})
export class FieldChooserComponent implements OnInit {

	private fieldFactory: FieldFactory;
	private container: ViewContainerRef;
	private fieldInstance: any;

	@Input("id") id: string;
	@Input("settings") settings: any;
	@Input("control") control: FormControl;

	constructor(fieldFactory: FieldFactory = null, container: ViewContainerRef = null) {
		this.fieldFactory = fieldFactory;
		this.container = container;
	}

	ngOnInit() {
		this.fieldFactory.createField(this.container, this.settings.widget.id).then(ref => {
			ref.instance.settings = this.settings;
			ref.instance.name = this.id;
			ref.instance.id = this.id;
			ref.instance.control = this.control;
			this.fieldInstance = ref.instance;
		});
	}

}
