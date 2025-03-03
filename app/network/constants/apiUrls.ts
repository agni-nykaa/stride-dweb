export const REACT_CONFIG = 'ReactConfig.php';
export const ADD_TO_CART = '/gateway-api/cartapi/v1/item/add/refresh';
export const NOTIFY_ME = '/ajaxaddcart/index/outofStockSubscription';
export const ADD_TO_WISHLIST = (productId: string, formKey: string) =>
  `/advancedwishlist/index/add/product/${productId}/form_key${formKey}/`;
export const REMOVE_FROM_WISHLIST = (productId: string) =>
  `/advancedwishlist/index/remove/item/${productId}`;
export const FETCH_ADDRESS_DETAILS = '/edd/product/edd/default/fetch';
export const FETCH_SAVED_ADDRESSES = 'app-api/index.php/address/all';
export const FETCH_AUTO_ADDRESS =
  'app-api/index.php/address/autoaddress_producttype';
export const FETCH_REVIEW_IMAGES =
  'gateway-api/products/products/@{productId}/reviews/images';
export const FETCH_RECO_WIDGETS =
  '/gateway-api/rest/appapi/V2/getProductWidgets';
export const FETCH_PRODUCT_DETAILS = (productId: string) =>
  `/facade/product/snsp/details?bffBU=nykaa&bffVersion=v1&bffDevice=MSITE&app_version=2.0.6&product_id=${productId}&source=react&variants=true&filters=all`;
export const FETCH_PRODUCT_REVIEW_IMAGES = (productId: string) =>
  `/gateway-api/products/${productId}/reviews/images`;
export const FETCH_WISHLIST_IDS =
  '/app-api/index.php/customer/get_wishlist_data';
export const FETCH_REVIEWS_DATA = ({
  productId,
  pageNo,
}: {
  productId: string;
  pageNo: string;
}) =>
  `/facade/product/snsr/${productId}/reviews?filters=DEFAULT&domain=nykaa&bffBU=nykaa&bffVersion=v1&bffDevice=MSITE&app_version=2.0.6&source=react&variants=true&pageNo=${pageNo}`;
