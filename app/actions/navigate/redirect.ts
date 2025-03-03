import { redirect } from '@remix-run/node';
import { MODAL_QUERY_PARAM } from '~/constants/PD';

export const redirectToUrl = (url: string) => {
  if (__SERVER__) {
    return redirect(url);
  } else {
    window.location.href = url;
  }
};

export const handleNavigationForModal = (url: string) => {
  const currentUrl = new URL(window.location.href);
  const { key, value } = MODAL_QUERY_PARAM;
  if (currentUrl.searchParams.get(key) === value) {
    window.location.replace(url);
  } else {
    redirectToUrl(url);
  }
};
