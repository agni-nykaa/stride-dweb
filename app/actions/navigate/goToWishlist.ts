import { WISHLIST } from '~/constants/pageUrls';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { webViewCallbacks } from '~/constants/webview';
import { webViewCallbackhandler } from '~/utils/webview';
import { redirectToAuthPageForApp } from './goToAuthPage';
import { redirectToUrl } from './redirect';

export const redirectToWishlist = (isLoggedIn: boolean) => {
  if (!isWeb()) {
    handleWishlistClickForApp(isLoggedIn);
    return;
  }
  redirectToUrl(WISHLIST);
};

export const handleWishlistClickForApp = (isLoggedIn: boolean) => {
  if (!isLoggedIn) {
    const locationPathName = `${window.location.pathname}${window.location.search}`;
    redirectToAuthPageForApp(locationPathName);
  }
  const appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.navigateToWishlist,
    callbackParams: isAndroid() ? null : {},
  };
  webViewCallbackhandler(appParams);
};
