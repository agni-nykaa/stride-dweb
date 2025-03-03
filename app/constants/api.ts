import { AdditionalRequestOptions } from '../types/api';

export const API_STATES = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  LOADING: 'loading',
  SUCCESS: 'success',
} as const;

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export type ApiMethod = (typeof API_METHODS)[keyof typeof API_METHODS];

export const baseHeaders = {
  accept: 'application/json, text/plain, */*',
  'content-type': 'application/json;charset=UTF-8',
};

export enum platformNames {
  NYKAA = 'nykaa',
  MEN = 'men',
}

const PLATFORM =
  (typeof process !== 'undefined' && process?.env?.PLATFORM) ||
  platformNames.NYKAA;

export const defaultRequestOptions: AdditionalRequestOptions = {
  CSRF: true,
  STORE: true,
  CATALOG_TAG_FILTER: PLATFORM !== platformNames.NYKAA,
};

export const WHITELISTED_COOKIES = ['PHPSESSID'];

export const ERROR_MESSAGE = 'Something went wrong. Please try again.';
