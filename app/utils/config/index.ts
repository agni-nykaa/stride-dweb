import NodeCache from 'node-cache';

import { logger, loggerInitialized } from '../logger';

const cache = new NodeCache();

export async function fetchConfig() {
  await loggerInitialized; // Ensure logger is initialized
  try {
    const cachedConfig = cache.get('config');

    if (cachedConfig) {
      logger.info('Using cached config');
      return cachedConfig;
    } else {
      const configUrl = process.env.REMOTE_CONFIG_URL;
      if (!configUrl) {
        logger.info('REMOTE_CONFIG_URL is not defined');
        return {};
      }
      const response = await fetch(configUrl);
      const configData = await response.json();

      cache.set('config', configData, 600); // Cache for 10 minutes
      logger.info('Fetched and cached new config');
      return configData;
    }
  } catch (error) {
    logger.error('Error fetching config:', error);
    return {};
  }
}
