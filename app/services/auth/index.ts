import { PRO_COOKIE_KEY, USER_DATA_STORAGE_KEY } from '~/constants/auth';
import { apiHelper } from '~/network/api';
import { transformAuthData } from '~/transformers/auth';
import { logger } from '~/utils/logger';
import { setCookie } from '~/utils/storage/cookie';

import { getAuthFromStorage, storeAuthInStorage } from './helper';

// Convert it into a centralized middleware function
export const getAuth = async (): Promise<any> => {
    const authDataInStorage = getAuthFromStorage();
    const sessionSiteVisited = sessionStorage.getItem('siteVisited');
    if (authDataInStorage && sessionSiteVisited) {
      const { data: { result } = { result: null } } = authDataInStorage;
      if (result) {
        try {
          const transformedReactConfig = transformAuthData(result);

          return Promise.resolve({
            fetchedOverNetwork: false,
            data: transformedReactConfig,
          });
        } catch (err) {
          logger.error(`ERROR_TRANSFORMING_REACT_CONFIG: ${err}`);
        }
      }
    }

    const url = process.env.API_HOST + '/';
    try {
      const response = await apiHelper({ url, method: 'post' });
      const { data, status, statusText } = response;

      storeAuthInStorage({
        data: data,
        status: status,
        statusText: statusText,
      });
      sessionStorage.setItem('siteVisited', 'true');
      const {
        data: { result },
      } = response;
      if (!result) {
        return Promise.reject({
          message: '"response" not found in api -> data',
        });
      }
      const transformedAuthData = transformAuthData(result);
      const { groupId, id, isPro } = transformedAuthData;
      // TODO: set auth data in session
      setCookie(
        USER_DATA_STORAGE_KEY,
        JSON.stringify({
          id,
          nykaa_pro: isPro,
          group_id: groupId,
        }),
        1,
      );
      setCookie(PRO_COOKIE_KEY, isPro ? true : false, 1);

      return Promise.resolve({
        fetchedOverNetwork: true,
        data: transformedAuthData,
      });
    } catch (err) {
      // ? for axios: http status < 200 || status >= 300 => error
      // * https://github.com/axios/axios/issues/472#issuecomment-252584718
      const customMessage = 'Error in react config api';
      logger.error(`${customMessage} : ${err}`);
      throw err;
    }
};
