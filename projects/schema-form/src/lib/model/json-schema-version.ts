/**
 * Maps a document {@code $schema} URI to z-schema's {@code version} option (see z-schema MIGRATION.md).
 * When {@code $schema} is missing, defaults to {@code draft-04} (legacy ngx / JSON Schema behaviour).
 */
export type ZSchemaLibraryVersion =
  | 'draft-04'
  | 'draft-06'
  | 'draft-07'
  | 'draft2019-09'
  | 'draft2020-12';

export function zSchemaLibraryVersionFrom$Schema(uri: string | undefined | null): ZSchemaLibraryVersion {
  if (uri == null || typeof uri !== 'string' || !uri.trim()) {
    return 'draft-04';
  }
  const uriTrimmed = uri.trim().toLowerCase();
  // Substrings like draft/2020-12 or draft2020-12 already contain "2020-12".
  if (uriTrimmed.includes('2020-12')) {
    return 'draft2020-12';
  } else if (uriTrimmed.includes('2019-09')) {
    return 'draft2019-09';
  } else if (uriTrimmed.includes('draft-07') || uriTrimmed.includes('draft/07')) {
    return 'draft-07';
  } else if (uriTrimmed.includes('draft-06') || uriTrimmed.includes('draft/06')) {
    return 'draft-06';
  } else {
    return 'draft-04';
  }
}

/** Draft 2019-09 / 2020-12: {@code dependentRequired} / {@code dependentSchemas} (split from draft-07 {@code dependencies}). */
export function jsonSchemaSupportsDependentApplicators(uri: string | undefined | null): boolean {
  const jsonSchemaVersion = zSchemaLibraryVersionFrom$Schema(uri);
  return jsonSchemaVersion === 'draft2019-09' || jsonSchemaVersion === 'draft2020-12';
}
