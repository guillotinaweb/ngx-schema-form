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
import { FieldFactory } from "../fieldfactory";
import { FieldChooserComponent } from "./fieldchooser.component";

describe("FieldChooserComponent", () => {

	let tcb: TestComponentBuilder;
	let factory: FieldFactory;
	beforeEachProviders(() => [TestComponentBuilder, {provide: FieldFactory, useClass: FieldFactoryMock}]);

	class FieldFactoryMock {
		createField() {
			return new Promise( (resolve, reject) => {
				resolve({instance: { } });
			});
		}
	};

	beforeEach(inject([TestComponentBuilder, FieldFactory], (_tcb, _factory) => {
		tcb = _tcb;
		factory = _factory;
		spyOn(factory, "createField").and.callThrough();
	}));

	it("should create a field", done => {
		tcb.createAsync(FieldChooserComponent).then((fixture) => {
			let fieldComponent = fixture.componentInstance;
			fieldComponent.typename = "string";
			fieldComponent.settings = { required: true };
			fixture.detectChanges();
			expect(factory.createField).toHaveBeenCalledWith(fieldComponent.container, "string");

			let element = fixture.debugElement.nativeElement.querySelector("input");
			done();
		}).catch(exception => done.fail(exception));

	});

	xit("should put the field returned by the factory in the DOM", () => { });

});
