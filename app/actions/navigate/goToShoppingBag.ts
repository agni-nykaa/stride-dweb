import { CHECKOUT_PAGE } from '~/constants/pageUrls';
import { PAGE_SOURCE } from '~/constants/PD';
import { webViewCallbacks } from '~/constants/webview';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { webViewCallbackhandler } from '~/utils/webview';
import { handleNavigationForModal, redirectToUrl } from './redirect';

export const handleBagClickForApp = () => {
  const appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.showCart,
    callbackParams: isAndroid() ? { title: '' } : {},
  };
  webViewCallbackhandler(appParams);
};

export const redirectToShoppingBag = (pageSource?: string) => {
  if (!isWeb()) {
    handleBagClickForApp();
    return;
  }
  const queryParams = [];
  let url = CHECKOUT_PAGE;
  if (pageSource) {
    queryParams.push(`${PAGE_SOURCE}=${pageSource}`);
  }
  url += `?${queryParams.join('&')}`;
  handleNavigationForModal(url);
};
