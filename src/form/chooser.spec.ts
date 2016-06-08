import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders
} from '@angular/core/testing';

import {
	ComponentRef,
	provide
} from "@angular/core"

import {
	TestComponentBuilder,
} from '@angular/compiler/testing';

import {ComponentResolver} from "@angular/core";
import {FieldFactory} from "./fieldfactory";
import {FieldChooser} from "./chooser";

describe("FieldChooser",() => {

	let THE_TYPENAME = "ANYTHING";
	let THE_SETTINGS = {key1:"a",key2:"b"};
	let THE_NAME = "NAME";

	let tcb: TestComponentBuilder;
	let factory : FieldFactory;
	beforeEachProviders(() => [TestComponentBuilder]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
		factory = new FieldFactory(null,null);
		spyOn(factory,"createField").and.returnValue(Promise.resolve({instance:{}}));
	}));

	it("should create a field", done => {
		tcb.overrideProviders(FieldChooser,[provide(FieldFactory,{useValue:factory})]).createAsync(FieldChooser).then( (fixture) => {
			let fieldComponent = fixture.componentInstance;
			fieldComponent.typename = "string";
			fieldComponent.settings = {required:true};
			fixture.detectChanges();
			expect(factory.createField).toHaveBeenCalledWith(fieldComponent.container,"string")

			let element = fixture.debugElement.nativeElement.querySelector("input");
			done();
		}).catch(exception => done.fail(exception));

	});


});
