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
	
	@Input() widgetInfo: any;
	@Input("id") id: string;
	@Input() schema: any;
	@Input("control") control: FormControl;

	constructor(widgetFactory: WidgetFactory = null) {
		this.widgetFactory = widgetFactory;
	}

	ngAfterViewInit() {
		this.widgetFactory.createWidget(this.container, this.widgetInfo.id).then(ref => {
			ref.instance.schema = this.schema;
			ref.instance.settings = this.schema;
			ref.instance.settings.widget = this.widgetInfo;
			ref.instance.name = this.id;
			ref.instance.id = this.id;
			ref.instance.control = this.control;
			this.widgetInstance = ref.instance;
		});
	}

}
