import {
  PRODUCT_ADD_IN_WISHLIST,
  PRODUCT_REMOVED_IN_WISHLIST,
  WISHLIST_INTENT,
} from './constants';
import type { WishlistUserDetails } from './types';
import { ACTION_ROUTES } from '../../actions';
import { API_METHODS } from '../../constants/api';

export const getWishlistFormData = (
  productId: string,
  isInWishlist: boolean,
  userDetails?: WishlistUserDetails,
): any => {
  const apiData = {};
  if (apiData) apiData['product'] = productId;
  if (userDetails?.formKey) apiData['formKey'] = userDetails.formKey;
  apiData['intent'] = isInWishlist
    ? WISHLIST_INTENT.REMOVE
    : WISHLIST_INTENT.ADD;

  return apiData;
};

export const submitWishlistAction = (fetcher: any, apiData: any) => {
  fetcher.submit(apiData, {
    method: API_METHODS.POST,
    action: ACTION_ROUTES.wishlist,
    encType: 'application/json',
    preventScrollReset: true,
  });
};

export const getWishlistMessage = (isInWishlist: boolean): string =>
  isInWishlist ? PRODUCT_REMOVED_IN_WISHLIST : PRODUCT_ADD_IN_WISHLIST;
