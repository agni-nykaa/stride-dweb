import { logger } from '../../utils/logger';
import { defaultDataLayer } from './../../constants/datalayer';

export function initializeDataLayer() {
  if (typeof window !== 'undefined') {
    try {
      const defaultLayer = defaultDataLayer();
      window.dataLayer = [defaultLayer];
      window.datalayer = defaultLayer;
      pushEvent('pageview');
    } catch (error) {
      logger.error('Error initializing data layer: ', error);
    }
  }
}

interface Data {
  [dataKey: string]: any;
}

interface DataWithEvent extends Data {
  event: string;
}

const isValidFunc = (func: any): boolean => typeof func === 'function';

const pushToGtmDatalayer = (data: Data | DataWithEvent) => {
  let { dataLayer } = window;
  // ! dataLayer - CAPITAL "L"
  if (!dataLayer) {
    window.dataLayer = [];
    ({ dataLayer } = window);
  }
  if (typeof data === 'object') {
    dataLayer.push(data);
  }
};

const pushToLaunchDatalayer = (data: Data | DataWithEvent, reset = false) => {
  // ! datalayer - lowercase "l"
  if (!window.datalayer || reset) {
    // persisting spaPageView as it trigger page view
    const { spaPageView } = window.datalayer || {};
    window.datalayer = { spaPageView };
  }

  if (typeof data === 'object') {
    window.datalayer = Object.assign(window.datalayer, data);
  }
};

export const pushData = (data: Data | DataWithEvent, reset = false) => {
  if (typeof data !== 'object') {
    throw new Error(
      `Invalid "data"! expected type "object", but got ${typeof data}`,
    );
  }

  pushToGtmDatalayer(data);
  pushToLaunchDatalayer(data, reset);

  if (window && window.na && window.na.pushDataLayerEvent) {
    window.na.pushDataLayerEvent(data);
  }
};

export const pushEvent = (eventName: string, data?: Data) => {
  if (!eventName) {
    throw new Error(`"eventName" is required, you passed: ${eventName}`);
  }

  if (typeof eventName !== 'string') {
    throw new Error(
      `"eventName" has to be of type "string", passed: ${typeof eventName}`,
    );
  }

  const eventWithData = {
    event: eventName,
    ...data,
  };

  pushData(eventWithData);
};

// export const mixpanelTracking = (
//   device: Device,
//   eventName: string,
//   payload?: { [key: string]: string | number | null | undefined },
// ) => {
//   const isNotWeb = isDeviceNotWeb(device);
//   const isAndroid = isDeviceAndroid(device);
//   const isIos = isDeviceIos(device);
//   if (isNotWeb) {
//     const finalPayload = JSON.stringify(payload);
//     try {
//       if (isAndroid) {
//         if (isValidFunc(window.AndroidFunction?.doMixpanel)) {
//           window.AndroidFunction?.doMixpanel(eventName, finalPayload);
//         }
//       } else if (isIos) {
//         if (isValidFunc(window.webkit.messageHandlers?.doMixpanel.postMessage)) {
//           window.webkit.messageHandlers.doMixpanel.postMessage({
//             eventName,
//             params: finalPayload,
//           });
//         }
//       }
//     } catch (error) {
//       const customErrorMessage = `Mixpanel tracking error for ${eventName} event`;
//       logger.error(customErrorMessage);
//     }
//   } else {
//     pushEvent(eventName, payload);
//   }
// };

export const getNavigationTrackingParams = (
  siteNavigation: string,
  siteSubNavigation: string,
  store?: string,
) => ({
  site_navigation: siteNavigation,
  site_sub_navigation: siteSubNavigation,
  nykaa_store: store || __PLATFORM__,
});
