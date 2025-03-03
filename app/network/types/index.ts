import { AdditionalRequestOptions } from '~/types/api';

export interface ApiOptions {
  path: string; // Changed from url to path
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  formData?: Record<string, any>;
}

export interface ApiHelperParams {
  url: string;
  method?: string;
  body?: { [key: string]: any } | FormData;
  headers?: { [key: string]: string };
  additionalOptions?: AdditionalRequestOptions;
  timeout?: number;
}
