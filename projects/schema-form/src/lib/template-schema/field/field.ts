import { Validator } from '../../model/validator';

export enum FieldType {
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Integer =  'integer',
  Number = 'number',
}

export interface Field {
  name: string;
  required: boolean;
  getSchema(): any;
  getButtons(): any;
  getValidators(): { path: string, validator: Validator }[];
}


