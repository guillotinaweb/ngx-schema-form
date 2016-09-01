import {
	Component,
	EventEmitter,
	Inject,
	Input,
	OnInit,
	Output,
	ViewChild,
	ViewContainerRef,
	forwardRef
} from "@angular/core";

import { WidgetFactory } from "./widgetfactory";

@Component({
	selector: "widget-chooser",
	template: "<div #target></div>",
})
export class WidgetChooserComponent {

	private widgetFactory: WidgetFactory;
	@ViewChild('target', {read: ViewContainerRef}) private container: ViewContainerRef;
	private widgetInstance: any;
	
	@Input() widgetInfo: any;
	@Output() widgetInstanciated = new EventEmitter<any>();

	constructor(@Inject(forwardRef(()=>WidgetFactory)) widgetFactory: WidgetFactory = null) {
		this.widgetFactory = widgetFactory;
	}

	ngAfterContentInit() {
		let ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
		this.widgetInstanciated.emit(ref.instance);
		this.widgetInstance = ref.instance;
	}

}
