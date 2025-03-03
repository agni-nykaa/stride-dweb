import { logger, loggerInitialized } from './logger';

const isBrowser = typeof window !== 'undefined';
const baseURL = !isBrowser
  ? process.env.API_HOST || 'https://www.nykaa.com/'
  : 'https://www.nykaa.com/'; // Use the API base URL from the .env file

export const fetchData = async (endpoint: string) => {
  await loggerInitialized; // Ensure logger is initialized
  try {
    const url = `${baseURL}${endpoint}`;

    logger.info(`Fetching data from: ${url}`);
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    if (logger && logger.error) {
      logger.error('Error fetching data:', error);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
};
export const queryStringFromParams = (params: any) => {
  if (!params) {
    return '';
  }

  if (typeof params !== 'object' || Array.isArray(params)) {
    throw new Error(`Expected "params" to be an "object" got ${params}`);
  }

  let queryString = '';

  const keys = Object.keys(params);

  if (!(keys.length > 0)) {
    return queryString;
  }

  queryString = '?';
  const queryStringPairs: string[] = [];
  keys.sort().forEach((key: string) => {
    queryStringPairs.push(`${key}=${encodeURIComponent(params[key])}`);
  });

  return `${queryString}${queryStringPairs.join('&')}`;
};

export const mandatoryRequestParams = {
  source: 'react',
};
