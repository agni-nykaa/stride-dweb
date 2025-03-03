import { CartParams } from './types';
import { ACTION_ROUTES } from '../../actions';
import { API_METHODS } from '../../constants/api';
import { DEVICE_TYPE, PLATFORM, STORES } from '../../constants/platform';
import { SOURCES } from '../../constants/sources';
import { getDevice } from '~/utils/device';
import { webViewCallbackhandler } from '~/utils/webview';
import { webViewCallbacks } from '~/constants/webview';

export const getAddToCartParams = (productId: string): CartParams => ({
  deviceType: DEVICE_TYPE.MOBILE,
  domain: PLATFORM.beauty,
  items: [{ productId, quantity: 1 }],
  pro: false,
  trackingParam: {
    site_navigation: '',
    site_sub_navigation: '',
    nykaa_store: STORES.nykaa,
  },
  originSource: SOURCES.PD,
  pincode: '',
});

export const submitAddToCartAction = (fetcher: any, params: any) => {
  fetcher.submit(
    { ...params },
    {
      method: API_METHODS.POST,
      action: ACTION_ROUTES.addToCart,
      encType: 'application/json',
      preventScrollReset: true,
    },
  );
};

export const handleUpdateCartCount = (count: number) => {
  const device = getDevice();
  const appParams = {
    device,
    callbackFunctionName: webViewCallbacks.updateCartCount,
    callbackParams: { count: count },
  };
  webViewCallbackhandler(appParams);
};
