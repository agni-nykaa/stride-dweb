import {
  CONFIGURE_TYPE,
  variantTypes,
  VIEW_SHADES,
  VIEW_SIZES,
} from './constants';

/**
 * Returns the variant type based on the provided variantType string.
 *
 * @param {string} [variantType=''] - The variant type string to be evaluated.
 * @returns {string} - The corresponding variant type or an empty string if no match is found.
 *
 */
export const getVariantType = (variantType: string = '') => {
  if (!variantType) return '';
  switch (variantType.toLowerCase()) {
    case CONFIGURE_TYPE.SHADE.toLowerCase():
      return variantTypes.SHADE;

    case CONFIGURE_TYPE.WEIGHT_CONFIGURE.toLowerCase():
    case CONFIGURE_TYPE.SIZE.toLowerCase():
      return variantTypes.SIZE;

    default:
      return '';
  }
};

/**
 * Returns the call-to-action text based on the provided variant type.
 *
 * @param {string} variantType - The type of the variant.
 * @returns {string} The call-to-action text corresponding to the variant type.
 */
export const getCtaText = (variantType: string) => {
  let label = '';
  if (variantType === variantTypes.SHADE) {
    label = VIEW_SHADES;
  } else if (variantType === variantTypes.SIZE) {
    label = VIEW_SIZES;
  }
  return label;
};
