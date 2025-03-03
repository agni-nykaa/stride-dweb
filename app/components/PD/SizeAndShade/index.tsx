import React from 'react';

import { getVariantType, variantTypes } from './helper';
import ShadeComponent from './Shade';
import SizeComponent from './Size';

interface SizeAndShadeProps {
  variantType: string;
  productType: string;
  variants: any[];
  productTitle: string;
}

const SizeAndShade: React.FC<SizeAndShadeProps> = ({
  variantType,
  productType,
  variants,
  productTitle,
}) => {
  const typeOfVariant = getVariantType(productType, variantType);

  if (typeOfVariant === variantTypes.SHADE) {
    return (
      <ShadeComponent
        variants={variants}
        productTitle={productTitle}
      />
    );
  }

  if (typeOfVariant === variantTypes.SIZE) {
    return (
      <SizeComponent
        variants={variants}
        productTitle={productTitle}
      />
    );
  }

  return null;
};

export default SizeAndShade;
