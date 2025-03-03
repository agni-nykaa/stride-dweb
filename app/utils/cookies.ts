import { logger } from './logger';

type Cookie = (string | number | boolean);

const getCookieData = (name: string, decodedCookie: string): Cookie => {
  const decodedCookies = decodedCookie.split(';') || [];

  const [desiredCookie] = decodedCookies.filter((cookie) => {
    if (cookie) {
      const trimmedCookie = cookie.trim();
      return (trimmedCookie.indexOf(name) === 0);
    }
    return false;
  });

  if (desiredCookie) {
    try {
      return decodeURIComponent(desiredCookie.trim().substring(name.length, desiredCookie.length));
    } catch (error) {
      logger.error('Error in decoding cookie', error);
      return '';
    }
  }
  return '';
};

export const getCookie = (cookieName: string): Cookie => {
    const name = `${cookieName}=`;
    return getCookieData(name, document.cookie);
  };

  export const setCookie = (
    cookieName: string,
    cookieValue: string | number | boolean,
    days: number,
    domain?: string,
  ) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    const expires = `expires=${date.toUTCString()}`;
    let domainToSet = '';
    if (domain && domain !== '') {
      domainToSet = `;Domain=${domain}`;
    }
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/${domainToSet}`;
  };

  export const deleteCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
  };
