import { json } from '@remix-run/node';
import {
  baseHeaders,
  ERROR_MESSAGE,
  WHITELISTED_COOKIES,
} from '../constants/api';

const baseUrl = process.env.API_HOST;

export const filterCookies = (cookieString: string | null): string => {
  //TODO-: Need to remove it Adding for local working
  if (!cookieString) return '';

  const cookies = cookieString
    .split(';')
    .map((cookie) => cookie.trim())
    .filter((cookie) => {
      const cookieName = cookie.split('=')[0];
      return WHITELISTED_COOKIES.includes(cookieName);
    });
  // @TODO : remove the hard coded PHPSESSID.
  return cookies.length
    ? cookies.join('; ')
    : '';
};

interface ActionOptions {
  path: string; // Changed from url to path
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  formData?: Record<string, any>;
}

export const getFullUrl = (path: string) => `${baseUrl}${path}`;

export const handleAction = async (
  request: Request,
  options: ActionOptions,
) => {
  const incomingCookies = request.headers.get('cookie');

  const headers: Record<string, string | undefined> = {
    ...baseHeaders,
    cookie: filterCookies(incomingCookies),
  };

  try {
    let requestBody: string | FormData | undefined;

    if (options.formData) {
      // Handle FormData
      const formData = new FormData();
      Object.entries(options.formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });
      requestBody = formData;
      delete headers['content-type'];
    } else if (options.body) {
      requestBody = JSON.stringify(options.body);
    }

    const response = await fetch(getFullUrl(options.path), {
      method: options.method || 'POST',
      headers,
      body: requestBody,
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(
        JSON.stringify({
          error: true,
          message: ERROR_MESSAGE,
          status: response.status,
        }),
      );
    }

    const data = await response.json();
    return json(data);
  } catch (error: any) {
    let errorResponse;
    try {
      errorResponse = JSON.parse(error.message);
    } catch {
      errorResponse = {
        error: true,
        message: ERROR_MESSAGE,
        status: error.status || error.response?.status || 503,
      };
    }
    return json(errorResponse, { status: errorResponse.status });
  }
};
