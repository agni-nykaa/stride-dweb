export interface webViewCallbackhandlerProps {
  device: number;
  callbackFunctionName: string;
  callbackParams?: any;
}
export const webViewCallbacks = {
  showBrand: 'showBrand',
  showSearch: 'showSearch',
  showCart: 'showCart',
  finish: 'finish',
  navigateToWishlist: 'navigateToWishlist',
  updateCartCount: 'updateCartCount',
  sharePost: 'sharePost',
  doLogin: 'doLogin',
  doMixpanel: 'doMixpanel',
  sendCleverTapTracking: 'sendCleverTapTracking',
  sendAppsflyerTracking: 'sendAppsflyerTracking',
};

export const WEBVIEW_ERROR = 'Error while loading webview';
