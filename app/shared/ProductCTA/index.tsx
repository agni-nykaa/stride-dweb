/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { AddToBagButton } from './AddToBagButton';
import { SNACKBAR_DEFAULT_VALUE, TOAST_DEFAULT_VALUE } from './constants';
import Notifications from './Notifications';
import { Container } from './styled';
import { UserDetails } from '../../types';
import { WishlistButton } from '../WishlistButton';
import { redirectToShoppingBag } from '~/actions/navigate/goToShoppingBag';
import { SelectionButton } from '../ProductCardCTA/SelectionButton';
import { getVariantType } from '~/components/Recommendations/helper';
import { ProductVariant } from '~/types/PD';

interface ProductCTAProps {
  productId: string;
  userDetails: UserDetails;
  view: string;
  onlyWishlistButton: boolean;
  showVariantButton?: boolean;
  productVariant?: string;
  variants?: ProductVariant[];
  productTitle?: string;
}

function ProductCTA({
  productId,
  userDetails,
  view,
  onlyWishlistButton,
  showVariantButton = false,
  productVariant,
  variants,
  productTitle,
}: ProductCTAProps) {
  const [toast, setToast] = useState(TOAST_DEFAULT_VALUE);
  const [snackbar, setSnackbar] = useState(SNACKBAR_DEFAULT_VALUE);

  const handleToastMessage = (message: string) => {
    setToast({ show: true, message });
  };

  const handleSnackbarMessage = (message: string, actionText: string = '') => {
    setSnackbar({ show: true, message, actionText });
  };

  const isVariantButtonEligible = showVariantButton && productVariant;
  return (
    <Container view={view}>
      <WishlistButton
        productId={productId}
        userDetails={userDetails}
        onStatusChange={handleToastMessage}
        view={view}
        onlyWishlistButton={onlyWishlistButton}
      />
      {!isVariantButtonEligible && !onlyWishlistButton && (
        <AddToBagButton
          productId={productId}
          onStatusChange={handleSnackbarMessage}
          view={view}
        />
      )}
      {isVariantButtonEligible && (
        <SelectionButton
          productId={productId}
          onStatusChange={handleSnackbarMessage}
          view={view}
          variantType={getVariantType(productVariant)}
          productVariants={variants}
          productTitle={productTitle}
        />
      )}
      <Notifications
        toast={toast}
        snackbar={snackbar}
        onToastDismiss={() => setToast({ show: false, message: '' })}
        onSnackbarDismiss={() =>
          setSnackbar({ show: false, message: '', actionText: '' })
        }
        onSnackbarAction={() => redirectToShoppingBag()}
      />
    </Container>
  );
}

export default ProductCTA;
