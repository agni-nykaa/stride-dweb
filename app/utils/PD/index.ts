import { isValidArrayLength } from '../validations';
import { QUERY_PARAM_KEYS } from '~/constants/PD';
import { ProductData, ProductVariant, UrlHandlerParams } from '~/types/PD';

export const appendQueryStringToUrl = (
  pathname: string,
  queryString: string,
): string => {
  if (!queryString) return pathname;
  const hasExistingParams = pathname.includes('?');
  const separator = hasExistingParams ? '&' : '?';
  return `${pathname}${separator}${queryString}`;
};

export const handleSkuIdInUrl = ({
  currentSku,
  parentId,
  pathname,
  search,
}: UrlHandlerParams): string | null => {
  const urlParams = new URLSearchParams(search);
  const { childId } = currentSku || {};
  const skuId = urlParams.get(QUERY_PARAM_KEYS.SKU);
  let shouldUpdateUrl = false;

  if (skuId) {
    if (skuId !== childId) {
      urlParams.set(QUERY_PARAM_KEYS.SKU, childId);
      shouldUpdateUrl = true;
    }
  } else if (parentId !== childId) {
    urlParams.append(QUERY_PARAM_KEYS.SKU, childId);
    shouldUpdateUrl = true;
  }

  if (shouldUpdateUrl) {
    const updatedQueryString = urlParams.toString();
    return appendQueryStringToUrl(pathname, updatedQueryString);
  }

  return null;
};

export const getSelectedProductData = (
  productData: ProductData,
  skuId: string,
): ProductVariant | null => {
  const { selectedVariantId, variants } = productData || {};
  if (!productData) {
    return null;
  }
  const variantId = skuId || selectedVariantId;

  if (variantId && variants && variants?.length > 0) {
    const selectedVariantIndex = variants.findIndex(
      (variant: ProductVariant) => variant?.childId === variantId,
    );
    return variants[Math.max(0, selectedVariantIndex)];
  }
  return {
    childId: productData?.id || '',
    ...productData,
  };
};

const getMediaFromSource = (source?: { carousel?: string[], media?: string[] }): string[] => {
  if (!source) return [];

  const { carousel, media } = source || {};
  if (isValidArrayLength(carousel)) return carousel;
  return isValidArrayLength(media) ? media : [];
};

const getVariantMedia = (
  variants?: ProductVariant[],
  selectedVariantId?: string,
): string[] => {
  if (!isValidArrayLength(variants)) return [];

  const selectedVariant = selectedVariantId
    ? variants?.find((variant) => variant?.childId == selectedVariantId)
    : null;
  return getMediaFromSource(selectedVariant);
};

export const getSelectedMedia = (
  product?: ProductData,
  currentSkuData?: ProductVariant,
): string[] => {
  if (!product) return [];

  const skuMedia = getMediaFromSource(currentSkuData);
  if (skuMedia?.length > 0) return skuMedia;

  const { selectedVariantId, variants } = product || {};
  const variantMedia = getVariantMedia(variants, selectedVariantId);
  if (variantMedia?.length > 0) return variantMedia;
  return getMediaFromSource(product);
};
