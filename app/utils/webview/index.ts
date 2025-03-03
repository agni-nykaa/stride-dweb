import {
  isValidObject,
  isValidString,
  isValidArrayLength,
} from '../validations';
import { Device } from '~/constants/device';
import { logger } from '~/utils/logger';
import {
  webViewCallbackhandlerProps,
  WEBVIEW_ERROR,
} from '~/constants/webview';

export const stringifyNestedObject = (callbackParams: any = []) => {
  if (isValidString(callbackParams)) {
    return [callbackParams];
  }
  const params = Object.keys(callbackParams);
  const updatedParams = params.map((param) => {
    const paramValue = callbackParams[param];
    const validParam = isValidObject(paramValue)
      ? JSON.stringify(paramValue)
      : paramValue;
    return validParam;
  });
  return updatedParams;
};

export const webViewCallbackhandler = (params: webViewCallbackhandlerProps) => {
  const { device, callbackParams, callbackFunctionName } = params;
  try {
    switch (device) {
      case Device.ANDROID: {
        if (!callbackParams) {
          window.AndroidFunction[`${callbackFunctionName}`]();
          return;
        }
        const androidParams = stringifyNestedObject(callbackParams);
        if (isValidArrayLength(androidParams)) {
          window.AndroidFunction[`${callbackFunctionName}`](...androidParams);
        } else {
          window.AndroidFunction[`${callbackFunctionName}`](callbackParams);
        }
        break;
      }
      case Device.IOS:
        window.webkit.messageHandlers[`${callbackFunctionName}`].postMessage(
          callbackParams,
        );
        break;
      default:
        break;
    }
  } catch (error: any) {
    logger.error(
      error,
      `${WEBVIEW_ERROR}, in ${Device[device]} at function ${callbackFunctionName}`,
    );
  }
};
