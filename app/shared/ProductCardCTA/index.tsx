/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { Container, wishlistButtonStyle, addToBagButtonStyle } from './styled';
import { SHOPPING_BAG_URL } from '../../constants/pageUrls';
import { UserDetails } from '../../types';
import { AddToBagButton } from '../ProductCTA/AddToBagButton';
import {
  SNACKBAR_DEFAULT_VALUE,
  TOAST_DEFAULT_VALUE,
} from '../ProductCTA/constants';
import Notifications from '../ProductCTA/Notifications';
import { useTheme } from '@emotion/react';
import { WishlistButton } from '../WishlistButton';
import { SelectionButton } from './SelectionButton';
import { variantTypes } from '~/components/Recommendations/constants';
import { redirectToShoppingBag } from '~/actions/navigate/goToShoppingBag';

interface ActionsProps {
  productId: string;
  userDetails: UserDetails;
  variantType?: string;
}

function ProductCardCTA({ productId, userDetails, variantType }: ActionsProps) {
  const [toast, setToast] = useState(TOAST_DEFAULT_VALUE);
  const [snackbar, setSnackbar] = useState(SNACKBAR_DEFAULT_VALUE);

  const handleToastMessage = (message: string) => {
    setToast({ show: true, message });
  };

  const handleSnackbarMessage = (message: string, actionText: string = '') => {
    setSnackbar({ show: true, message, actionText });
  };

  const isSelectionButton =
    variantType === variantTypes.SIZE || variantType === variantTypes.SHADE;

  const theme = useTheme();
  return (
    <Container>
      <WishlistButton
        productId={productId}
        userDetails={userDetails}
        onStatusChange={handleToastMessage}
        styleOverride={wishlistButtonStyle}
      />
      {isSelectionButton ? (
        <SelectionButton
          styleOverride={addToBagButtonStyle(theme)}
          productId={productId}
          onStatusChange={handleSnackbarMessage}
          variantType={variantType}
        />
      ) : (
        <AddToBagButton
          styleOverride={addToBagButtonStyle(theme)}
          iconSize={16}
          productId={productId}
          onStatusChange={handleSnackbarMessage}
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

export default ProductCardCTA;
