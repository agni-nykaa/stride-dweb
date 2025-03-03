import React from 'react';
import {
  FEW_LEFT_LIMIT,
  MINI,
  SOLD_OUT,
} from '~/components/PD/SizeAndShade/constants';
import { getQuantityLabel } from '~/components/PD/SizeAndShade/helper';
import MiniLabel from '~/components/PD/SizeAndShade/MiniLabel';
import { Variant } from '~/components/PD/SizeAndShade/types';
import {
  VariantWrapper,
  VariantItem,
  Size,
  Price,
  SoldOutLabel,
  FewLeftLabel,
} from './styled';

interface VariantButtonProps {
  variant: Variant;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const VariantButton: React.FC<VariantButtonProps> = ({
  variant,
  isSelected,
  onClick,
  index,
}) => {
  if (!variant) return null;

  return (
    <VariantWrapper key={index}>
      {variant.isMini && <MiniLabel text={MINI} />}
      <VariantItem
        isSelected={isSelected}
        inStock={variant.inStock}
        onClick={onClick}
      >
        {variant.variantName && (
          <Size
            isSelected={isSelected}
            inStock={variant.inStock}
          >
            {variant.variantName}
          </Size>
        )}
        {variant.offerPrice && (
          <Price
            isSelected={isSelected}
            inStock={variant.inStock}
          >
            ₹{variant.offerPrice}
          </Price>
        )}
        {!variant.inStock && <SoldOutLabel>{SOLD_OUT}</SoldOutLabel>}
        {variant.inStock && variant.quantity < FEW_LEFT_LIMIT && (
          <FewLeftLabel>{getQuantityLabel(variant.quantity)}</FewLeftLabel>
        )}
      </VariantItem>
    </VariantWrapper>
  );
};

export default VariantButton;
