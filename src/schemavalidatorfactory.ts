let ZSchema = require('z-schema');

export abstract class SchemaValidatorFactory {
  abstract createValidatorFn(schema): (value: any) => any;
}

export class ZSchemaValidatorFactory extends SchemaValidatorFactory {

  protected zschema;

  constructor() {
    super();
    this.zschema = new ZSchema({});
  }

  createValidatorFn(schema: any) {
    return (value): { [key: string]: boolean } => {

      if (schema.type === 'number' || schema.type === 'integer') {
        value = +value;
      }

      this.zschema.validate(value, schema);
      let err = this.zschema.getLastErrors();
      return err || null;
    };
  }
}
