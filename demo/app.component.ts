import {Component, ComponentResolver, Directive, ElementRef, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response} from "@angular/http";
import {Form} from "../src/form/form.component";
import {FieldFactory} from "../src/form/fieldfactory";
import {StringField} from "../src/form/fields/string";


/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form,
		StringField
	],
	providers: [HTTP_PROVIDERS],
	template: require("./app.component.html"),
	styleUrls: ["demo/app.scss"],
	encapsulation: ViewEncapsulation.None
})

export class DemoApp {

	private schema:any;
	private model:any;
	private container: ViewContainerRef;
	private resolver: ComponentResolver;
	constructor(http: Http, container: ViewContainerRef = null, resolver: ComponentResolver = null) {
		this.container = container;
		this.resolver = resolver;
		//http.get("./sample.json").subscribe((res: Response) => {this.schema = res.json();console.log(res);});
		this.schema = {
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"minLength": 2,
					"title": "Name",
					"description": "Name or alias"
				},
				"age": {
					"type": "integer",
					"description": "Age"
				},
				"email" : {
					"type": "string",
					"description": "Email"
				},
				"description" : {
					"type": "string",
					"description": "A long text"
				}
			},
			"required": ["email","age"]
		}

		this.model = {
			"name": "John Doe",
			"age": 42,
			"description": "Nothing interesting"
		};
	}

	ngOnInit() {
		console.log("Initializing the component App.");
		console.log(StringField);
		let fieldFactory = new FieldFactory(this.resolver);
		fieldFactory.registerFieldType("string",StringField);
		fieldFactory.createField(this.container,"string");
	}

}
