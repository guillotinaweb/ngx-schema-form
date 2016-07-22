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
	provideForms
} from "@angular/forms";

import { StringWidget } from "./string.widget";

describe("StringWidget", () => {
	let tcb: TestComponentBuilder;
	let THE_VALUE = "FOO";
	beforeEachProviders(() => [TestComponentBuilder, provideForms()]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
	}));

	it("should initialize value from input", done => {
		tcb.createAsync(StringWidget).then((fixture) => {
			fixture.detectChanges();
			let widgetComponent = fixture.componentInstance;

			widgetComponent.settings.value = THE_VALUE;
			fixture.detectChanges();

			let element = fixture.debugElement.nativeElement.querySelector("input");

			expect(element.value).toBe(THE_VALUE);
			done();
		}).catch(exception => done.fail(exception));
	});

});
