
import { Injectable } from '@angular/core';
import ZSchema from 'z-schema';
import { ISchema } from './model/ISchema';
import { ZSchemaLibraryVersion, zSchemaLibraryVersionFrom$Schema } from './model/json-schema-version';
import { FieldType } from './template-schema/field/field';

export abstract class SchemaValidatorFactory {
  /**
   * @param schema Schema fragment used for validation (e.g. a single property).
   * @param documentSchema Root document schema whose {@code $schema} selects the z-schema draft; defaults to {@code schema} when omitted.
   */
  abstract createValidatorFn(schema: any, documentSchema?: ISchema): (value: any) => any;

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
   *         this.zschema = ZSchema.create({ safe: true, version: 'draft-04' })
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

  /** One cached validator per resolved {@link ZSchemaLibraryVersion}. */
  private validators = new Map<ZSchemaLibraryVersion, any>();

  constructor() {
    super();
  }

  private getValidator(documentSchema: ISchema) {
    const version = zSchemaLibraryVersionFrom$Schema(documentSchema?.$schema);
    let z = this.validators.get(version);
    if (!z) {
      z = ZSchema.create({
        safe: true,
        breakOnFirstError: false,
        version,
      });
      this.validators.set(version, z);
    }
    return z;
  }

  reset() {
    this.validators.clear();
  }

  createValidatorFn(schema: ISchema, documentSchema?: ISchema) {
    const doc = documentSchema ?? schema;
    return (value): { [key: string]: boolean } => {

      if (schema.type === FieldType.Number || schema.type === FieldType.Integer) {
        value = +value;
      }

      const zschema = this.getValidator(doc);
      const result = zschema.validate(value, schema);
      const err = !result.valid && result.err ? result.err.details : null;

      this.denormalizeRequiredPropertyPaths(err);

      return err && err.length ? err : null;
    };
  }

  getSchema(schema: any, ref: string) {
    // check definitions are valid
    const resolved = this.getDefinition(schema, ref);
    if (resolved === undefined) {
      throw new Error(`Unable to resolve schema reference: ${ref}`);
    }
    return resolved;
  }

  private denormalizeRequiredPropertyPaths(err: any[] | null) {
    if (!err || !err.length) {
      return;
    }
    for (const error of err) {
      if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
        error.path = `${error.path}${error.params[0]}`;
      }
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

