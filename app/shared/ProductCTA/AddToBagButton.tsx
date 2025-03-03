/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import ShoppingBag from '~/components/Icons/ShoppingBag';
import { ItemAddedToBag, ViewBag } from '~/components/PD/constants';
import { SHOPPING_BAG_URL } from '~/constants/pageUrls';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';

import Button from '../Button';
import { ButtonState } from './constants';
import { getButtonStyles } from './styled';
import { useAuth } from '~/hooks/useAuth';
import { updateCartCountInStorage } from '~/services/auth/helper';
import {
  getAddToCartParams,
  handleUpdateCartCount,
  submitAddToCartAction,
} from './utils';
import { isWeb } from '~/utils/device';
import { MEDIA_TYPE } from '~/constants/mediaType';
import { redirectToShoppingBag } from '~/actions/navigate/goToShoppingBag';

interface AddToBagButtonProps {
  productId: string;
  onStatusChange: (message: string, actionText?: string) => void;
  styleOverride?: React.CSSProperties;
  iconSize?: number;
  view?: string;
}

export function AddToBagButton({
  productId,
  onStatusChange,
  view,
  styleOverride,
  iconSize,
}: AddToBagButtonProps) {
  const { user, setUser } = useAuth() || {};
  const { cartItemsCount } = user || {};
  const [buttonState, setButtonState] = useState<string>(ButtonState.DEFAULT);
  const theme = useTheme();

  const { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      onStatusChange(ItemAddedToBag, ViewBag);
      setButtonState(ButtonState.SUCCESS);
      const counter = cartItemsCount ? cartItemsCount + 1 : 1;
      setUser({ ...user, cartItemsCount: counter });
      updateCartCountInStorage(counter);
      if (!isWeb()) handleUpdateCartCount(counter);
    },
    onError: (error) => {
      setButtonState(ButtonState.DEFAULT);
      onStatusChange(error);
    },
    successHandler: (data) => data.success || false,
  });

  const handleAddToBag = () => {
    if (buttonState === ButtonState.SUCCESS) {
      redirectToShoppingBag();
      return;
    }

    setButtonState(ButtonState.LOADING);
    const params = getAddToCartParams(productId);
    submitAddToCartAction(fetcher, params);
  };

  return (
    <Button
      onClick={handleAddToBag}
      disabled={isLoading}
      customStyles={{ ...getButtonStyles(view, theme), ...styleOverride }}
    >
      {buttonState}
      <ShoppingBag
        height={iconSize}
        width={iconSize}
        fill={view === MEDIA_TYPE.VIDEO ? 'black' : '#fff'}
      />
    </Button>
  );
}
