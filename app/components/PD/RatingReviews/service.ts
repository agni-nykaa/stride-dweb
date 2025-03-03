import { PAGE_SIZE } from './constants';
import {
  mandatoryRequestParams,
  queryStringFromParams,
} from '../../../utils/api';

import { logger } from '../../../utils/logger';

import { FETCH_REVIEW_IMAGES } from '~/network/constants/apiUrls';

const ERROR_FETCHING_REVIEW_IMAGES = 'Error Fetching RECO API';

interface RECOParams {
  id: string;
  algo: any;
  lang?: string;
}
export const getReviewImages = async ({ id, algo }: RECOParams) => {
  const url = FETCH_REVIEW_IMAGES.replace('@{productId}', id);
  const queryParams = {
    ...mandatoryRequestParams,
    size: PAGE_SIZE,
    domain: 'nykaa',
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const response = await fetch(`${url}${queryString}`);
    if (!response) {
      return 'Review images data not found';
    }
  } catch (e: any) {
    logger.error(e, `${ERROR_FETCHING_REVIEW_IMAGES} :url=${url}`);
    throw e;
  }
};
