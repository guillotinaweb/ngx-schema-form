import { TestBed } from "@angular/core/testing";

import { WidgetFactory } from "./widgetfactory";
import { WidgetChooserComponent } from "./widgetchooser.component";

describe("WidgetChooserComponent", () => {

	let factory: WidgetFactory;

	it("should create a widget", ()=>{
		TestBed.createComponent(WidgetChooserComponent);
	});

	xit("should put the widget returned by the factory in the DOM", () => {
	
	});

});
