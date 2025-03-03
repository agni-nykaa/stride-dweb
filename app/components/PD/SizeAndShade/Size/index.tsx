import React, { useState } from 'react';
import { useVariantSelection } from '../hooks/useVariantSelection';
import VariantButton from '~/shared/SizeVariantButtons';

import { SELECT_SIZE, FEW_LEFT_LIMIT } from '../constants';
import { Container, Title, TitleContainer, AllShades } from '../styled';
import { Variant } from '../types';

interface SizeProps {
  variants: Variant[];
  onSizeSelect?: (index: number) => void;
  productTitle?: string;
}

const SizeComponent: React.FC<SizeProps> = ({
  variants,
  onSizeSelect,
  productTitle,
}) => {
  const { selectedIndex, handleSelect } = useVariantSelection(
    variants,
    onSizeSelect,
  );
  const hasLabel = variants?.some(
    (variant) =>
      !variant.inStock ||
      (variant.inStock && variant.quantity < FEW_LEFT_LIMIT),
  );

  return (
    <>
      <TitleContainer>
        <Title>{SELECT_SIZE}</Title>
      </TitleContainer>
      <Container hasLabel={hasLabel}>
        {variants?.map((variant, index) => (
          <VariantButton
            key={index}
            variant={variant}
            isSelected={selectedIndex === index}
            onClick={() => handleSelect(index, variant?.childId)}
            index={index}
          />
        ))}
      </Container>
    </>
  );
};

export default SizeComponent;
