import {Component, ComponentResolver, Directive, ElementRef, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form} from "../src/form/form.component";
import {FieldRegistry} from "../src/form/fieldregistry";

@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [FieldRegistry, NgModel],
	template: require("./app.component.html"),
	styleUrls: ["demo/app.scss"],
	encapsulation: ViewEncapsulation.None
})

export class DemoApp {
	private schema:any;
	private model:any;
	private container: ViewContainerRef;
	private resolver: ComponentResolver;
	private fieldValidators : { [fieldId:string]: Function} = {};
	constructor(container: ViewContainerRef = null, resolver: ComponentResolver = null,registry: FieldRegistry) {
		this.container = container;
		this.resolver = resolver;

		this.schema = require("./sampleschema.json")
		this.model = require("./samplemodel.json");

		this.fieldValidators["bornOn"] = (value, model):any => {
			let dateArr = value.split("-");
			if (dateArr.length === 3) {
				let now = new Date();
				let majorityYear = new Date(now.getFullYear()-18, now.getMonth(), now.getDay()).getTime();
				let born = new Date(dateArr[0],dateArr[1],dateArr[2]).getTime();
				if (born < majorityYear ){
					return true;
				} else {
					return "Too young to buy that stuff";
				}
			}
		};
	}

	ngOnInit() {
	}

}
