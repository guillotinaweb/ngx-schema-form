export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: any): (value: any) => any;
    abstract getSchema(schema: any, ref: any): any;
}
export declare class ZSchemaValidatorFactory extends SchemaValidatorFactory {
    protected zschema: any;
    constructor();
    createValidatorFn(schema: any): (value: any) => {
        [key: string]: boolean;
    };
    getSchema(schema: any, ref: string): any;
    private denormalizeRequiredPropertyPaths(err);
    private getDefinition(schema, ref);
}
