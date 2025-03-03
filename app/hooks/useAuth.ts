import DefaultAuthState from '~/constants/context/auth';
import { useState, useEffect, useContext } from 'react';
import { REMOTE_CONFIG_FETCH_ERR } from '~/constants/remoteConfig';
import { AuthContext } from '~/contexts';
import { logger } from '~/utils/logger';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    logger.error(REMOTE_CONFIG_FETCH_ERR);
    return DefaultAuthState;
  }
  return auth;
};

export const useIsLoggedIn = (): boolean => {
  const auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const { user, dataFetched } = auth || {};
    const { id, email } = user || {};
    const status = dataFetched && (!!id || !!email);
    setIsLoggedIn(status);
  }, [auth]);

  return isLoggedIn;
};
