import { ADD_TO_CART } from '~/network/constants/apiUrls';

import { API_METHODS } from '../../constants/api';
import { handleAction } from '../../utils/apiWrapper';

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json();

  return handleAction(request, {
    path: ADD_TO_CART,
    method: API_METHODS.POST,
    body,
  });
};
