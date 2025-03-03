import { ActionFunction } from '@remix-run/node';
import { NOTIFY_ME } from '~/network/constants/apiUrls';

import { API_METHODS } from '../../constants/api';
import { handleAction } from '../../utils/apiWrapper';

interface NotifyMeParams {
  email: string;
  productId: string;
  variantName?: string;
  offerPrice?: number;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const params = {
    isAjax: '1',
    subscription_email: formData.get('email'),
    variantName: formData.get('variantName'),
    offerPrice: formData.get('offerPrice'),
    product: formData.get('productId'),
  };

  return handleAction(request, {
    path: NOTIFY_ME,
    method: API_METHODS.POST,
    formData: params,
  });
};
