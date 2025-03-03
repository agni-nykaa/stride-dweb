import { defaultRequestOptions } from '~/constants/api';
import { logger, loggerInitialized } from '~/utils/logger';
import { ApiHelperParams } from '../types';

export const apiHelper = async ({
  url,
  method = 'get',
  body,
  headers,
  additionalOptions = defaultRequestOptions,
  timeout = 10000,
}: ApiHelperParams): Promise<Response> => {
  await loggerInitialized;
  try {
    if (!url) {
      logger.error('"url" cannot be empty!');
      throw new Error('"url" cannot be empty!');
    }
    const customRequestHeaders = {
      ...(headers && { ...headers }),
      ...{
        ...defaultRequestOptions,
        ...additionalOptions,
      },
    };
    const params: RequestInit = {
      method,
      timeout,
      headers: customRequestHeaders,
      ...(body && { body: body }),
    };
    const response = await fetch(url, params);
    if (!response.ok) {
      logger.error('Network response was not ok');
      throw new Error('Network response was not ok');
    }
    const finalResponse = await response.json();
    const responseHeaders = new Headers(response.headers);
    return new Response(JSON.stringify(finalResponse), {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error in catch block' }), {
      status: 500,
      statusText: 'Error in catch block',
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
