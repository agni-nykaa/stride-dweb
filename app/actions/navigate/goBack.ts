import { PAGE_SOURCE, QUERY_PARAM_KEYS } from '~/constants/PD';
import { webViewCallbacks } from '~/constants/webview';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { webViewCallbackhandler } from '~/utils/webview';

export const handleBackButtonClickForApp = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get(PAGE_SOURCE) === QUERY_PARAM_KEYS.MY_ORDERS) {
      window.history.back();
      return;
    }
  }
  const appParams = {
    device: getDevice(),
    callbackFunctionName: webViewCallbacks.finish,
    callbackParams: isAndroid() ? null : {},
  };
  webViewCallbackhandler(appParams);
};

export const handleBackButtonClick = () => {
  if (!isWeb()) {
    handleBackButtonClickForApp();
    return;
  }
  if (document.referrer) {
    window.history.back();
  }
};
