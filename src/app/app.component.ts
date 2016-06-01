import {Component, Directive, ElementRef, Renderer, ViewEncapsulation} from "@angular/core";
import {Http} from "@angular/http";
import {Form} from "../form/form.component";


/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [
	],
	template: require("./app.component.html")
})

export class App {

	constructor() {
	}

	ngOnInit() {
		console.log("Initializing the component App.");
	}

}
