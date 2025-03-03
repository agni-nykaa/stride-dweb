import { getStandardReviewUrl } from '~/constants/pageUrls';
import { redirectToUrl } from './redirect';

export const goToStandardReview = (
  slug: string,
  productId: string,
  childId: string,
) => redirectToUrl(getStandardReviewUrl(slug, productId, childId));
