import { FieldType, TNullableFieldType } from '../template-schema/field/field';
import { TUnorderedPair } from './utils';

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

export type TSchemaScalarPrimitiveType = 'string' | 'boolean' | 'integer' | 'number';
export type TSchemaComplexPrimitiveType = 'object' | 'array';
export type TSchemaNullPrimitiveType = 'null';
export type TSchemaPrimitiveType = TSchemaComplexPrimitiveType | TSchemaScalarPrimitiveType | TSchemaNullPrimitiveType;

export type TSchemaNullableScalarPrimitiveType = TUnorderedPair<
  TSchemaNullPrimitiveType,
  TSchemaScalarPrimitiveType
>;

export type TSchemaPropertyType = FieldType
  | TNullableFieldType
  | TSchemaPrimitiveType
  | TSchemaNullableScalarPrimitiveType;

export interface ISchema {
  $schema?: string;
  type?: TSchemaPropertyType;
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
  /** Legacy named subschemas; draft 2020-12 prefers {@code $defs}. Mirrored when only one is set. */
  definitions?: Record<string, ISchema>;
  /** Draft 2020-12 named subschemas (same role as {@code definitions}). */
  $defs?: Record<string, ISchema>;
  /** Legacy base URI keyword; draft 2020-12 uses {@code $id}. */
  id?: string;
  /** Draft 2020-12 base URI keyword (same role as {@code id}). */
  $id?: string;
  order?: string[];
  /** List form (single schema for all elements) or draft 2020-12 rest schema after {@code prefixItems}. */
  items?: ISchema | ISchema[];
  /** Draft 2020-12 tuple positions; same role as array-shaped {@code items} in older drafts. */
  prefixItems?: ISchema[];
  /** Legacy tuple rest schema; in 2020-12 with {@code prefixItems}, use non-array {@code items} instead. */
  additionalItems?: ISchema;
  buttons?: IButton[];
  required?: string[];
  /** Draft 2020-12: conjunction of subschemas (may contain {@code if}/{@code then}/{@code else} or {@code dependentRequired}). */
  allOf?: ISchema[];
  /** Draft 2019-09 / 2020-12: when the trigger key is present, these property names are required (split from draft-07 {@code dependencies}). */
  dependentRequired?: Record<string, string[]>;
  /**
   * Draft 2019-09 / 2020-12: when the trigger key is present, the instance must satisfy the subschema; ngx metadata
   * uses {@code required} on each subschema (same UX as {@code dependentRequired}) — see z-schema MIGRATION.md.
   */
  dependentSchemas?: Record<string, ISchema>;
  /**
   * Set by {@link SchemaPreprocessor} for properties required via {@code dependentRequired} or {@code required}
   * inside {@code dependentSchemas} (draft 2019-09+ only): presence of any listed trigger (with a value) implies
   * this property is required.
   */
  dependentRequiredWhen?: string[];
  /**
   * Set by {@link SchemaPreprocessor} from {@code allOf} + {@code if}/{@code then}/{@code else}:
   * this property is required when {@code when} matches evaluation of {@code if} against the parent object.
   */
  conditionalRequiredRules?: Array<{ if: unknown; when: 'ifMatches' | 'ifFails' }>;
  /** Set by {@link SchemaPreprocessor} when the property name appears in {@code required}. */
  isRequired?: boolean;
  readOnly?: boolean;
  format?: string;
  widget?: IWidget | any;
  fieldsets?: IFieldSet[];
  /** allow additional properties */
  [prop: string]: any;
}
