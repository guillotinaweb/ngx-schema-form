import {
	Component,
	ViewContainerRef,
	Input
} from "@angular/core";

import {Control} from "@angular/common";

import {Validators} from "@angular/common"
import {FieldFactory} from "./fieldfactory";
import {DefaultField} from "./fields/default";


@Component({
	selector: "field",
	template: ""
})
export class FieldChooser {

	private fieldFactory : FieldFactory;
	private container: ViewContainerRef;
	private fieldInstance: any;

	@Input("typename") typename: string;
	@Input("id") id: string;
	@Input("settings") settings: any;
	@Input("control") control: Control;
	@Input("visible") visible: boolean;

	constructor(fieldFactory: FieldFactory= null, container: ViewContainerRef = null) {
		this.fieldFactory = fieldFactory;
		this.container = container;
	}

	ngOnInit() {
		this.fieldFactory.createField(this.container, this.typename).then( ref => {
			ref.instance.settings = this.settings;
			ref.instance.name = this.id;
			ref.instance.id = this.id;
			ref.instance.control =  this.control;
			ref.instance.visible = this.visible
			this.fieldInstance = ref.instance;
		});
	}
	
	ngOnChanges(prop){
		if(this.fieldInstance && prop.hasOwnProperty("visible")){
			this.fieldInstance.visible = prop["visible"].currentValue;
		}
	}

}
