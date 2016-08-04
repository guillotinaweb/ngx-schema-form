import {
	Component,
	Input,
	OnInit,
	ViewChild,
	ViewContainerRef
} from "@angular/core";
import { Validators } from "@angular/common";
import { FormControl } from "@angular/forms";

import { WidgetFactory } from "../widgetfactory";
import { DefaultWidget } from "../widgets";

@Component({
	selector: "widget-chooser",
	template: "<div #target></div>",
})
export class WidgetChooserComponent {

	private widgetFactory: WidgetFactory;
	@ViewChild('target', {read: ViewContainerRef}) private container: ViewContainerRef;
	private widgetInstance: any;
	
	@Input() widget: any;
	@Input("id") id: string;
	@Input("settings") settings: any;
	@Input("control") control: FormControl;

	constructor(widgetFactory: WidgetFactory = null) {
		this.widgetFactory = widgetFactory;
	}

	ngAfterViewInit() {
		this.widgetFactory.createWidget(this.container, this.widget.id).then(ref => {
			//TODO change settings by schema and rename widget by options.
			ref.instance.settings = this.settings;
			ref.instance.settings.widget = this.widget;
			ref.instance.name = this.id;
			ref.instance.id = this.id;
			ref.instance.control = this.control;
			this.widgetInstance = ref.instance;
		});
	}

}
