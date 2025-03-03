import { json } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import { apiHelper } from '~/network/api';
import { customHeaders } from '~/network/constants';
import { FETCH_WISHLIST_IDS } from '~/network/constants/apiUrls';

export const action: LoaderFunction = async ({ request }) => {
  const baseUrl = process.env.API_HOST;
  const fullUrl = baseUrl + FETCH_WISHLIST_IDS;

  try {
    const body = await request.json();
    const { source, formKey } = body;
    const formData = new FormData();
    formData.append('source', source);

    const headers = {
      [customHeaders.CSRF_TOKEN]: formKey || '',
      Cookie: request.headers.get('cookie'),
      referer: baseUrl,
    };
    const response = await apiHelper({
      url: fullUrl,
      method: 'POST',
      body: formData,
      headers,
    });
    const data = await response.json();
    return json({
      status: true,
      response: {
        wishlist: data?.response?.wishlist_products || [],
      },
    });
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};
