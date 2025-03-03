import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const TabButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? 'transparent' : '#fff')};
  padding: 10px;
  cursor: pointer;
  width: auto;
  text-align: center;
  border: none;
  color: ${({ active }) => (active ? '#000000' : '#001325A3')};
  border-bottom: ${({ active }) => (active ? '2px solid #000000' : 'none')};
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  &:hover {
    background-color: transparent;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  padding: 16px;
  color: #666;
  line-height: 24px;
  background: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  font-size: 14px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background-color: #00132529;
`;

export const AccordionContent = styled.div`
  padding: ${({ theme }) => `${theme?.spacing?.spacing0}`};
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20.57px;
  letter-spacing: 0.16px;
  text-align: left;
  color: #666666;
  a {
    color: #000;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

export const ReadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.spacing40} ${spacing.spacing80}`};
  border-top: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-style: normal;
  ${({ theme }) => theme?.typography?.buttonSmall};
  letter-spacing: 0.1px;
  text-align: center;
  cursor: pointer;
  padding: 4px 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ContentWrapper = styled.div<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? 'none' : '100px')};
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s ease-out;
`;
