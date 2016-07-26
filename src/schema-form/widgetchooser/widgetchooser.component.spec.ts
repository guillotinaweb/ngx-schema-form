import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders,
	TestComponentBuilder
} from "@angular/core/testing";

import {
	provide
} from "@angular/core";

import { ComponentResolver } from "@angular/core";
import { WidgetFactory } from "../widgetfactory";
import { WidgetChooserComponent } from "./widgetchooser.component";

describe("WidgetChooserComponent", () => {

	let tcb: TestComponentBuilder;
	let factory: WidgetFactory;
	beforeEachProviders(() => [TestComponentBuilder, {provide: WidgetFactory, useClass: WidgetFactoryMock}]);

	class WidgetFactoryMock {
		createWidget() {
			return new Promise( (resolve, reject) => {
				resolve({instance: { } });
			});
		}
	};

	beforeEach(inject([TestComponentBuilder, WidgetFactory], (_tcb, _factory) => {
		tcb = _tcb;
		factory = _factory;
		spyOn(factory, "createWidget").and.callThrough();
	}));

	it("should create a widget", done => {
		tcb.createAsync(WidgetChooserComponent).then((fixture) => {
			let widgetComponent = fixture.componentInstance;
			widgetComponent.id = "string";
			widgetComponent.settings = { required: true };
			fixture.detectChanges();
			expect(factory.createWidget).toHaveBeenCalledWith(widgetComponent.container, "string");

			let element = fixture.debugElement.nativeElement.querySelector("input");
			done();
		}).catch(exception => done.fail(exception));

	});

	xit("should put the widget returned by the factory in the DOM", () => { });

});
