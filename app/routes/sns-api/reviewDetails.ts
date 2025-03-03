import { json, LoaderFunction } from '@remix-run/node';
import { apiHelper } from '~/network/api';
import { RESPONSE_CODES } from '~/network/constants';
import { FETCH_REVIEWS_DATA } from '~/network/constants/apiUrls';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get('productId') || '';
  const pageNo = url.searchParams.get('pageNo') || '1';
  const baseUrl = process.env.API_HOST;
  const fetchDetailsUrl = FETCH_REVIEWS_DATA({
    productId,
    pageNo,
  });
  const fullUrl = baseUrl + fetchDetailsUrl;

  try {
    const response = await apiHelper({ url: fullUrl });
    const responseData = await response?.json();
    return json({
      status: true,
      data: responseData?.info?.reviews || [],
    });
  } catch (error) {
    return json(
      { error: error.message },
      { status: RESPONSE_CODES.BAD_REQUEST },
    );
  }
};
