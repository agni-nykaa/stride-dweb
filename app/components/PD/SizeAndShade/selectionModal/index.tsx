import React, { useState } from 'react';
import ProductActions from '~/components/PD/ProductActions';
import Modal from '~/shared/Modal';
import TabsContainer from '~/shared/Tabs';

import { CENTER, MODAL, SELECT_A_SHADE, TABS } from '../constants';
import {
  Container,
  StickySection,
  StickyInfoBar,
  SelectedShadeName,
  ShadePrice,
} from './styled';
import ProductPreview from './ProductPreview';
import ShadesView from './VariantsView/shades';
import SizesView from './VariantsView/sizes';
import { extractImageUrls } from '../helper';
import { TabsSection, TabsContent, TopHorizontalLine } from './styled';
import { SelectionModalProps } from '../types';

const VariantSelectionModal: React.FC<SelectionModalProps> = ({
  isOpen,
  onClose,
  variants,
  productTitle,
  isSizeView = false,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const selectedVariant = variants ? variants[selectedVariantIndex] : {};
  const imageUrls = extractImageUrls(selectedVariant);

  const handleVariantSelect = (index: number) => {
    setSelectedVariantIndex(index);
    setSelectedImageIndex(0);
  };

  const handleClose = () => {
    onClose();
  };

  const bestsellers = variants?.filter((variant) => variant.isBestSeller);
  const showTabs = bestsellers?.length > 0;

  return (
    <Modal
      showHeader={true}
      title={SELECT_A_SHADE}
      onBack={handleClose}
      centerTitle={true}
      isOpen={isOpen && !!variants}
    >
      <Container isOutOfStock={!selectedVariant?.inStock}>
        <ProductPreview
          productTitle={productTitle}
          variantsLength={variants?.length}
          imageUrls={imageUrls}
          selectedImageIndex={selectedImageIndex}
          onImageSelect={setSelectedImageIndex}
          variantName={selectedVariant?.variantName}
        />
        <TabsSection>
          {showTabs ? (
            <>
              <TopHorizontalLine />
              <TabsContainer
                tabs={TABS}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant={MODAL}
                alignment={CENTER}
              />
            </>
          ) : null}
          <TabsContent>
            {isSizeView ? (
              <SizesView
                variants={showTabs && activeTab === 1 ? bestsellers : variants}
                onSelect={handleVariantSelect}
                selectedVariantIndex={selectedVariantIndex}
              />
            ) : (
              <ShadesView
                variants={showTabs && activeTab === 1 ? bestsellers : variants}
                onSelect={handleVariantSelect}
                selectedVariantIndex={selectedVariantIndex}
              />
            )}
          </TabsContent>
        </TabsSection>
        <StickySection>
          <StickyInfoBar>
            <SelectedShadeName>
              {selectedVariant?.variantName}
            </SelectedShadeName>
            <ShadePrice>₹{selectedVariant?.offerPrice}</ShadePrice>
          </StickyInfoBar>
          <ProductActions
            product={variants[selectedVariantIndex]}
            view={MODAL}
          />
        </StickySection>
      </Container>
    </Modal>
  );
};

export default VariantSelectionModal;
