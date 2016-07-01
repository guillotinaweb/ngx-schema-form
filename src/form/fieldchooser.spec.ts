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

import {ComponentResolver} from "@angular/core";
import {FieldFactory} from "./fieldfactory";
import {FieldChooser} from "./fieldchooser";

/*@Component(
	template: "<field [typename]="data.type" [id]="data.id" [settings]="data.settings"></field>";
)
class FieldChooserContainer{
}*/

describe("FieldChooser", () => {

	let tcb: TestComponentBuilder;
	let factory: FieldFactory;
	beforeEachProviders(() => [TestComponentBuilder]);

	beforeEach(inject([TestComponentBuilder], _tcb => {
		tcb = _tcb;
		factory = new FieldFactory(null, null);
		spyOn(factory, "createField").and.returnValue(Promise.resolve({ instance: {} }));
	}));

	it("should create a field", done => {
		tcb.overrideProviders(FieldChooser, [provide(FieldFactory, { useValue: factory })]).createAsync(FieldChooser).then((fixture) => {
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
