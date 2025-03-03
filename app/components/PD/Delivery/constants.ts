import COD from '~/components/Icons/COD';
import DeliveryTruck from '~/components/Icons/DeliveryTruck';

export const ENTER_PINCODE_FOR_DELIVERY = 'Enter Pincode for Delivery';
export const ENTER_PINCODE = 'Enter Pincode';
export const pincodeMaxLength = 6;
export const OR = 'OR';
export const SELECT_FROM_SAVED_ADD = 'Select from saved addresses';
export const CONFIGURABLE = 'configurable';
export const ADDRESS_DETAIL_FETCH_ERROR = 'Error fetching address details';
export const SAVED_ADDRESSES_FETCH_ERROR = 'Error fetching saved addresses';
export const DEFAULT_API_ERROR_MSG = 'Something went wrong, try again';
export const AUTO_ADDRESS_FETCH_ERROR = 'Auto address API failed';
export const PIN_CODE_FOR_DELIVERY = 'pinCodeDel';
export const PINCODE_COOKIE_EXPIRY = 30;
export const ADDRESS_ID_FOR_DELIVERY = 'addressIdDel';
export const FREE_DELIVERY = 'Free Delivery';
export const FREE_DELIVERY_ABOVE_AMOUNT = 'above ₹299';
export const COD_ON_ORDERS = 'COD on orders';
export const COD_ABOVE_AMOUNT = 'above ₹249';
export const CHANGE = 'Change';

export const DELIVERY_INFO = [
  {
    id: 'free-delivery',
    title: FREE_DELIVERY,
    subtitle: FREE_DELIVERY_ABOVE_AMOUNT,
    icon: DeliveryTruck,
  },
  {
    id: 'cod',
    title: COD_ON_ORDERS,
    subtitle: COD_ABOVE_AMOUNT,
    icon: COD,
  },
] as const;

export const PRODUCT_TYPE = {
  BUNDLE: 'bundle',
  SIMPLE: 'simple',
  CONFIGURE: 'configurable',
};
