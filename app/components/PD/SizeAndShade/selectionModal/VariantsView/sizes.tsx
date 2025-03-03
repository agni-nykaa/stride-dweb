import React from 'react';
import { ShadeVariantsProps } from '~/components/PD/SizeAndShade/types';
import { Container } from '../../styled';
import VariantButton from '~/shared/SizeVariantButtons';

const SizesView: React.FC<ShadeVariantsProps> = ({
  variants,
  onSelect,
  selectedVariantIndex,
}) => {
  if (!variants || !variants.length) return null;

  return (
    <Container hasLabel={true}>
      {variants.map((variant, index) => (
        <VariantButton
          key={index}
          variant={variant}
          isSelected={selectedVariantIndex === index}
          onClick={() => onSelect(index)}
          index={index}
        />
      ))}
    </Container>
  );
};

export default SizesView;
