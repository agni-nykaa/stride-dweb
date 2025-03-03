/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { json, MetaFunction } from '@remix-run/node';
import { useEffect, useRef, useState } from 'react';
import {
  useLoaderData,
  ShouldRevalidateFunction,
  useSearchParams,
} from '@remix-run/react';

import { QUERY_PARAM_KEYS } from '~/constants/PD';
import TemplateFactory from '~/factories/PDTemplateFactory';
import ThemeFactory from '~/factories/ThemeFactory';
import { ProductContext } from '~/hooks/PD/useProduct';
import { useConfig } from '~/hooks/useConfig';
import { useUpdateSkuId } from '~/hooks/PD/useUpdateSkuId';
import { transformProductData } from '~/transformers/PD';
import { fetchData } from '~/utils/api';
import { logger, loggerInitialized } from '~/utils/logger';
import { getSelectedProductData } from '~/utils/PD';
import styled from '@emotion/styled';
import { fetchConfig } from '~/utils/config';
import { getProductMeta } from '~/utils/PD/metaInfo';
import { FETCH_PRODUCT_DETAILS } from '~/network/constants/apiUrls';
import useRemoveOpenModal from '~/shared/Carousel/hooks/useRemoveOpenModal';
import { redirectToStandardPD } from '~/actions/navigate/goToStandardPD';
import { useWishlistData } from '~/hooks/PD/useWishlistData';

export const loader = async ({ params, request }) => {
  await loggerInitialized;
  const { productId } = params;
  const url = new URL(request.url);
  const skuId = url.searchParams.get(QUERY_PARAM_KEYS.SKU);
  try {
    const fetchDetailsUrl = FETCH_PRODUCT_DETAILS(productId);
    const [data, config] = await Promise.all([
      fetchData(fetchDetailsUrl),
      fetchConfig(),
    ]);
    const transformedData = transformProductData(data, skuId);
    return json({
      ...transformedData,
      config,
    });
  } catch (error) {
    if (logger && logger.error) {
      logger.error('Error fetching product data:', error);
    } else {
      console.error('Error fetching product data:', error);
    }
    if (error) {
      const path = url.pathname + url.search;
      return redirectToStandardPD(path);
    }
    throw error;
  }
};

export const meta: MetaFunction = ({ data, location }) => {
  if (!data || !data.info || !data.config) return {};

  return getProductMeta({
    product: data.info,
    config: data.config,
    location,
  });
};

export const shouldRevalidate: ShouldRevalidateFunction = () => false;

const PdpWrapper = styled.div`
  background-color: white;
`;

export default function ProductPage() {
  const config = useConfig();
  const productData = useLoaderData();
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const [currentSkuData, setCurrentSkuData] = useState(
    getSelectedProductData(productData?.info),
  );

  useEffect(() => {
    const skuId = searchParams.get(QUERY_PARAM_KEYS.SKU);
    const updatedSkuData = getSelectedProductData(productData?.info, skuId);
    setCurrentSkuData(updatedSkuData);
  }, [searchParams, productData?.info]);

  const templateFactory = new TemplateFactory();

  const customTheme = productData?.templateData?.theme || {};
  const theme = ThemeFactory.extendTheme(customTheme);

  useUpdateSkuId({
    currentSkuData,
    parentId: productData?.info?.id,
  });
  useRemoveOpenModal();

  useWishlistData();

  return (
    <ThemeProvider theme={theme}>
      <ProductContext.Provider value={{ recommendationsRef }}>
        <div>
          {!(productData.status === 'success' && productData.info) ? (
            <p>Loading...</p>
          ) : (
            <PdpWrapper>
              {templateFactory.renderTemplate({
                id: productData?.templateData?.id,
                data: productData?.info,
                metaData: productData?.metaData,
                templateData: productData?.templateData,
                currentSkuData: currentSkuData,
              })}
            </PdpWrapper>
          )}
        </div>
      </ProductContext.Provider>
    </ThemeProvider>
  );
}
