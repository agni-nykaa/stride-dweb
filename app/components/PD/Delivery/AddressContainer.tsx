import { FC } from 'react';
import { truncateText } from '~/utils/stringUtils';

import {
  AddressContainer,
  AddressText,
  AddressCheckbox,
  NameAndPostcode,
  StreetText,
} from './styled';
import { Address } from './types';

interface AddressContainerProps {
  address: Address;
  onClick: (addressId: string) => void;
}

const AddressContainerComponent: FC<AddressContainerProps> = ({
  address,
  onClick,
}) => (
  <AddressContainer
    key={address.entity_id}
    onClick={() => onClick(address.entity_id)}
    selected={address.selected}
  >
    <AddressText>
      <NameAndPostcode>
        {address.firstname}, {address.postcode}
      </NameAndPostcode>
      <br />
      <StreetText>{truncateText(address.street, 35)}</StreetText>
    </AddressText>
    <AddressCheckbox
      type="checkbox"
      checked={address.selected}
      readOnly
    />
  </AddressContainer>
);

export default AddressContainerComponent;
