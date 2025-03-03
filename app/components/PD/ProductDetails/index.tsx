import React, { useState, useEffect, useRef } from 'react';
import { ProductVariant } from '~/types/PD';
import {
  DESCFRIPTION,
  READ_LESS,
  READ_MORE,
  READ_MORE_THRESHOLD,
  TAB_HEADERS_MAP,
} from './constants';
import {
  getTabsValues,
  getLegalInfoForPDP,
  createMrpExpiryHtml,
} from './helpers';
import ProductDetailIcon from './Icons/ProductDetails';
import {
  TabContent,
  AccordionContent,
  ReadMoreButton,
  ContentWrapper,
  ReadMoreButtonContainer,
} from './styled';
import { ManufactureData } from './types';
// import { useGetSelectedProductData } from '../hooks/useGetSelectedProductData';
import ChevronUpSmall from '~/components/Icons/ChevronUpSmall';
import ChevronDownSmall from '~/components/Icons/ChevronDownSmall';
import { useConfig } from '~/hooks/useConfig';
import Accordion from '~/shared/Accordion';
import TabsContainer from '~/shared/Tabs';
import { TAB_ALIGNMENTS } from '~/shared/Tabs/constants';

interface ProductDetailsAccordionProps {
  description: string;
  ingredients: string;
  howToUse: string;
  currentSkuData: ProductVariant;
}

const ProductDetailsAccordion: React.FC<ProductDetailsAccordionProps> = ({
  description,
  ingredients,
  howToUse,
  currentSkuData,
}) => {
  if (!description && !ingredients && !howToUse) return null;
  const config = useConfig();
  const productDetailsAccConfig =
    config?.configs?.collapsePdConfig?.productDetails;

  const [activeTab, setActiveTab] = useState<number | null>(0); // Set the first tab as active by default
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const tabsValues = getTabsValues(description, ingredients, howToUse);
  const tabHeaders = tabsValues.tabHeaders || {};

  const { expiry, manufacture } = currentSkuData;

  const renderMrpAndExpiry = () => createMrpExpiryHtml(expiry);

  const tabs =
    tabHeaders &&
    Object.keys(tabHeaders)?.map((tabName) => ({
      key: tabName.toLowerCase(),
      label: TAB_HEADERS_MAP[tabName.toLowerCase()] || tabName,
    }));

  const numberOfTabs = tabs?.length;
  if (numberOfTabs === 0) return null;
  const isSingleTab = numberOfTabs === 1;

  const renderManufactureDetails = () =>
    manufacture
      ?.map((manufactureData: ManufactureData) =>
        getLegalInfoForPDP(
          manufactureData,
          manufactureData.originOfCountryName,
        ),
      )
      ?.join('');

  useEffect(() => {
    if (contentRef?.current) {
      setShowReadMore(contentRef.current?.scrollHeight > READ_MORE_THRESHOLD);
    }
  }, [activeTab]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Accordion
        title={productDetailsAccConfig.title}
        subTitle={productDetailsAccConfig.subTitle}
        opened={productDetailsAccConfig.isOpened}
        keyValue={productDetailsAccConfig.key}
        icon={<ProductDetailIcon />}
      >
        <AccordionContent>
          <div>
            {!isSingleTab && (
              <TabsContainer
                tabs={tabs}
                alignment={TAB_ALIGNMENTS.SPACE_AROUND}
                activeTab={activeTab}
                onTabChange={(tab) => {
                  setActiveTab(tab);
                  setIsExpanded(false);
                }}
              />
            )}
            {activeTab !== null && (
              <>
                <TabContent>
                  <ContentWrapper
                    ref={contentRef}
                    expanded={isExpanded}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          tabsValues?.tabsData?.[activeTab]?.value +
                          (tabHeaders &&
                          Object.keys(tabHeaders)[activeTab]?.toLowerCase() ===
                            DESCFRIPTION
                            ? renderMrpAndExpiry() + renderManufactureDetails()
                            : ''),
                      }}
                    />
                  </ContentWrapper>
                </TabContent>
                {showReadMore && (
                  <ReadMoreButtonContainer>
                    <ReadMoreButton onClick={toggleReadMore}>
                      {isExpanded ? (
                        <>
                          {READ_LESS}
                          <ChevronUpSmall />
                        </>
                      ) : (
                        <>
                          {READ_MORE}
                          <ChevronDownSmall />
                        </>
                      )}
                    </ReadMoreButton>
                  </ReadMoreButtonContainer>
                )}
              </>
            )}
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};

export default ProductDetailsAccordion;
