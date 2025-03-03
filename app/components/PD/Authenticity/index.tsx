/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Authentic from '~/components/Icons/Authentic';
import CircleNoReturn from '~/components/Icons/CircleNoReturn';
import CircleUndo from '~/components/Icons/CircleUndo';
import Accordion from '~/shared/Accordion';

import Attribute from './Attribute';
import ItemInfoBottomSheet from './Bottomsheet';
import { AUTHENTICITY_CONSTANTS } from './constants';
import { Container } from './styled';
import { useConfig } from '~/hooks/useConfig';

const InfoSectionComponent: React.FC = ({ product, selectedProductData }) => {
  const [bottomSheetData, setBottomSheetData] = useState(null);
  const config = useConfig();
  const returnSection = config?.configs?.collapsePdConfig?.returnSection;

  const infoItems = [
    {
      icon: <Authentic />,
      mainText: AUTHENTICITY_CONSTANTS.AUTHENTIC.TITLE,
      helperText: AUTHENTICITY_CONSTANTS.AUTHENTIC.HELPER_TEXT,
      content: product?.brandAuth?.text,
    },
    {
      icon: selectedProductData?.returnAvailable ? (
        <CircleUndo />
      ) : (
        <CircleNoReturn />
      ),
      mainText: selectedProductData?.returnAvailable
        ? AUTHENTICITY_CONSTANTS.RETURN_POLICY.EASY_TITLE
        : AUTHENTICITY_CONSTANTS.RETURN_POLICY.TITLE,
      helperText: AUTHENTICITY_CONSTANTS.RETURN_POLICY.HELPER_TEXT,
      content: selectedProductData?.messageOnReturn || '',
    },
  ];
  const handleHelperTextClick = (item) => {
    setBottomSheetData(item);
  };

  return (
    <>
      <Accordion
        title={returnSection.title}
        subTitle={returnSection.subTitle}
        opened={returnSection.isOpened}
        icon={<CircleUndo />}
        keyValue={returnSection.key}
      >
        <Container>
          {infoItems.map((item, index) => (
            <Attribute
              key={index}
              item={item}
              handleClick={handleHelperTextClick}
            />
          ))}
        </Container>
      </Accordion>
      <ItemInfoBottomSheet
        isOpen={!!bottomSheetData}
        onClose={() => setBottomSheetData(null)}
        icon={bottomSheetData?.icon}
        title={bottomSheetData?.mainText}
        content={bottomSheetData?.content}
        showCloseIcon={false}
        noPadding={true}
      />
    </>
  );
};

export default InfoSectionComponent;
