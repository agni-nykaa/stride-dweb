import { json } from '@remix-run/node';
import { ActionFunction } from '@remix-run/node';
import { QUERY_PARAM_KEYS } from '~/constants/PD';
import { FETCH_PRODUCT_DETAILS } from '~/network/constants/apiUrls';
import { transformProductData } from '~/transformers/PD';
import { fetchData } from '~/utils/api';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const productId =
    formData?.get(QUERY_PARAM_KEYS.PRODUCT_ID)?.toString() || '';
  const skuId = formData?.get(QUERY_PARAM_KEYS.SKU)?.toString();

  if (!productId) {
    return json({ error: 'Product ID is required' }, { status: 400 });
  }

  try {
    const data = await fetchData(FETCH_PRODUCT_DETAILS(productId));
    const transformedData = transformProductData(data, skuId);
    return json(transformedData);
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};
