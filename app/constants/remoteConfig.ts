import { RemoteConfig } from '../types/remoteConfig';

export const DEFAULT_CONFIG: RemoteConfig = {
  switches: {},
  configs: {
    collapsePdConfig: {
      couponSection: {
        title: 'Coupons',
        subTitle: '',
        isOpened: false,
        key: 'coupons',
      },
      offerSection: {
        title: 'Offers',
        subTitle: '',
        isOpened: false,
        key: 'offers',
      },
      comboSection: {
        title: 'Top selling combos',
        subTitle: '',
        isOpened: false,
        key: 'oupons',
      },
      productDetails: {
        title: 'Product Details',
        subTitle: '',
        isOpened: false,
        key: 'productDetailsSection',
      },
      returnSection: {
        title: 'Authenticity & Return Policy',
        subTitle: '',
        isOpened: false,
        key: 'authReturn',
      },
      deliverySection: {
        title: 'Check Delivery Date',
        subTitle: '',
        isOpened: false,
        key: 'deliveryWidget',
      },
      rnrSection: {
        title: 'Ratings & Reviews',
        subTitle: 'verified ratings',
        isOpened: false,
        key: 'ratingReviews',
      },
      highlightsSection: {
        title: 'Highlights',
        subTitle: '',
        isOpened: false,
        key: 'highlights',
      },
    },
  },
};

export const REMOTE_CONFIG_FETCH_ERR =
  'useConfig must be used within a ConfigContext.Provider';
