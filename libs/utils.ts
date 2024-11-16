/**
 * Omit fields from an object
 * @param fields - Fields to omit
 * @param obj - Object to omit fields from
 * @returns Object without the specified fields
 * @example
 * const obj = { a: 1, b: 2, c: 3 }
 * omitFields(['a', 'b'], obj) // { c: 3 }
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const omitFields = (fields: string[], obj: Record<string, any>) => {
  const fieldsToFilter = new Set(fields)
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !fieldsToFilter.has(key))
  )
}
