export const isValidNumber = (value: any): value is number =>
  typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);

export const isValidFunction = (value: any): value is Function =>
  typeof value === 'function';

export const isValidArrayLength = <T>(value: any): value is T[] =>
  Array.isArray(value) && value.length > 0;

export const isValidObject = (value: any): value is Record<string, any> =>
  value !== null &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  Object.keys(value as object).length > 0;

export const isValidString = (value: any): value is string =>
  typeof value === 'string' && value.trim().length > 0;
export const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;
