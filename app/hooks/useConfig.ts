import { useContext } from 'react';
import {
  DEFAULT_CONFIG,
  REMOTE_CONFIG_FETCH_ERR,
} from '~/constants/remoteConfig';
import { ConfigContext } from '~/contexts';
import { logger } from '~/utils/logger';
import { isValidObject } from '~/utils/validations';

export const useConfig = () => {
  const config = useContext(ConfigContext);
  if (!isValidObject(config)) {
    logger.error(REMOTE_CONFIG_FETCH_ERR);
    return DEFAULT_CONFIG;
  }
  return config;
};
