import React from 'react';
import Modal from '~/shared/Modal';

import ProductCard from './ProductCard';
import { ProductsGrid, ProductSection } from './styled';
import { getPdpUrl } from './utils';

interface RecommendationsModalProps {
  title: string;
  products: Array<any>;
  widgetType: string;
  widgetName: string;
  onClose: () => void;
  isOpen: boolean;
}

const RecommendationsModal = ({
  title,
  products,
  widgetType,
  widgetName,
  onClose,
  isOpen,
}: RecommendationsModalProps) => (
  <Modal
    showHeader={true}
    title={title}
    onBack={onClose}
    isOpen={isOpen}
  >
    <ProductsGrid>
      {products.map((product, index) => (
        <ProductSection key={index}>
          <ProductCard
            key={index}
            product={product}
            getPdpUrl={getPdpUrl}
            position={index + 1}
            widgetType={widgetType}
            widgetName={widgetName}
          />
        </ProductSection>
      ))}
    </ProductsGrid>
  </Modal>
);

export default RecommendationsModal;
