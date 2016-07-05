import {
	describe,
	it,
	expect,
	inject,
	beforeEach,
	beforeEachProviders
} from "@angular/core/testing";

import {
	IntegerField,
	TextLineField,
	StringField
} from "./fields";

import {FieldRegistry} from "./fieldregistry";

describe("FieldRegistry", () => {

	let STRING_TYPE = "string";
	let INT_TYPE = "integer";
	let TEXTLINE_TYPE = "textline";

	let A_NOT_REGISTERED_TYPE = "FOOBARSTRING";
	let THE_DEFAULT_FIELD_TYPE = class { };
	let THE_TYPE = "date";
	let THE_FIELD_TYPE = class { };

	let registry: FieldRegistry;

	beforeEach(() => {
		registry = new FieldRegistry();
	});

	it("should be initialized with primitives fields", () => {
		let stringField = registry.getFieldType(STRING_TYPE);
		let integerField = registry.getFieldType(INT_TYPE);
		let textlineField = registry.getFieldType(TEXTLINE_TYPE);

		expect(stringField).toBe(StringField);
		expect(integerField).toBe(IntegerField);
		expect(textlineField).toBe(TextLineField);
	});

	it("should return a default field if there is no matching string in fieldTypes", () => {
		let fieldType = registry.getFieldType(A_NOT_REGISTERED_TYPE);

		expect(fieldType).not.toBe(null);
	});

	it("should return the field type set when there is no matching type registered", () => {
		registry.setDefaultFieldType(THE_DEFAULT_FIELD_TYPE);

		let fieldType = registry.getFieldType(A_NOT_REGISTERED_TYPE);

		expect(fieldType).toBe(THE_DEFAULT_FIELD_TYPE);
	});

	it("should register a field type", () => {
		registry.registerFieldType(THE_TYPE, THE_FIELD_TYPE);

		let fieldType = registry.getFieldType(THE_TYPE);

		expect(fieldType).toBe(THE_FIELD_TYPE);
	});

});
