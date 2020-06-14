import {FieldType} from '../template-schema/field/field';

export interface IOneOf {
  enum?: any[];
  description?: string;
  /** allow additional properties */
  [prop: string]: any;
}

export interface IWidget {
  id?: string;
  plugins?: string;
  toolbar?: string;
  /** allow additional properties */
  [prop: string]: any;
}

export interface IFieldSet {
  id: string;
  title: string;
  name: string;
  description: string;
  fields: string[];
  /** allow additional properties */
  [prop: string]: any;
}

export interface IButton {
  id: string;
  label: string;
  widget?: string | object;
  /** allow additional properties */
  [prop: string]: any;
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
  items?: ISchema;
  buttons?: IButton[];
  required?: string[];
  readOnly?: boolean;
  format?: string;
  widget?: IWidget | any;
  fieldsets?: IFieldSet[];
  /** allow additional properties */
  [prop: string]: any;
}
