import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders
} from '@angular/core/testing';

import {StringField} from "./fields/string"
import {FieldRegistry} from "./fieldregistry";

describe("FieldRegistry",() => {
	let A_NOT_REGISTERED_TYPE = "FOOBARSTRING";
	let THE_DEFAULT_FIELD_TYPE = new class{};

	let registry : FieldRegistry;

	beforeEach(() => {
		registry = new FieldRegistry();
	});

	it("should return a default field if there is no matching string in fieldTypes",() => {
		let fieldType = registry.getFieldType(A_NOT_REGISTERED_TYPE);
		
		expect(fieldType).not.toBe(null);
	});

	it("should return the field provided in constructor if there is no matching string in fieldTypes",() => {
		let registry = new FieldRegistry(THE_DEFAULT_FIELD_TYPE);
		let fieldType = registry.getFieldType(A_NOT_REGISTERED_TYPE);
		
		expect(fieldType).toBe(THE_DEFAULT_FIELD_TYPE);
	});
});
