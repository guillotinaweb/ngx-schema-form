export declare class SchemaPreprocessor {
    static preprocess(jsonSchema: any, path?: string): any;
    private static checkProperties(jsonSchema, path);
    private static checkAndCreateFieldsets(jsonSchema, path);
    private static checkFieldsUsage(jsonSchema, path);
    private static createFieldsets(jsonSchema);
    private static replaceOrderByFieldsets(jsonSchema);
    private static normalizeWidget(fieldSchema);
    private static normalizeRequired(jsonSchema);
    private static checkItems(jsonSchema, path);
    private static recursiveCheck(jsonSchema, path);
}
