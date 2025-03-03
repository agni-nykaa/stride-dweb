/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import HeartFilled from '~/components/Icons/HeartFilled';
import HeartPlus from '~/components/Icons/HeartPlus';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';
import { UserDetails } from '~/types';
import { useAuth, useIsLoggedIn } from '~/hooks/useAuth';

import { fullWidth, WishlistText } from './styled';
import {
  getWishlistFormData,
  getWishlistMessage,
  submitWishlistAction,
} from './utils';
import { ADD_TO_WISHLIST, ADDED_TO_WISHLIST } from './constants';
import { WishlistButtonStyled } from '../ProductCTA/styled';
import { redirectAuthPage } from '~/actions/navigate/goToAuthPage';

interface WishlistButtonProps {
  productId: string;
  userDetails: UserDetails;
  onStatusChange: (message: string) => void;
  styleOverride?: React.CSSProperties;
  view?: string;
  onlyWishlistButton?: boolean;
}

export function WishlistButton({
  productId,
  userDetails,
  onStatusChange,
  styleOverride = {},
  view,
  onlyWishlistButton,
}: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const isLoggedIn = useIsLoggedIn();
  const { user, setUser } = useAuth();
  const { wishlist } = user || {};

  const { fetcher, isLoading } = useFetcherHandler({
    onSuccess: (data) => {
      let updatedWishlistdata = [...wishlist];
      if (isInWishlist) {
        updatedWishlistdata = wishlist.filter((id) => id !== productId);
      } else {
        updatedWishlistdata.push(productId);
      }
      setIsInWishlist(!isInWishlist);
      setUser({ ...user, wishlist: updatedWishlistdata });
      const message = getWishlistMessage(isInWishlist);
      onStatusChange(message);
    },
    onError: (error) => {
      onStatusChange(error);
    },
    successHandler: (data) => !data.error || false,
  });

  useEffect(() => {
    if (userDetails?.wishlist && productId) {
      setIsInWishlist(userDetails?.wishlist?.includes(productId));
    }
  }, [userDetails?.wishlist, productId]);

  const handleClick = () => {
    if (!isLoggedIn) {
      redirectAuthPage();
      return;
    }
    const apiData = getWishlistFormData(productId, isInWishlist, userDetails);
    submitWishlistAction(fetcher, apiData);
  };
  if (onlyWishlistButton) {
    styleOverride = { ...styleOverride, ...fullWidth };
  }

  return (
    <WishlistButtonStyled
      view={view}
      style={styleOverride}
      onClick={handleClick}
      disabled={isLoading}
    >
      {onlyWishlistButton && (
        <WishlistText>
          {isInWishlist ? ADDED_TO_WISHLIST : ADD_TO_WISHLIST}
        </WishlistText>
      )}
      {isInWishlist ? <HeartFilled view={view} /> : <HeartPlus view={view} />}
    </WishlistButtonStyled>
  );
}
