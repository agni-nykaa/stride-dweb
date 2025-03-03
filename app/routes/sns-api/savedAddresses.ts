import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { FETCH_SAVED_ADDRESSES } from '~/network/constants/apiUrls';

export const action: ActionFunction = async ({ request }) => {
  const domainValue = process.env.API_HOST;
  const url = `${domainValue}${FETCH_SAVED_ADDRESSES}`;

  try {
    const formData = new URLSearchParams({
      source: 'react',
    });

    //ToDo: Use API wrapper to handle the request

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'x-csrf-token': request.headers.get('x-csrf-token'),
        Cookie: request.headers.get('cookie'),
        referer: domainValue,
      },
      body: formData,
    });

    const apiResponse = await response.json();
    console.log('API Response:', apiResponse);

    if (apiResponse?.status === 'success' && apiResponse.response?.data) {
      return json({
        status: 'success',
        data: apiResponse?.response?.data,
      });
    }

    return json(
      {
        status: 'error',
        message: apiResponse.message || 'Failed to fetch saved addresses',
      },
      {
        status: 400,
      },
    );
  } catch (error) {
    console.error('API Error:', error);
    return json(
      {
        status: 'error',
        message: 'Error fetching saved addresses',
      },
      {
        status: 500,
      },
    );
  }
};
