import { WRITE_REVIEW_PAGE } from '~/constants/pageUrls';
import { redirectToUrl } from './redirect';

export const redirectToWriteReview = (isLoggedIn: boolean) => {
  redirectToUrl(WRITE_REVIEW_PAGE);
};
