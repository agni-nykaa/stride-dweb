import {
  IOS_APP,
  Device,
  ANDROID_APP,
  ANDROID_VERSION,
  IOS_VERSION,
} from '~/constants/device';

export const getDevice = () => {
  // const { headers } = req;
  let userAgent = '';
  if (typeof window !== 'undefined') {
    userAgent = window?.navigator?.userAgent || '';
  }
  // @TODO: Add the logic to determine the device type
  //  const userAgent = headers['user-agent'];
  let device = Device.WEB;
  //  let version;
  if (userAgent?.match(IOS_APP)) {
    device = Device.IOS;
    //   version = userAgent?.match(IOS_VERSION)?.[1] || '';
  } else if (userAgent?.match(ANDROID_APP)) {
    device = Device.ANDROID;
    //   version = userAgent.match(ANDROID_VERSION)?.[1] || '';
  }
  return device;
};

export const isAndroid = () => getDevice() === Device.ANDROID;
export const isIOS = () => getDevice() === Device.IOS;
export const isWeb = () => getDevice() === Device.WEB;
