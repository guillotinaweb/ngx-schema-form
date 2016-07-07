import {Component, ComponentResolver, Directive, ElementRef, NgZone, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form} from "../src";
import {FieldRegistryService} from "../src";

@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [FieldRegistryService, NgModel],
	template: require("./app.component.html"),
	styleUrls: ["demo/app.scss"],
	encapsulation: ViewEncapsulation.None
})

export class DemoApp {

	private schema:any;
	private model:any;
	private resolver: ComponentResolver;
	private fieldValidators : { [fieldId:string]: Function} = {};
	private actions = {}

	constructor(resolver: ComponentResolver = null,registry: FieldRegistryService) {
		this.resolver = resolver;

		this.schema = (() => {
			try {
				return require("./sampleschema.json");
			} catch (e) {
				console.log(e);
			}
		})();
		this.model = (() => {
			try {
				return require("./samplemodel.json");
				
			} catch (e) {
				console.log(e);
			}
		})();

		this.fieldValidators["bornOn"] = (value, model):any => {
			let dateArr = value.split("-");
			if (dateArr.length === 3) {
				let now = new Date();
				let min = new Date(now.getFullYear()-100, now.getMonth(), now.getDay()).getTime();
				let max = new Date().getTime();
				let born = new Date(dateArr[0],dateArr[1],dateArr[2]).getTime();
				if (born > min && born < max ) {
					return true;
				} else {
					return "Too young to buy that stuff";
				}
			}
		};

		this.fieldValidators["promotion"] = (value, model, controls):any => {
			if (value === "student") {
				if (controls.bornOn.valid) {
					let date = model.bornOn.split('-');
					try{
						if (parseInt(date[0]) < ( new Date().getFullYear() - 17 ) ) {
							return null;
						}
					} catch (e) { }
					return "Student offer is not available for people under 17yo";
				} else {
					return "You must specify a birthdate in order to set the student offer."
				}
			}
			return null;
		}

		this.actions["send"] = (form, options) => {
			form.submit();
		}

		this.actions["reset"] = (form, options) => {
			form.reset();
		}
	}

}
