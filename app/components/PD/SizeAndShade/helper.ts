import { AvailabilityStatus, CONFIGURABLE, SIMPLE, LOW_STOCK_THRESHOLD, LEFT, FEW_LEFT } from './constants';
import { AvailabilityResult } from './types';

interface MediaItem {
  mediaType: string;
  url: string;
  id: string;
  thumbnailUrl: string;
}

interface Variant {
  media: MediaItem[];
  [key: string]: any;
}

export enum variantTypes {
  SIZE = 'SIZE',
  SHADE = 'SHADE',
  SIMPLE = 'SIMPLE',
  BUNDLE = 'BUNDLE',
}

export const getVariantTypeForConfig = (productType: string): string => {
  switch (productType) {
    case 'shade':
      return variantTypes.SHADE;

    case 'size':
    case 'weight_configure':
      return variantTypes.SIZE;

    default:
      return '';
  }
};

export const getVariantType = (productType: string, variantType: string) =>
  productType === CONFIGURABLE ? getVariantTypeForConfig(variantType) : null;

export const extractImageUrls = (variant: Variant): string[] => {
  if (!variant || !variant.media || !Array.isArray(variant.media)) {
    return [];
  }
  return variant.media.filter(item => item.mediaType === 'image')?.map(item => item.url);
};

/**
 * Gets the availability information for a given variant.
 *
 * @param {Object} variant - The variant object.
 * @param {boolean} variant.inStock - Indicates if the variant is in stock.
 * @param {number} [variant.quantity] - The quantity of the variant.
 * @param {number} fewLeftLimit - The limit below which the status is considered as "few left".
 * @returns {AvailabilityResult} The availability status and quantity if applicable.
 */
export const getAvailabilityInfo = (
  variant: { inStock: boolean; quantity?: number },
  fewLeftLimit: number,
): AvailabilityResult => {
  if (!variant.inStock) {
    return { status: AvailabilityStatus.SOLD_OUT };
  }

  if (variant.quantity && variant.quantity < fewLeftLimit) {
    return {
      status: AvailabilityStatus.FEW_LEFT,
      quantity: variant.quantity,
    };
  }

  return { status: AvailabilityStatus.AVAILABLE };
};

/**
 * Gets the quantity label based on the given quantity.
 *
 * @param {number} quantity - The quantity of the item.
 * @returns {string} The quantity label. If the quantity is less than the low stock threshold,
 * it returns a string with the quantity and "LEFT". Otherwise, it returns a string with "FEW_LEFT".
 */
export const getQuantityLabel = (quantity: number) => quantity < LOW_STOCK_THRESHOLD ? `${quantity} ${LEFT}` : FEW_LEFT;
