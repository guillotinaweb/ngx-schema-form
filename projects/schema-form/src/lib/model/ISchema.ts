import {FieldType} from '../template-schema/field/field';

export interface IOneOf {
  enum?: any[];
  description?: string;
}

export interface IWidget {
  id?: string;
  plugins?: string;
  toolbar?: string;
}

export interface IFieldSet {
  id: string;
  title: string;
  name: string;
  description: string;
  fields: string[];
}

export interface IButton {
  id: string;
  label: string;
  widget?: string | object;
}

export interface IProperties {
  [prop: string]: ISchema;
}

export interface ISchema {
  $schema?: string;
  type?: FieldType | 'string' | 'object' | 'array' | 'boolean' | 'integer' | 'number';
  title?: string;
  name?: string;
  description?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  visibleIf?: any;
  enum?: any[];
  oneOf?: IOneOf[];
  properties?: IProperties;
  order?: string[];
  items?: IProperties;
  buttons?: IButton[];
  required?: string[];
  readOnly?: boolean;
  format?: string;
  widget?: IWidget | any;
  fieldsets?: IFieldSet[];
  [prop: string]: any;
}
