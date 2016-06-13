import {Component, ComponentResolver, Directive, ElementRef, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form} from "../src/form/form.component";
import {FieldRegistry} from "../src/form/fieldregistry";
import {RatingField} from "./rating.ts";

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

		this.schema = require("./sampleschema_migration.json")
		this.model = require("./samplemodel_migration.json");
	}

	ngOnInit() {
	}

}
