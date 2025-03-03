export const SHOPPING_BAG_URL = '/shoppingBag';
export const REVIEW_IMAGES_PAGE =
  '/{slug}/review-images/{id}?ptype=review-images&productId={childId}';
export const HOME = '/?root=logo';
export const AUTH_PAGE = '/auth?ptype=auth';
export const CURRENT_URL_KEY = 'CURRENT_URL';
export const WISHLIST = '/wishlist/';
export const CHECKOUT_PAGE = '/shoppingBag';
export const WRITE_REVIEW_PAGE = '/snsr/write-review';

export const getStandardReviewUrl = (
  slug: string,
  productId: string,
  childId: string,
): string => `/${slug}/reviews/${productId}?skuId=${childId}`;
