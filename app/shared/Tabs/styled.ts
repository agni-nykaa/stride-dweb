import styled from '@emotion/styled';

import { TabVariant, TabAlignment } from './constants';

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const TabButtonsContainer = styled.div<{
  variant?: TabVariant;
  alignment?: TabAlignment;
}>`
  display: flex;
  ${({ variant, alignment }) =>
    variant === 'modal'
      ? `
    padding: 0 55px;
    justify-content: center;
    width: 100%;
    gap: 110px;
    `
      : `
    gap: 24px;
    justify-content: ${alignment};
    width: 100%;
    `}
`;

export const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ active }) => (active ? '#000' : '#666')};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 2px solid ${({ active }) => (active ? '#000' : 'transparent')};
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  width: 100%;
  margin-top: -2px;
`;
