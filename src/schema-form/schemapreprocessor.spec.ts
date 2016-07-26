import {
	describe,
	expect
} from "@angular/core/testing";

import { SchemaPreprocessor } from "./schemapreprocessor";
describe("SchemaPreprocessor", () => {

	it("should replace order by fieldsets", () => {
		let schema: any = {
			"properties": {
				"name": {},
				"email":{}
			},
			"order": ["name","email"]
		};
		
		let p = new SchemaPreprocessor(schema);

		p.preprocess();

		expect(schema.fieldsets).toBeDefined();
	})

})
