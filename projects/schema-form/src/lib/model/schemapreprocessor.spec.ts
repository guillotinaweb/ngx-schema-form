import {SchemaPreprocessor} from './schemapreprocessor';
import {ISchema} from './ISchema';
import {FieldType} from '../template-schema/field/field';

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

});
