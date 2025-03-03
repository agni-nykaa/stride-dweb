import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { apiHelper } from '~/network/api';
import { FETCH_ADDRESS_DETAILS } from '~/network/constants/apiUrls';

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const pincode = formData.get('pincode');
    const skusData = formData.get('skus');
    const type = formData.get('type');

    // Validate required fields
    if (!pincode || !skusData || !type) {
      return json(
        {
          status: 'error',
          message: 'Missing required fields',
        },
        { status: 400 },
      );
    }

    // Parse skus with error handling
    let skus;
    try {
      skus = JSON.parse(skusData as string);
    } catch (e) {
      return json(
        {
          status: 'error',
          message: 'Invalid skus data format',
        },
        { status: 400 },
      );
    }

    const domainValue = process.env.API_HOST;
    if (!domainValue) {
      return json(
        {
          status: 'error',
          message: 'API host not configured',
        },
        { status: 500 },
      );
    }

    const url = `${domainValue}${FETCH_ADDRESS_DETAILS}`;
    const response = await apiHelper({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        skus,
        pincode,
        type,
        source: 'pdp',
        domain: 'nykaa',
      }),
    });

    let apiResponse;
    try {
      apiResponse = await response.json();
    } catch (parseError) {
      return json(
        {
          status: 'error',
          message: 'Something went wrong',
        },
        { status: 500 },
      );
    }

    if (!response.ok) {
      return json(
        {
          status: 'error',
          message: apiResponse.message || 'API request failed',
        },
        { status: response.status },
      );
    }

    if (apiResponse.success === true && apiResponse.data) {
      return json({
        status: 'success',
        data: apiResponse.data,
      });
    }

    return json(
      {
        status: 'error',
        message: 'Failed to fetch address details',
      },
      { status: 400 },
    );
  } catch (error) {
    console.error('Address details error:', error);
    return json(
      {
        status: 'error',
        message: 'Error fetching address details',
      },
      { status: 500 },
    );
  }
};
