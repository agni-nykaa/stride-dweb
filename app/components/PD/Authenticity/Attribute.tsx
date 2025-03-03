/** @jsxImportSource @emotion/react */
import React from 'react';

import { InfoItemType } from './constants';
import { CardWrapper, HelperText, SectionStyle, TextStyleMain } from './styled';

interface InfoItemProps {
  item: InfoItemType;
  handleClick: (item: InfoItemType) => void;
}

const InfoItem: React.FC<InfoItemProps> = ({ item, handleClick }) => (
  <SectionStyle onClick={() => handleClick(item)}>
    {item.icon}
    <CardWrapper>
      <TextStyleMain>{item.mainText}</TextStyleMain>
      <HelperText>{item.helperText}</HelperText>
    </CardWrapper>
  </SectionStyle>
);

export default InfoItem;
