export declare class SchemaPreprocessor {
    static preprocess(jsonSchema: any, path?: string): any;
    private static checkProperties(jsonSchema, path);
    private static checkAndCreateFieldsets(jsonSchema, path);
    private static checkFieldsUsage(jsonSchema, path);
    private static createFieldsets(jsonSchema);
    private static replaceOrderByFieldsets(jsonSchema);
    private static normalizeWidget(fieldSchema);
    private static checkItems(jsonSchema, path);
    private static recursiveCheck(jsonSchema, path);
    private static removeRecursiveRefProperties(jsonSchema, definitionPath);
    /**
     * Enables alias names for JSON schema extensions.
     *
     * Copies the value of each alias JSON schema property
     * to the JSON schema property of ngx-schema-form.
     *
     * @param schema JSON schema to enable alias names.
     */
    private static normalizeExtensions(schema);
}
