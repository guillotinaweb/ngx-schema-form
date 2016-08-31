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



import { RangeWidget } from "./range.widget";

describe("RangeWidget", () => {
	let tcb: TestComponentBuilder;
	let THE_VALUE = 12;
	beforeEachProviders(() => [TestComponentBuilder, provideForms()]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
	}));

	it("should initialize value from input", done => {
		tcb.createAsync(RangeWidget).then((fixture) => {
			fixture.detectChanges();
			let widgetComponent = fixture.componentInstance;

			widgetComponent.settings.value = THE_VALUE;

			fixture.detectChanges();

			let element = fixture.debugElement.nativeElement.querySelector("input");
			expect(element.value).toBe(THE_VALUE.toString());
			done();
		}).catch(exception => done.fail(exception));

	});

});
