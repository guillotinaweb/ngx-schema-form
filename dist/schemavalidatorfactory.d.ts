export declare abstract class SchemaValidatorFactory {
    abstract createValidatorFn(schema: any): (value: any) => any;
}
export declare class ZSchemaValidatorFactory extends SchemaValidatorFactory {
    private zschema;
    constructor();
    createValidatorFn(schema: any): (value: any) => {
        [key: string]: boolean;
    };
}
