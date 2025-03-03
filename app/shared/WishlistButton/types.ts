import { WISHLIST_INTENT } from './constants';

export interface WishlistFormData {
  productId: string;
  intent: 'add' | 'remove';
  formKey?: string;
}

export interface WishlistUserDetails {
  wishlist?: number[] | string[];
  formKey?: string;
}

export interface WishlistResponse {
  newResponse?: boolean;
  error?: string;
}

export type WishlistIntent =
  (typeof WISHLIST_INTENT)[keyof typeof WISHLIST_INTENT];
