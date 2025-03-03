import { json } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import { apiHelper } from '~/network/api';
import { FETCH_PRODUCT_REVIEW_IMAGES } from '~/network/constants/apiUrls';
import { queryStringFromParams } from '~/utils/api';
import { transformReviewImagesResponse } from '~/components/PD/RatingReviews/transformer';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams);
  const fetchReviewImagesUrl = FETCH_PRODUCT_REVIEW_IMAGES(
    queryParams.productId,
  );
  delete queryParams.productId;
  const queryString = queryStringFromParams(queryParams);
  const baseUrl = process.env.API_HOST;

  const fullUrl = baseUrl + fetchReviewImagesUrl + queryString;
  try {
    const response = await apiHelper({ url: fullUrl, method: 'GET' });
    const data = await response.json();
    const transformedData = transformReviewImagesResponse(data.response);
    return json({
      status: true,
      response: { ...transformedData },
    });
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};
