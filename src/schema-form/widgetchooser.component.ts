import {
	Component,
	EventEmitter,
	Inject,
	Input,
	AfterContentInit,
	Output,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";

import { WidgetFactory } from "./widgetfactory";

@Component({
	selector: "widget-chooser",
	template: "<div #target></div>",
})
export class WidgetChooserComponent implements AfterContentInit {

	@Input() widgetInfo: any;

	@Output() widgetInstanciated = new EventEmitter<any>();

	@ViewChild('target', {read: ViewContainerRef}) private container: ViewContainerRef;

	private widgetInstance: any;
	

	constructor(private widgetFactory: WidgetFactory = null) {}

	ngAfterContentInit() {
		let ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
		this.widgetInstanciated.emit(ref.instance);
		this.widgetInstance = ref.instance;
	}
}
