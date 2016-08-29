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
	@Output() widgetInstanciated = new EventEmitter<any>();

	constructor(@Inject(forwardRef(()=>WidgetFactory)) widgetFactory: WidgetFactory = null) {
		this.widgetFactory = widgetFactory;
	}

	ngAfterViewInit() {
		this.widgetFactory.createWidget(this.container, this.widgetInfo.id).then(ref => {
			this.widgetInstanciated.emit(ref.instance);
			this.widgetInstance = ref.instance;
		});
	}

}
