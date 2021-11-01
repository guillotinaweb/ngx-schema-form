import { Validator } from '../../model/validator';
import {ISchema} from '../../model/ISchema';
import { TUnorderedPair } from '../../model/utils';

export enum FieldType {
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Integer =  'integer',
  Number = 'number',
  Null = 'null',
}

export type TNullableFieldType = TUnorderedPair<
  FieldType.Null,
  FieldType.String | FieldType.Number | FieldType.Boolean | FieldType.Integer
>;

export interface Field {
  name: string;
  required: boolean;
  getSchema(): ISchema;
  getButtons(): any;
  getValidators(): { path: string, validator: Validator }[];
}


