import { ShouldRevalidateFunction, useLoaderData } from '@remix-run/react';
import { ThemeProvider } from '@emotion/react';
import { json } from '@remix-run/node';
import { FETCH_REVIEWS_DATA } from '~/network/constants/apiUrls';
import { fetchData } from '~/utils/api';
import { fetchConfig } from '~/utils/config';
import { logger, loggerInitialized } from '~/utils/logger';
import ReviewPage from '~/components/ReviewPage';
import ThemeFactory from '~/factories/ThemeFactory';
import { ERROR_FETCHING_REVIEW_DATA } from '~/constants/Review/constants';

export const loader = async ({ params, request }) => {
  await loggerInitialized;
  try {
    const pageNo = '1';
    const { productId } = params;
    const fetchDetailsUrl = FETCH_REVIEWS_DATA({ productId, pageNo });
    const [data, config] = await Promise.all([
      fetchData(fetchDetailsUrl),
      fetchConfig(),
    ]);
    return json({
      ...data,
      config,
    });
  } catch (error) {
    if (logger && logger.error) {
      logger.error(ERROR_FETCHING_REVIEW_DATA, error);
    }
    // need to add fallback redirection url
    throw error;
  }
};

export const shouldRevalidate: ShouldRevalidateFunction = () => false;

export default function Review() {
  const reviewData = useLoaderData();
  const { info: reviewInfo, templateData } = reviewData || {};
  const { theme: customTheme } = templateData || {};
  const theme = ThemeFactory.extendTheme(customTheme);
  return (
    <ThemeProvider theme={theme}>
      <ReviewPage reviewData={reviewInfo} />
    </ThemeProvider>
  );
}
