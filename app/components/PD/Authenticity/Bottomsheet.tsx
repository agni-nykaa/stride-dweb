import styled from '@emotion/styled';
import React from 'react';
import BottomSheet from '~/shared/BottomSheet';
import { BOTTOM_SHEET_NAVIGATION } from '~/shared/BottomSheet/constants';
import { hexToRgba } from '~/utils/colorUtils';

import { AUTHENTICITY_CONSTANTS } from './constants';

const SheetStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1.25rem 1rem;
  text-align: center;
`;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleStyle = styled.div`
  ${({ theme }) => theme?.typography?.titleSmall};
  ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  margin-left: 0.75rem;
`;

const ContentStyle = styled.div`
  ${({ theme }) => theme?.typography?.bodySmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

const ButtonStyle = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  ${({ theme }) => theme?.typography?.buttonLarge};
  background-color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  color: ${({ theme }) => theme?.colors?.surface};
  width: 100%;
`;

const ButtonContainer = styled.div`
  padding: 1rem 1.25rem;
  width: 100%;
`;

interface ItemInfoBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  content: string;
  noPadding?: boolean;
  showCloseIcon?: boolean;
}

const ItemInfoBottomSheet: React.FC<ItemInfoBottomSheetProps> = ({
  isOpen,
  onClose,
  icon,
  title,
  content,
  noPadding,
  showCloseIcon,
}) => (
  <BottomSheet
    isOpen={isOpen}
    onClose={onClose}
    closeOnClickOutside={true}
    noPadding={noPadding}
    showCloseIcon={showCloseIcon}
    navigation={BOTTOM_SHEET_NAVIGATION.HANDLE}
  >
    <SheetStyle>
      <HeaderStyle>
        <div>{icon}</div>
        <TitleStyle>{title}</TitleStyle>
      </HeaderStyle>
      <ContentStyle>{content}</ContentStyle>
    </SheetStyle>
    <ButtonContainer>
      <ButtonStyle onClick={onClose}>
        {AUTHENTICITY_CONSTANTS.BUTTON_TEXT}
      </ButtonStyle>
    </ButtonContainer>
  </BottomSheet>
);

export default ItemInfoBottomSheet;
