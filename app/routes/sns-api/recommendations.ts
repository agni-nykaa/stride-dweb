import { json } from '@remix-run/node';
import { ActionFunction } from '@remix-run/node';
import { apiHelper } from '~/network/api';
import { FETCH_RECO_WIDGETS } from '~/network/constants/apiUrls';
import { queryStringFromParams } from '~/utils/api';
import { ApiRecommendationResponse } from '~/types/recommendations';
import { transformRecommendations } from '~/transformers/recommendation';

export const action: ActionFunction = async ({ request }) => {
  const formData = (await request.formData()) || {};
  const data = Object.fromEntries(formData);
  const queryString = data && queryStringFromParams(data);
  const baseUrl = process.env.API_HOST;
  const fullUrl = baseUrl + FETCH_RECO_WIDGETS + queryString;

  try {
    const response = await apiHelper({ url: fullUrl, method: 'GET' });
    const responseData: ApiRecommendationResponse = await response?.json();
    const transformedData =
      responseData &&
      transformRecommendations(responseData?.response?.relatedProducts);
    return json({
      status: true,
      response: { ...responseData?.response, relatedProducts: transformedData },
    });
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};
