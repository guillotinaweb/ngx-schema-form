import { FieldType } from '../template-schema/field/field';

export type TPropertyTypeMapping = { [type in FieldType]?: any };

export const PROPERTY_TYPE_MAPPING: TPropertyTypeMapping  = {};
