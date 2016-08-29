import { Component, ComponentResolver, Directive, ElementRef, NgZone, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import { NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import { FormComponent} from "../src";
import { WidgetRegistry} from "../src";
import { Validator} from "../src";

@Component({
	selector: "schema-form-demo-app",
	directives: [
		FormComponent
	],
	providers: [WidgetRegistry, NgModel],
	template: require("./app.component.html"),
	styleUrls: ["demo/app.scss"],
	encapsulation: ViewEncapsulation.None
})

export class DemoApp {

	private schema:any;
	private model:any;
	private resolver: ComponentResolver;
	private fieldValidators : { [fieldId:string]: Validator} = {};
	private actions = {}

	constructor(resolver: ComponentResolver = null,registry: WidgetRegistry) {
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

		this.fieldValidators["/bornOn"] = (value, property, form) => {
			let dateArr = value.split("-");
			if (dateArr.length === 3) {
				let now = new Date();
				let min = new Date(now.getFullYear()-100, now.getMonth(), now.getDay()).getTime();
				let max = new Date().getTime();
				let born = new Date(dateArr[0],dateArr[1]-1,dateArr[2]).getTime();
				if (born > min && born < max ) {
					return null;
				} else {
					return [{"bornOn": {"expectedValue": ">today - 100 && < today", "actualValue":value}}];
				}
			}
		};

		this.fieldValidators["/promotion"] = (value, property, form) => {
			if (value === "student") {
				let bornOn = form.getProperty("/bornOn");
				if (bornOn.valid) {
					let date = bornOn.value.split('-');
					let validYear = new Date().getFullYear() -17;
					try{
						let actualYear = parseInt(date[0]);
						if (actualYear < validYear) {
							return null;
						}
						return [{"promotion": {"bornOn": {"expectedValue": "year<"+validYear, "actualValue": actualYear}}}];
					} catch (e) { }
				}
				return [{"promotion": {"bornOn": {"expectedFormat": "date","actualValue": bornOn.value}}}];
			}
			return null;
		}

		this.actions["send"] = (form, options) => {
			form.submit();
		}

		this.actions["reset"] = (form, options) => {
			form.reset();
		}

		this.actions["addItem"] =(property, parameters) => {
			property.addItem(parameters.value);
		}
	}

}
