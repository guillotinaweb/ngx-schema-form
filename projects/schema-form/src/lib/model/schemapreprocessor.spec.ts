import {SchemaPreprocessor} from './schemapreprocessor';
import {ISchema} from './ISchema';
import {FieldType} from '../template-schema/field/field';

const SCHEMA_DRAFT_2020_12 = 'https://json-schema.org/draft/2020-12/schema';

describe('SchemaPreprocessor', () => {

  it('should replace order by fieldsets', () => {
    let schema: ISchema = {
      'properties': {
        'name': {},
        'email': {}
      },
      'order': ['name', 'email'],
      'type': FieldType.Object
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.fieldsets).toBeDefined();
  });

  it('should treat dependentRequired triggers and dependents as fieldset-mandatory', () => {
    const schema: ISchema = {
      $schema: SCHEMA_DRAFT_2020_12,
      type: FieldType.Object,
      properties: {
        name: { type: 'string' },
        forename: { type: 'string' },
        nickname: { type: 'string' },
      },
      order: ['name', 'forename', 'nickname'],
      dependentRequired: {
        name: ['forename'],
      },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.forename.dependentRequiredWhen).toEqual(['name']);
    expect(schema.properties.name.isRequired).toBeUndefined();
    expect(schema.properties.forename.isRequired).toBeUndefined();
  });

  it('should set isRequired only for unconditional required array', () => {
    const schema: ISchema = {
      $schema: SCHEMA_DRAFT_2020_12,
      type: FieldType.Object,
      properties: {
        a: { type: 'string' },
        b: { type: 'string' },
      },
      order: ['a', 'b'],
      required: ['a'],
      dependentRequired: {
        a: ['b'],
      },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.a.isRequired).toBe(true);
    expect(schema.properties.b.isRequired).toBeUndefined();
    expect(schema.properties.b.dependentRequiredWhen).toEqual(['a']);
  });

  it('should merge dependentRequired from allOf applicators', () => {
    const schema: ISchema = {
      $schema: SCHEMA_DRAFT_2020_12,
      type: FieldType.Object,
      properties: {
        name: { type: 'string' },
        forename: { type: 'string' },
      },
      order: ['name', 'forename'],
      allOf: [
        { dependentRequired: { name: ['forename'] } },
        { dependentRequired: { forename: ['name'] } },
      ],
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.forename.dependentRequiredWhen).toContain('name');
    expect(schema.properties.name.dependentRequiredWhen).toContain('forename');
  });

  it('should handle if/then/else on the object itself (not only inside allOf)', () => {
    const schema: ISchema = {
      type: FieldType.Object,
      properties: {
        forename: { type: 'string' },
        name: { type: 'string' },
      },
      order: ['forename', 'name'],
      if: { properties: { forename: { const: 'BLA' } } },
      then: { required: ['name'] },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.name.conditionalRequiredRules?.length).toBe(1);
    expect(schema.properties.name.conditionalRequiredRules?.[0].when).toBe('ifMatches');
    const ifSchema = schema.properties.name.conditionalRequiredRules?.[0].if as { required?: string[] };
    expect(ifSchema.required).toContain('forename');
  });

  it('should annotate if/then/else required fields with conditionalRequiredRules', () => {
    const schema: ISchema = {
      type: FieldType.Object,
      properties: {
        region: { type: 'string' },
        zip: { type: 'string' },
      },
      order: ['region', 'zip'],
      allOf: [
        {
          if: { properties: { region: { const: 'US' } } },
          then: { required: ['zip'] },
        },
      ],
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.zip.conditionalRequiredRules?.length).toBe(1);
    expect(schema.properties.zip.conditionalRequiredRules?.[0].when).toBe('ifMatches');
  });

  it('should treat dependentSchemas required like dependentRequired for metadata', () => {
    const schema: ISchema = {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      type: FieldType.Object,
      properties: {
        creditCard: { type: 'string' },
        billingAddress: { type: 'string' },
      },
      order: ['creditCard', 'billingAddress'],
      dependentSchemas: {
        creditCard: { required: ['billingAddress'] },
      },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.billingAddress.dependentRequiredWhen).toEqual(['creditCard']);
  });

  it('should merge dependentSchemas from allOf', () => {
    const schema: ISchema = {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      type: FieldType.Object,
      properties: {
        a: { type: 'string' },
        b: { type: 'string' },
      },
      order: ['a', 'b'],
      allOf: [{ dependentSchemas: { a: { required: ['b'] } } }],
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.b.dependentRequiredWhen).toEqual(['a']);
  });

  it('should combine dependentRequired and dependentSchemas for the same trigger', () => {
    const schema: ISchema = {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      type: FieldType.Object,
      properties: {
        t: { type: 'string' },
        x: { type: 'string' },
        y: { type: 'string' },
      },
      order: ['t', 'x', 'y'],
      dependentRequired: { t: ['x'] },
      dependentSchemas: { t: { required: ['y'] } },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.x.dependentRequiredWhen).toEqual(['t']);
    expect(schema.properties.y.dependentRequiredWhen).toEqual(['t']);
  });

  it('should ignore dependentRequired and dependentSchemas when $schema is draft-07', () => {
    const schema: ISchema = {
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: FieldType.Object,
      properties: {
        name: { type: 'string' },
        forename: { type: 'string' },
      },
      order: ['name', 'forename'],
      dependentRequired: { name: ['forename'] },
      dependentSchemas: { name: { required: ['forename'] } },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.properties.forename.dependentRequiredWhen).toBeUndefined();
  });

  it('should mirror $defs into definitions and preprocess nested object schemas', () => {
    const schema: ISchema = {
      $schema: SCHEMA_DRAFT_2020_12,
      type: FieldType.Object,
      properties: { a: { type: 'string' } },
      order: ['a'],
      $defs: {
        Row: {
          type: FieldType.Object,
          properties: { x: { type: 'number' } },
          order: ['x'],
        },
      },
    };

    SchemaPreprocessor.preprocess(schema);

    expect(schema.definitions).toBe(schema.$defs);
    expect(schema.$defs!.Row.fieldsets).toBeDefined();
  });

  it('should accept draft 2020-12 array tuple prefixItems with single-schema items for rest', () => {
    const schema: ISchema = {
      type: 'array',
      prefixItems: [{ type: 'string' }, { type: 'integer' }],
      items: { type: 'boolean' },
    };

    expect(() => SchemaPreprocessor.preprocess(schema, '/')).not.toThrow();
  });

  it('should still preprocess legacy tuple items and additionalItems', () => {
    const schema: ISchema = {
      type: 'array',
      items: [{ type: 'string' }, { type: 'string' }],
      additionalItems: { type: 'number' },
    };

    expect(() => SchemaPreprocessor.preprocess(schema, '/')).not.toThrow();
  });

});
