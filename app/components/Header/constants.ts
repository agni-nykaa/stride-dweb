import { MenuItemsMap } from './types';

export const BODY_OVERFLOW_FOR_MODAL = 'OVERFLOW-HIDDEN';
export const LIST_ITEM_CLASS = 'list-item';

export const platformNames = {
  NYKAA: 'NYKAA',
  MEN: 'MEN',
};

export const userSessionTypes = {
  GUEST: 'GUEST',
  LOGGED_IN: 'LOGGED_IN',
};

export const BEAUTY_HELP_CENTER = '/help-center';
export const NEED_HELP = 'Need Help';
export const AUTHENTICITY = 'Authenticity';
export const NYKAA_CSR = 'Nykaa CSR';
export const RESPONSIBLE_DISCLOSURE = 'Responsible Disclosure';
export const BEAUTY_MY_ORDERS = '/sales/order/history/v2?ptype=myOrder';
export const NYKAA_PRIVE = 'Nykaa Prive';
export const MY_WALLET = 'My Wallet';
export const MY_PROFILE = 'My Profile';
export const MY_WISHLIST = 'My Wishlist';
export const VIDEO_CONSULTATION = 'Video Consultation';
export const HELP_CENTER = 'Help Center';
export const GIFT_CARDS = 'Gift Cards';
export const MY_ORDERS = 'My Orders';
export const LP_VALUE = 'searchResults';
export const SEARCH_URL = '/search/result/';
export const SEARCH_QUERY = '/search/query/';

export const menuItems: MenuItemsMap = {
  [platformNames.NYKAA]: {
    [userSessionTypes.GUEST]: [
      {
        link: BEAUTY_HELP_CENTER,
        displayText: NEED_HELP,
      },
      {
        link: '/authenticity-nykaa-guarantee/lp?intcmp=hp,header,1,authenticity',
        displayText: AUTHENTICITY,
      },
      {
        link: '/nykaa-csr/lp',
        displayText: NYKAA_CSR,
      },
      {
        link: '/responsible-disclosure/lp',
        displayText: RESPONSIBLE_DISCLOSURE,
      },
    ],
    [userSessionTypes.LOGGED_IN]: [
      {
        link: BEAUTY_MY_ORDERS,
        displayText: MY_ORDERS,
      },
      {
        link: '/prive',
        displayText: NYKAA_PRIVE,
      },
      {
        link: '/nykaaWallet/add/?ptype=nykaaWallet',
        displayText: MY_WALLET,
      },
      {
        link: '/myProfile',
        displayText: MY_PROFILE,
      },
      {
        link: '/wishlist/',
        displayText: MY_WISHLIST,
      },
      {
        link: '/authenticity-nykaa-guarantee/lp?intcmp=hp,header,1,authenticity',
        displayText: AUTHENTICITY,
      },
      {
        link: '/video-consultation',
        displayText: VIDEO_CONSULTATION,
        tag: 'NEW',
      },
      {
        link: BEAUTY_HELP_CENTER,
        displayText: HELP_CENTER,
      },
      {
        link: '/nykaa-csr/lp',
        displayText: NYKAA_CSR,
      },
      {
        link: '/responsible-disclosure/lp',
        displayText: RESPONSIBLE_DISCLOSURE,
      },
    ],
  },
};
export const enum PageTypes {
  PRODUCT = 'product',
  HOME = 'home',
}
export const getMenuItems = (platform: string, userSessionType: string) =>
  menuItems[platform]?.[userSessionType] || [];
export const PDP_TOP_NAV = 'productDetailPage:CartIcon';
export const BACK_BTN_HEIGHT = 24;
export const BACK_BTN_WIDTH = 24;
