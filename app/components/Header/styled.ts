import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme?.colors?.surface};
  position: sticky;
  z-index: 3;
  top: ${({ theme }) => theme?.spacing?.spacing0};
  padding: ${({ theme: { spacing } }) =>
    `${spacing?.spacing40} ${spacing?.spacing100}`};
`;

export const Top = styled.div`
  padding: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.spacing40};
`;

export const BackButton = styled.button`
  border: none;
  position: relative;
  background: ${({ theme }) => theme?.colors?.surface};
  top: ${({ theme }) => theme?.spacing?.spacing10};
`;

export const Logo = styled.a`
  max-width: 120px;
  svg rect {
    fill: ${({ color }) => color};
  }
  svg {
    vertical-align: middle;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  gap: ${({ theme }) => theme?.spacing?.spacing120};
`;

export const Button = styled.button<{ isLight?: boolean }>`
  position: relative;
  border: none;
  position: relative;
  top: 1px;
  background: ${({ theme }) => theme?.colors?.surface};
  ${({ isLight }) =>
    isLight &&
    `
    background: transparent;
  `};
`;

export const Link = styled.div`
  background: transparent;
  border: none;
`;

export const MenuWrapper = styled.div`
  position: relative;
`;

export const MenuButton = styled.button`
  background: ${({ theme }) => theme?.colors?.surface};
  border: none;
  display: flex;
  align-content: center;
`;

export const DropdownMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => hexToRgba(theme?.colors?.surfaceInverse, 0.4)};
  ${({ theme }) => theme?.typography?.bodyLarge};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 5;

  .list {
    position: absolute;
    top: 55px;
    right: 13px;
    display: inline-block;
    list-style: none;
    padding: ${({ theme }) => theme?.spacing?.spacing0};
    min-width: 160px;
    background: ${({ theme }) => theme?.colors?.surface};
    border-radius: 3px;
    .list-item {
      display: flex;
      border-bottom: 1px solid #f5f5f5;
      &:last-child {
        border-bottom: none;
      }
    }

    .link {
      display: flex;
      align-items: center;
      padding: ${({ theme: { spacing } }) =>
        `${spacing?.spacing20} ${spacing?.spacing100}`};
      text-decoration: none;
      height: 44px;
      color: ${({ theme }) => theme?.colors?.textPrimary};
    }
  }
`;

export const MenuLink = styled.a`
  height: 44px;
  line-height: 44px;
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const CartCounter = styled.span`
  ${({ theme }) => theme?.typography?.labelSmall};
  display: flex;
  width: 23px;
  height: 16px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme?.colors?.white};
  line-height: normal;
  position: absolute;
  top: -4px;
  right: -12px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.colors?.textPrimary};
`;
