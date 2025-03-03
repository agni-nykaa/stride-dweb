import { SNSP_SLUG, PD_SLUG } from '~/constants/PD';
import { redirectToUrl } from './redirect';

const getStandardPDUrl = (url: string) => url.replace(SNSP_SLUG, PD_SLUG);

export const redirectToStandardPD = (url: string) =>
  redirectToUrl(getStandardPDUrl(url));
