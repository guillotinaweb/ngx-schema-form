import ZSchema from 'z-schema';
import { ZSchemaLibraryVersion, zSchemaLibraryVersionFrom$Schema } from './json-schema-version';

/** z-schema v12 {@link ZSchema.create} with {@code safe: true} returns {@code ZSchemaSafe} at type level. */
type SafeValidator = { validate: (data: unknown, schema: object) => { valid: boolean } };

const validators = new Map<ZSchemaLibraryVersion, SafeValidator>();

function getValidator($schema?: string | null): SafeValidator {
  const version = zSchemaLibraryVersionFrom$Schema($schema);
  let z = validators.get(version);
  if (!z) {
    z = ZSchema.create({
      safe: true,
      breakOnFirstError: true,
      version,
    }) as SafeValidator;
    validators.set(version, z);
  }
  return z;
}

/**
 * Returns whether {@code data} satisfies {@code subSchema} (e.g. an {@code if} applicator),
 * using the same z-schema {@code version} as the root document {@code $schema} (default {@code draft-04}).
 */
export function jsonSchemaInstanceMatches(
  subSchema: unknown,
  data: unknown,
  document$schema?: string | null,
): boolean {
  if (subSchema === undefined || subSchema === null) {
    return true;
  }
  const result = getValidator(document$schema).validate(data ?? {}, subSchema as object);
  return result.valid;
}
