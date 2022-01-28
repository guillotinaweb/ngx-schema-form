import ZSchema from 'z-schema';
import {Injectable} from '@angular/core';
import {ISchema} from './model/ISchema';
import {FieldType} from './template-schema/field/field';

export abstract class SchemaValidatorFactory {
  abstract createValidatorFn(schema): (value: any) => any;

  abstract getSchema(schema, ref): any;

  /**
   * Override this method to reset the schema validator instance.<br/>
   * This may be required since some schema validators keep a deep copy<br/>
   * of your schemas and changes at runtime are not recognized by the schema validator.<br/>
   * In this method you should either re-instantiate the schema validator or
   * clear its cache.<br/>
   * Example of re-instantiating schema validator
   * <code>
   *     reset(){
   *         this.zschema = new ZSchema({})
   *     }
   * </code>
   * <br/>
   * Since this method it self does nothing there is <br/>
   * no need to call the <code>super.reset()</code>
   */
  reset() {

  }

  /**
   * Override this method if the validator instance supports compiling a schema an resolve all refs and defs.
   * @param schema The schema to be compiled and get its refs, deps, etc. resolved
   * @returns The compiled schema. Per default it does simply return the give schema.
   */
  compile(schema:any){
    return schema
  }
}

@Injectable()
export class ZSchemaValidatorFactory extends SchemaValidatorFactory {

  protected zschema;

  constructor() {
    super();
    this.createSchemaValidator();
  }

  private createSchemaValidator() {
    this.zschema =  new ZSchema({
      breakOnFirstError: false
    });
  }

  reset() {
    this.createSchemaValidator();
  }

  compile(schema: any) {
    const zSchema = new ZSchema({}) as any;
    zSchema.compileSchema(schema);
    return zSchema.getResolvedSchema(schema);
  }

  createValidatorFn(schema: ISchema) {
    return (value): { [key: string]: boolean } => {

      if (schema.type === FieldType.Number || schema.type === FieldType.Integer) {
        value = +value;
      }

      this.zschema.validate(value, schema);
      // tslint:disable-next-line:prefer-const
      let err = this.zschema.getLastErrors();

      this.denormalizeRequiredPropertyPaths(err);

      return err || null;
    };
  }

  getSchema(schema: any, ref: string) {
    // check definitions are valid
    const isValid = this.zschema.compileSchema(schema);
    if (isValid) {
      return this.getDefinition(schema, ref);
    } else {
      throw this.zschema.getLastError();
    }
  }

  private denormalizeRequiredPropertyPaths(err: any[]) {
    if (err && err.length) {
      err = err.map(error => {
        if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
          error.path = `${error.path}${error.params[0]}`;
        }
        return error;
      });
    }
  }

  private getDefinition(schema: any, ref: string) {
    let foundSchema = schema;
    ref.split('/').slice(1).forEach(ptr => {
      if (ptr) {
        foundSchema = foundSchema[ptr];
      }
    });
    return foundSchema;
  }
}

