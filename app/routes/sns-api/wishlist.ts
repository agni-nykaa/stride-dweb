import { json, type ActionFunction } from '@remix-run/node';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '~/network/constants/apiUrls';

import { API_METHODS } from '../../constants/api';
import { handleAction } from '../../utils/apiWrapper';

export const action: ActionFunction = async ({ request }) => {
  try {
    const body = await request.json();
    const path =
      body.intent === 'add'
        ? ADD_TO_WISHLIST(body.product, body.formKey)
        : REMOVE_FROM_WISHLIST(body.product);

    return handleAction(request, {
      path,
      method: API_METHODS.POST,
      body: { product: body.product },
    });
  } catch (error) {
    console.error('Error in wishlist:', error);
    return json({ error: 'Failed to update wishlist' }, { status: 400 });
  }
};
