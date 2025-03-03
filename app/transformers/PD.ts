interface ProductInfo {
  variants?: any;
  defaultPid?: string;
  selectedVariantId?: string;
  [key: string]: any;
}

interface ProductData {
  info?: ProductInfo;
  [key: string]: any;
}

export const transformProductData = (
  data: ProductData,
  skuId?: string | null,
): ProductData => {
  const { info } = data || {};
  const { variants } = info || {};

  if (!variants?.length) {
    return {
      ...data,
      info: {
        ...info,
        selectedVariantId: skuId,
      },
    };
  }

  let selectedVariantId = skuId;
  if (skuId) {
    const selectedVariant =
      variants.find((variant) => variant?.childId === skuId) || variants[0];
    selectedVariantId = selectedVariant?.childId;
  } else {
    const [firstVariant] = variants;
    selectedVariantId = info.defaultPid || firstVariant?.childId;
  }

  return {
    ...data,
    info: {
      ...info,
      selectedVariantId,
    },
  };
};
