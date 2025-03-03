import { PRODUCT_TYPE } from './constants';

export const getBundleChildSkus = (product: any) => {
  const childSkus = product?.bundleChildSkus || {};
  const transformedChildSkus = Object.keys(childSkus) || [];
  return transformedChildSkus;
};

export const getSkusForDelivery = (product: any, currentSku: string) => {
  const productType = product?.productType || '';
  const variants = product?.variants || [];
  const childSkus = variants?.map((variant: any) => variant.sku) || [];
  const bundleChildSku = getBundleChildSkus(product);
  if (productType === PRODUCT_TYPE.CONFIGURE && childSkus?.length > 0) {
    return childSkus;
  } else if (
    productType === PRODUCT_TYPE.BUNDLE &&
    bundleChildSku?.length > 0
  ) {
    return bundleChildSku;
  }
  if (currentSku) {
    return [currentSku];
  }
  return [];
};
