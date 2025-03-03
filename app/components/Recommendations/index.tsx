import { useEffect, useState } from 'react';
import { useProductContext } from '~/hooks/PD/useProduct';

import ChevronRightSmall from './assets/ChevronRightSmall';
import { moreFromBrand, VIEW_ALL_PRODUCTS, WidgetTitle } from './constants';
import ProductCard from './ProductCard';
import RecommendationsModal from './RecommendationsModal';
import {
  ScrollableContainer,
  TitleContainer,
  TitleText,
  ViewAllButton,
  ViewAllText,
} from './styled';
import { getPdpUrl } from './utils';
import { ACTION_ROUTES } from '~/actions';
import { queryStringFromParams } from '~/utils/api';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';
import { useConfig } from '~/hooks/useConfig';
import { API_METHODS } from '~/constants/api';
import Shimmer from '~/shared/Shimmer';

interface RecommendationProps {
  product: any;
}

const Recommendations = (props: RecommendationProps) => {
  const { recommendationsRef } = useProductContext();
  const { product } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommData, setRecommData] = useState([]);
  const config = useConfig();
  const pdpWidgetConfig = config?.configs?.pdp_widget_config;
  const { algo } = pdpWidgetConfig || {};
  const { fetcher, isContentLoading } = useFetcherHandler({
    onSuccess: (data) => {
      const filteredData = data?.response?.relatedProducts?.filter(
        (data) => data.widgetType === moreFromBrand,
      );
      setRecommData(filteredData);
    },
    onError: () => {},
    successHandler: (data) => data.status || false,
  });

  useEffect(() => {
    const formData = new FormData();
    formData.append('product_id', product?.id);
    formData.append('recommendation_json', algo ? JSON.stringify(algo) : '');

    fetcher.submit(formData, {
      method: API_METHODS.POST,
      action: ACTION_ROUTES.recommendations,
    });
  }, [product?.id]);

  const handleViewAllClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Shimmer
      show={isContentLoading}
      height="480px"
    >
      <div ref={recommendationsRef}>
        {recommData?.map((recomm) => {
          const { title, products, widgetType } = recomm;
          const heading = title || WidgetTitle;
          return (
            <>
              <TitleContainer>
                <TitleText>{heading}</TitleText>
              </TitleContainer>
              <ScrollableContainer>
                {products?.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    getPdpUrl={getPdpUrl}
                    position={index + 1}
                    widgetType={widgetType}
                    widgetName={heading}
                  />
                ))}
              </ScrollableContainer>
              <ViewAllButton onClick={handleViewAllClick}>
                <ViewAllText>{VIEW_ALL_PRODUCTS}</ViewAllText>
                <ChevronRightSmall />
              </ViewAllButton>
              <RecommendationsModal
                title={title}
                products={products}
                widgetType={widgetType}
                widgetName={heading}
                onClose={() => setIsModalOpen(false)}
                isOpen={isModalOpen}
              />
            </>
          );
        })}
      </div>
    </Shimmer>
  );
};

export default Recommendations;
