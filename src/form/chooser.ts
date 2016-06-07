import {
	Directive,
	ViewContainerRef,
	Input,
} from "@angular/core";
import {Validators} from "@angular/common"
import {FieldRegistry} from "./registry";
import {FieldFactory} from "./fieldfactory";
import {DefaultField} from "./fields/default";
import {StringField} from "./fields/string";
import {IntegerField} from "./fields/integer";
import {TextLineField} from "./fields/textline";


@Directive({
	selector: "field",
})
export class FieldChooser {
	private fieldFactory : FieldFactory;
	private container: ViewContainerRef;
	private fieldInstance: any;
	@Input("typename") typename: string;
	@Input("id") id: string;
	@Input("settings") settings: any;

	constructor(fieldFactory: FieldFactory= null, container: ViewContainerRef = null) {
		this.fieldFactory = fieldFactory;
		this.container = container;
	}

	ngOnInit() {
		this
		if(this.settings.required){
			this.settings.validators=Validators.required;
		}
		this.fieldFactory.createField(this.container,this.typename).then( ref => {
			ref.instance.settings = this.settings;
			ref.instance.name = this.id;
			this.fieldInstance = ref.instance;
		});
	}
}
