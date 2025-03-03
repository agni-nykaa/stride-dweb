import { FC } from 'react';
import GreenTickIcon from '~/components/Icons/GreenTick';

import { CHANGE, DELIVERY_INFO } from './constants';
import DeliveryInfoItem from './DeliveryInfoItem';
import {
  DeliveryDetailsContainer,
  DeliveryButton,
  DeliveryDetailsContent,
  DeliveryDetailsMessage,
  DeliveryDetailsPincodeState,
  DeliveryInfoSection,
} from './styled';

interface DeliveryDetailsProps {
  message: string;
  pincode: string;
  state?: string;
  onChange: () => void;
}

const DeliveryDetails: FC<DeliveryDetailsProps> = ({
  message,
  pincode,
  state,
  onChange,
}) => (
  <div>
    <DeliveryDetailsContainer>
      <DeliveryDetailsContent>
        <GreenTickIcon />
        <div>
          <DeliveryDetailsMessage>{message}</DeliveryDetailsMessage>
          <br />
          <DeliveryDetailsPincodeState>
            {pincode} {state && `(${state})`}
          </DeliveryDetailsPincodeState>
        </div>
      </DeliveryDetailsContent>
      <DeliveryButton onClick={onChange}>{CHANGE}</DeliveryButton>
    </DeliveryDetailsContainer>

    <DeliveryInfoSection>
      {DELIVERY_INFO.map(({ id, icon: Icon, title, subtitle }) => (
        <DeliveryInfoItem
          key={id}
          icon={<Icon />}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </DeliveryInfoSection>
  </div>
);

export default DeliveryDetails;
