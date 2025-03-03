import { reactStorageKeys } from '~/constants/auth';
import { events } from '~/constants/datalayer';
import { pushEvent } from '~/utils/datalayer';
import { logger } from '~/utils/logger';
import { localStorageService } from '~/utils/storage/localStorage';

export const getAuthFromStorage = () => {
  try {
    const reactConfigExpiryString = localStorageService.getItem(
      reactStorageKeys.CONFIG_EXPIRY,
    );
    const reactConfigExpiry = parseInt(reactConfigExpiryString || '', 10);
    const expiryTime = new Date(reactConfigExpiry);
    const currentTime = new Date();

    if (expiryTime > currentTime) {
      const reactConfigData = localStorageService.getItem(
        reactStorageKeys.CONFIG,
      );
      if (reactConfigData) {
        const parsedReactConfigData = JSON.parse(reactConfigData);
        if (parsedReactConfigData) {
          return parsedReactConfigData;
        }
      }
    } else {
      pushEvent('mp_reset');
      pushEvent(events.CONFIG_EXPIRED);
    }
  } catch (err) {
    logger.error(`Error reading react config from storage: ${err}`);
  }

  return null;
};

export const storeAuthInStorage = (response: any): void => {
  try {
    const currentTime = new Date().getTime();
    const timeoutPeriod = reactStorageKeys.EXPIRY_TIME;
    const expiryTime = new Date(currentTime + timeoutPeriod).getTime();
    const stringifiedResponse = JSON.stringify(response);
    localStorageService.setItem(reactStorageKeys.CONFIG, stringifiedResponse);
    localStorageService.setItem(
      reactStorageKeys.CONFIG_EXPIRY,
      `${expiryTime}`,
    );
  } catch (err) {
    logger.info(`Error Storing reactConfig: ${err}`);
  }
};

// export const updateAuthState = (authData: AuthData, isFetchedOverNetwork: boolean) => {
//   const transformedReactConfig = transformAuthData(authData);
//   const auth = {
//     fetchedOverNetwork: isFetchedOverNetwork,
//     user: transformedReactConfig,
//   };
//   const updatedAuthState = {
//     ...authState,
//     fetchedOverNetwork: auth.fetchedOverNetwork,
//     user: {
//       ...authState.user,
//       ...auth.user,
//     },
//   };

//   return updateAuthState;
// };

export const updateCartCountInStorage = (cartCount = 0) => {
  const authDataInStorage = getAuthFromStorage();
  if (authDataInStorage) {
    try {
      const result = authDataInStorage?.data?.result;
      if (result) {
        authDataInStorage.data.result.cartItemsTotal = cartCount;
        storeAuthInStorage(authDataInStorage);
      }
    } catch (err) {
      logger.info('Error: updateCartCountInStorage');
    }
  }
};
