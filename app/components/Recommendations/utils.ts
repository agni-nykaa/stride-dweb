import { RecommendationUrlProps } from './types';

export const getPdpUrl = (
  slug: string,
  position?: number,
  widgetType?: string,
  widgetName?: string,
) => {
  const url = getRecommendationsUrl({
    slug,
    root: `${widgetType}_pd`,
    position,
    name: widgetName,
  });
  return url;
};

export const getRecommendationsUrl = ({
  slug,
  childId,
  root,
  position,
  name,
}: RecommendationUrlProps) => {
  const queryString = `root=${root}${childId ? `&skuId=${childId}` : ''}${
    position ? `&pps=${position}` : ''
  }${name ? `&widgetName=${name}` : ''}`;
  const productUrl = `/${appendQueryStringToUrl(slug, queryString)}`;

  return productUrl;
};

export const appendQueryStringToUrl = (
  url: string,
  queryString: string = '',
) => {
  if (!url) {
    throw new Error('"url" can not be empty');
  }

  const queryStringExists = url.indexOf('?') > -1;
  const modifiedUrl = `${url}${queryStringExists ? '&' : '?'}${queryString}`;

  return modifiedUrl;
};
