export function isPresent(o) {
  return o !== null && o !== undefined;
}

export function isBlank(o) {
  return o === null || o === undefined;
}
