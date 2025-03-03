import React, { useState } from 'react';
import ChevronRight from '~/components/Icons/ChevronRight';
import { useVariantSelection } from '../hooks/useVariantSelection';

import {
  ALL_SHADES,
  FEW_LEFT_LIMIT,
  SELECT_SHADE,
  SOLD_OUT,
} from '../constants';
import { getQuantityLabel } from '../helper';
import VariantSelectionModal from '../selectionModal';
import {
  Container,
  Title,
  TitleContainer,
  AllShades,
  ShadeItem,
  ShadeImage,
  TickOverlay,
  OutOfStockLine,
  SoldOutLabel,
  FewLeftLabel,
} from '../styled';
import { ShadeProps } from '../types';

const ShadeComponent: React.FC<ShadeProps> = ({
  variants,
  onShadeSelect,
  productTitle,
}) => {
  const { selectedIndex, handleSelect } = useVariantSelection(
    variants,
    onShadeSelect,
  );
  const [showModal, setShowModal] = useState(false);
  const hasLabel = variants.some(
    (variant) =>
      !variant.inStock ||
      (variant.inStock && variant.quantity < FEW_LEFT_LIMIT),
  );

  return (
    <>
      <TitleContainer>
        <Title>{variants[selectedIndex]?.variantName || SELECT_SHADE}</Title>
        <AllShades onClick={() => setShowModal(true)}>
          {ALL_SHADES}
          <ChevronRight />
        </AllShades>
      </TitleContainer>
      <Container hasLabel={hasLabel}>
        {variants?.map((variant, index) => (
          <ShadeItem
            key={index}
            isSelected={selectedIndex === index}
            inStock={variant.inStock}
            onClick={() => handleSelect(index, variant.childId)}
          >
            <ShadeImage
              src={variant.shadeImage}
              alt={variant.variantName}
            />
            <TickOverlay
              isSelected={selectedIndex === index && variant.inStock}
            />
            {!variant.inStock && (
              <>
                <OutOfStockLine />
                <SoldOutLabel>{SOLD_OUT}</SoldOutLabel>
              </>
            )}
            {variant.inStock && variant.quantity < FEW_LEFT_LIMIT && (
              <FewLeftLabel>{getQuantityLabel(variant.quantity)}</FewLeftLabel>
            )}
          </ShadeItem>
        ))}
      </Container>

      <VariantSelectionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        variants={variants}
        productTitle={productTitle}
      />
    </>
  );
};

export default ShadeComponent;
