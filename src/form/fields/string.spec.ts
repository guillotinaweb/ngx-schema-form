import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders,
} from '@angular/core/testing';

import {
	TestComponentBuilder,
} from '@angular/compiler/testing';


import {StringField} from "./string";

describe("StringField",()=>{
	let tcb: TestComponentBuilder;
	let THE_VALUE="FOO";
	beforeEachProviders(() => [TestComponentBuilder]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
	}));

	it("should initialize value from input", done => {
		tcb.createAsync(StringField).then( (fixture) => {
			fixture.detectChanges();
			let fieldComponent = fixture.componentInstance;

			fieldComponent.settings.value = THE_VALUE;
			fixture.detectChanges();

			let element = fixture.debugElement.nativeElement.querySelector("input");

			expect(element.value).toBe(THE_VALUE);
			done();
		}).catch(exception => done.fail(exception));
	});

});
