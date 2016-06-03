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
	beforeEachProviders(() => [TestComponentBuilder]);

	beforeEach(inject([TestComponentBuilder], _tcb => { 
		tcb = _tcb;
	}));

	it("should initialize value from input", done => {
		tcb.createAsync(StringField).then( (fixture) => {
			fixture.detectChanges();
			let fieldComponent = fixture.componentInstance;

			fieldComponent.value="Hello World";
			fixture.detectChanges(false);		

			let element = fixture.debugElement.nativeElement.querySelector("input");

			expect(element.value).toBe("Hello World");
			done();
		}).catch(exception => done.fail(exception));

	});
});
