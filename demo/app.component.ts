import {Component, Directive, ElementRef, Renderer, ViewEncapsulation} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response} from "@angular/http";
import {Form} from "../src/form/form.component";


/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [HTTP_PROVIDERS],
	template: require("./app.component.html")
})

export class DemoApp {
	private schema:any;
	constructor(http: Http) {
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
			"required": ["email"]
		}
	}

	ngOnInit() {
		console.log("Initializing the component App.");
	}

}
