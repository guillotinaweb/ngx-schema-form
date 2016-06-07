import {Component, ComponentResolver, Directive, ElementRef, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form} from "../src/form/form.component";
import {FieldRegistry} from "../src/form/fieldregistry";
import {RatingField} from "./rating.ts";



/////////////////////////
// ** MAIN DEMO COMPONENT **
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
	private rating: number = 0;
	private schema:any;
	private model:any;
	private container: ViewContainerRef;
	private resolver: ComponentResolver;
	constructor(container: ViewContainerRef = null, resolver: ComponentResolver = null,registry: FieldRegistry) {
		registry.registerFieldType("rating",RatingField)
		this.container = container;
		this.resolver = resolver;
		this.schema = {
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"minLength": 2,
					"title": "Name",
					"description": "Name or alias"
				},
				"test":{"type":"rating","description":"birth on"},
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
	}

}
