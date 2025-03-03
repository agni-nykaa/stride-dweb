import { json } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import { API_METHODS } from '~/constants/api';
import { apiHelper } from '~/network/api';
import { REACT_CONFIG } from '~/network/constants/apiUrls';
import { filterCookies } from '~/utils/apiWrapper';

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const baseUrl = process.env.API_HOST;
    const requestCookies = request.headers.get('cookie') || '';

    const whitelistCookies = filterCookies(requestCookies);

    const response = await apiHelper({
      url: `${baseUrl}/` + `${REACT_CONFIG}`,
      method: API_METHODS.POST,
      headers: { cookie: whitelistCookies },
    });
    const res = await response.json();
    const headers: { [key: string]: string } = {};
    response.headers.forEach((value, key) => {
      if (key !== 'content-length') {
        headers[key] = value;
      }
    });
    return json(res, { headers });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
};
