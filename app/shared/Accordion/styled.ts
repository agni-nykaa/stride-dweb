import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-content: flex-start;
  background: ${({ theme }) => theme?.colors?.surface};
  cursor: pointer;
  border-bottom: 1px solid
    ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
`;

export const Header = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ theme }) => theme?.spacing?.spacing60};
  padding: ${({ theme }) => `${theme?.spacing?.spacing80}`};
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 2;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: 'pointer';
  ${({ theme }) => theme?.typography?.titleXSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${({ theme }) => theme?.typography?.bodySmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
`;

export const ChevronWrapper = styled.div`
  svg {
    path {
      fill: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
    }
  }
`;

export const Children = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  transition: height 0.25s linear;
  overflow: hidden;
`;
