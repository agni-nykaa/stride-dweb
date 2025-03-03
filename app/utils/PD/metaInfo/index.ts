import { ProductMetaParams } from './types';
import {
  PRODUCT_NAME_REGEX,
  NO_INDEX_NO_FOLLOW,
  DEFAULT_CURRENCY,
  SITE_NAME,
  BASE_URL,
  SOCIAL_MEDIA_CARD_TYPE,
  SOCIAL_MEDIA_TYPE,
} from './constants';

const replacePlaceholders = (text: string, productName: string): string =>
  text.replace(PRODUCT_NAME_REGEX, productName);

const getSocialTags = (
  product: ProductMetaParams['product'],
  description: string,
) => ({
  'og:title': product.name,
  'twitter:title': product.name,
  'og:image:alt': product.imageUrl && product.name,
  'og:description': description,
  'twitter:description': description,
  'og:image': product.imageUrl,
  'twitter:image': product.imageUrl,
  'og:type': SOCIAL_MEDIA_TYPE,
  'twitter:card': SOCIAL_MEDIA_CARD_TYPE,
});

const getPriceInfo = (product: ProductMetaParams['product']) => {
  const isValidProduct = typeof product === 'object' && !Array.isArray(product);
  return {
    'product:price:amount': isValidProduct ? product.offerPrice : '',
    'product:price:currency': DEFAULT_CURRENCY,
  };
};

export const getProductMeta = ({
  product,
  config,
  location,
}: ProductMetaParams) => {
  const title = config?.configs?.meta?.productPage?.title || '';
  const baseDescription = config?.configs?.meta?.productPage?.description || '';
  const productName = product?.name || '';

  const processedDescription = replacePlaceholders(
    baseDescription,
    productName,
  );

  return {
    title: replacePlaceholders(title, productName),
    description: processedDescription,
    keywords: product?.metaKeywords,
    robots: product?.isSearchable ? NO_INDEX_NO_FOLLOW : '',
    'og:site_name': SITE_NAME,
    'og:url': `${BASE_URL}${location.pathname}`,
    ...getSocialTags(product, processedDescription),
    ...getPriceInfo(product),
  };
};
