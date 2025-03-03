import React from 'react';
import {
  Grid,
  Item,
  Image,
  Name,
  ImageWrapper,
  Details,
  QuantityText,
  SoldOutText,
} from './styled';
import {
  TickOverlay,
  OutOfStockLine,
} from '~/components/PD/SizeAndShade/styled';
import {
  ShadeVariantsProps,
  Variant,
} from '~/components/PD/SizeAndShade/types';
import {
  AvailabilityStatus,
  FEW_LEFT_LIMIT,
  LEFT,
  SOLD_OUT,
} from '~/components/PD/SizeAndShade/constants';
import { getAvailabilityInfo } from '~/components/PD/SizeAndShade/helper';

const ShadesView: React.FC<ShadeVariantsProps> = ({
  variants,
  onSelect,
  selectedVariantIndex,
}) => {
  if (!variants || !variants.length) return null;

  const renderAvailabilityStatus = (variant: Variant) => {
    if (!variant) return null;

    const { status, quantity } = getAvailabilityInfo(variant, FEW_LEFT_LIMIT);

    switch (status) {
      case AvailabilityStatus.SOLD_OUT:
        return <SoldOutText>{SOLD_OUT}</SoldOutText>;
      case AvailabilityStatus.FEW_LEFT:
        return (
          <QuantityText>
            {quantity} {LEFT}
          </QuantityText>
        );
      default:
        return null;
    }
  };

  return (
    <Grid>
      {variants.map((variant, index) => (
        <Item
          key={index}
          onClick={() => onSelect?.(index)}
        >
          <ImageWrapper isSelected={selectedVariantIndex === index}>
            <Image
              src={variant.shadeImage}
              alt={variant.variantName}
            />
            <TickOverlay
              isSelected={selectedVariantIndex === index && variant.inStock}
            />
            {!variant.inStock && <OutOfStockLine />}
          </ImageWrapper>
          <Details>
            <Name>{variant.variantName}</Name>
            {renderAvailabilityStatus(variant)}
          </Details>
        </Item>
      ))}
    </Grid>
  );
};

export default ShadesView;
