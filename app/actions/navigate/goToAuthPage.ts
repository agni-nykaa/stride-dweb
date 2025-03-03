import { AUTH_PAGE, CURRENT_URL_KEY } from '~/constants/pageUrls';
import { webViewCallbacks } from '~/constants/webview';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { logger } from '~/utils/logger';
import { localStorageService } from '~/utils/storage/localStorage';
import { webViewCallbackhandler } from '~/utils/webview';
import { redirectToUrl } from './redirect';

export const redirectAuthPage = () => {
  const locationPathName = `${window.location.pathname}${window.location.search}`;
  if (!isWeb()) {
    redirectToAuthPageForApp(locationPathName);
    return;
  }
  try {
    const CURRENT_URL = CURRENT_URL_KEY;
    localStorageService.setItem(CURRENT_URL, locationPathName);
  } catch (err) {
    logger.info(err?.toString() || '', 'Error: authCurrentUrlInStorage');
  }
  redirectToUrl(AUTH_PAGE);
};

export const redirectToAuthPageForApp = (locationPathName: string) => {
  const appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.doLogin,
    callbackParams: isAndroid()
      ? { nextUrlToLoadIfLoginSuccess: locationPathName }
      : { redirectionURL: locationPathName },
  };
  webViewCallbackhandler(appParams);
};
