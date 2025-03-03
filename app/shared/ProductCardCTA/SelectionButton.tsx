/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Button from '../Button';
import { getButtonStyles } from '../ProductCTA/styled';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';
import VariantSelectionModal from '~/components/PD/SizeAndShade/selectionModal';
import ChevronDownSmall from '~/components/Icons/ChevronDownSmall';
import { ButtonContent, ButtonText } from './styled';
import { ACTION_ROUTES } from '~/actions';
import { getCtaText } from '~/components/Recommendations/helper';
import { variantTypes } from '~/components/Recommendations/constants';
import { QUERY_PARAM_KEYS } from '~/constants/PD';
import { API_METHODS } from '~/constants/api';
import { ProductVariant } from '~/types/PD';

interface SelectionButtonProps {
  productId: string;
  variantType: string;
  onStatusChange: (message: string, actionText?: string) => void;
  styleOverride?: React.CSSProperties;
  view?: string;
  productVariants?: ProductVariant[];
  productTitle?: string;
}

export function SelectionButton({
  productId,
  variantType,
  onStatusChange,
  view,
  styleOverride,
  productVariants,
  productTitle,
}: SelectionButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [variants, setVariants] = useState([]);
  const [title, setTitle] = useState('');

  const { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      setVariants(data?.info?.variants || []);
      setTitle(data?.info?.name || '');
      setIsModalOpen(true);
    },
    onError: (error) => {
      onStatusChange(error);
    },
    successHandler: (data) => data.status == 'success',
  });

  const handleClick = () => {
    if (!productVariants && !productTitle) {
      fetcher.submit(
        { [QUERY_PARAM_KEYS.PRODUCT_ID]: productId },
        { method: API_METHODS.POST, action: ACTION_ROUTES.productDetails },
      );
    } else {
      setVariants(productVariants || []);
      setTitle(productTitle || '');
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        disabled={isLoading}
        customStyles={{ ...getButtonStyles(view), ...styleOverride }}
      >
        <ButtonContent>
          <ButtonText>{getCtaText(variantType)}</ButtonText>
          <ChevronDownSmall
            color="#FFFFFF"
            width={16}
            height={16}
          />
        </ButtonContent>
      </Button>
      <VariantSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variants={variants}
        productTitle={title}
        isSizeView={variantType === variantTypes.SIZE}
      />
    </>
  );
}
