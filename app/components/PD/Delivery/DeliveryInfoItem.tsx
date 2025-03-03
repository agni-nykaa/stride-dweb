import { FC, ReactNode } from 'react';

import { InfoItem, InfoIconWrapper, InfoContent, InfoTitle, InfoSubtitle } from './styled';

interface DeliveryInfoItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const DeliveryInfoItem: FC<DeliveryInfoItemProps> = ({ icon, title, subtitle }) => (
  <InfoItem>
    <InfoIconWrapper>{icon}</InfoIconWrapper>
    <InfoContent>
      <InfoTitle>{title}</InfoTitle>
      <InfoSubtitle>{subtitle}</InfoSubtitle>
    </InfoContent>
  </InfoItem>
);

export default DeliveryInfoItem;
