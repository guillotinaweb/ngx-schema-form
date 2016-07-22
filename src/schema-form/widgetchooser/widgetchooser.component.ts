import {
	Component,
	Input,
	OnInit,
	ViewContainerRef
} from "@angular/core";
import { Validators } from "@angular/common";
import { FormControl } from "@angular/forms";

import { WidgetFactory } from "../widgetfactory";
import { DefaultWidget } from "../widgets";

@Component({
	selector: "widget-chooser",
	template: "",
})
export class WidgetChooserComponent implements OnInit {

	private widgetFactory: WidgetFactory;
	private container: ViewContainerRef;
	private widgetInstance: any;

	@Input("id") id: string;
	@Input("settings") settings: any;
	@Input("control") control: FormControl;

	constructor(widgetFactory: WidgetFactory = null, container: ViewContainerRef = null) {
		this.widgetFactory = widgetFactory;
		this.container = container;
	}

	ngOnInit() {
		this.widgetFactory.createWidget(this.container, this.settings.widget.id).then(ref => {
			console.log(ref);
			ref.instance.settings = this.settings;
			ref.instance.name = this.id;
			ref.instance.id = this.id;
			ref.instance.control = this.control;
			this.widgetInstance = ref.instance;
		});
	}

}
