import { queryStringFromParams } from '../../utils/api';
import { logger } from '../../utils/logger';
import { FETCH_RECO_WIDGETS } from '~/network/constants/apiUrls';

const ERROR_FETCHING_RECO_API = 'Error Fetching RECO API';

interface RECOParams {
  id: string;
  algo: any;
  lang?: string;
}
export const getRecoProducts = async ({ id, algo }: RECOParams) => {
  const url = FETCH_RECO_WIDGETS;
  const queryParams = {
    product_id: id,
    recommendation_json: JSON.stringify(algo),
  };
  const queryString = queryStringFromParams(queryParams);
  try {
    const response = await fetch(`${url}${queryString}`);
    if (!response) {
      return 'RECO widgets data nor found';
    }
  } catch (e: any) {
    logger.error(e, `${ERROR_FETCHING_RECO_API} :url=${url}`);
    throw e;
  }
};
