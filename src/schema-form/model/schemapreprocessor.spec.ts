import { SchemaPreprocessor } from "./schemapreprocessor";
describe("SchemaPreprocessor", () => {

  it("should replace order by fieldsets", () => {
    let schema: any = {
      "properties": {
        "name": {},
        "email": {}
      },
      "order": ["name", "email"],
      "type": "object"
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.fieldsets).toBeDefined();
  });

});
