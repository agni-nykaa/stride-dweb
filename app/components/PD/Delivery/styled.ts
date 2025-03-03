import { Subtitle } from './../../../shared/InputBox/styled';
import styled from '@emotion/styled';
import tickIcon from '~/components/Icons/TickMark';
import { hexToRgba } from '~/utils/colorUtils';

export const DeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme?.colors?.surface};
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const DeliveryText = styled.p`
  flex-shrink: 0;
  ${({ theme }) => theme?.typography?.titleXSmall};
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const DeliveryButton = styled.button`
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  background: none;
  ${({ theme }) => theme?.typography?.buttonSmall};
  text-align: center;
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  flex-shrink: 0;
  padding: ${({ theme }) => `${theme?.spacing?.spacing40}`};
`;

export const AddressContainer = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  background-color: ${({ selected, theme }) =>
    selected ? theme?.colors?.surface20 : theme?.colors?.white};
  box-sizing: border-box;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing60} ${theme?.spacing?.spacing100} `};
`;

export const AddressText = styled.p`
  margin: ${({ theme }) => theme?.spacing?.spacing0};
`;

export const NameAndPostcode = styled.span`
  ${({ theme }) => theme?.typography?.subTitleMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const StreetText = styled.span`
  ${({ theme }) => theme?.typography?.bodyMedium};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

export const AddressCheckbox = styled.input`
  margin-left: 10px;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  border: 1.5px solid ${({ theme }) => theme?.colors?.textOutline};
  background-color: #f3f4f5;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: #111314;
    border: 1.5px solid ${({ theme }) => theme?.colors?.textOutline};
    position: relative;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    background: url(${tickIcon}) no-repeat center center;
    background-size: contain;
  }
`;

export const SavedAddressesHeading = styled.h3`
  ${({ theme }) => theme?.typography?.titleSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing40} ${theme?.spacing?.spacing100} ${theme?.spacing?.spacing80} ${theme?.spacing?.spacing100}`};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing40} ${theme?.spacing?.spacing0}`};
`;

export const DividerText = styled.span`
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing0} ${theme?.spacing?.spacing40}`};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  background: ${({ theme }) => theme?.colors?.white};
  ${({ theme }) => theme?.typography?.buttonMedium};
`;

export const DividerLine = styled.div`
  flex: 1;
  border-bottom: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
`;

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme?.colors?.white};
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textSecondary, 0.08)};
  padding-bottom: ${({ theme }) => `${theme?.spacing?.spacing60}`};
`;

export const DeliveryDetailsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DeliveryDetailsMessage = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin-bottom: 2px;
`;

export const DeliveryDetailsPincodeState = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const AccordionContent = styled.div`
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing60} ${theme?.spacing?.spacing80}`};
`;

export const DeliveryInfoSection = styled.div`
  margin-top: 12px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0px 6px;
`;

export const InfoIconWrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #f3f4f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Text-Primary, rgba(0, 19, 37, 0.92));
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const InfoTitle = styled.span``;

export const InfoSubtitle = styled.span``;
