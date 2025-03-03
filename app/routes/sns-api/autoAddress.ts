import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { API_STATES } from '~/constants/api';
import { apiHelper } from '~/network/api';
import { FETCH_AUTO_ADDRESS } from '~/network/constants/apiUrls';
import { SOMETHING_WENT_WRONG, TRY_AGAIN } from '~/network/constants/errors';
import { logger } from '~/utils/logger';

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const pincode = url.searchParams.get('pincode');
    const productType = url.searchParams.get('productType');
    const sku = url.searchParams.get('sku');

    const domainValue = process.env.API_HOST;
    if (!pincode || !productType || !sku) {
      return json({
        status: false,
        message: SOMETHING_WENT_WRONG,
      });
    }

    const response = await apiHelper({
      url: `${domainValue}${FETCH_AUTO_ADDRESS}?pincode=${pincode}&productType=${productType}&sku=${sku}`,
    });

    const data = await response.json();
    if (data.status !== 'success') {
      return json({
        status: false,
        message: data.message || TRY_AGAIN,
      });
    }

    return json({
      status: true,
      state: data?.response?.state || '',
    });
  } catch (error: any) {
    logger.error(error, 'Auto address API error');
    return json({
      status: false,
      message: TRY_AGAIN,
    });
  }
};
