export function getWriteReviewPageUrl(
  productId: string,
  childId: string,
): string {
  return `/rating-reviews?ptype=rateAndReview&parentId=${productId}&childId=${childId}&pageSource=PD&trackingSource=pdp_rate_btn`;
}
export function getAllReviewUrl(
  slug: string,
  productId: string,
  childId: string,
): string {
  return `/${slug}/reviews/${productId}?skuId=${childId}`;
}

export function getBrandPageUrl(brandName: string, brandId: string): string {
  return `/brand/${brandName}/c/${brandId}`;
}
