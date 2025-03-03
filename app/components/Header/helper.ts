import { LP_VALUE, PageTypes, SEARCH_QUERY, SEARCH_URL } from './constants';

export const getSearchURL = (pathname: string) => {
  const lpValue = pathname === SEARCH_URL ? `&lp=${LP_VALUE}` : '';
  const pageType = getPageType(pathname) || 'other';
  const searchLink = `${SEARCH_QUERY}?sourcePage=${pageType}${lpValue}`;
  return searchLink;
};

export const getPageType = (pathName: string) => {
  let currentPageType = '';
  if (pathName === '/') {
    currentPageType = PageTypes.HOME;
  }
  if (
    (pathName && pathName.indexOf('/p/') > -1) ||
    pathName.indexOf('/snsp/') > -1
  ) {
    currentPageType = PageTypes.PRODUCT;
  }
  return currentPageType;
};
