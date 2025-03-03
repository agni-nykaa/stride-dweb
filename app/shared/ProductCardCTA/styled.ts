import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  bottom: ${({ theme }) => theme?.spacing?.spacing0};
  left: 0;
  right: 0;
  background: ${({ theme }) => theme?.colors?.surface};
  display: flex;
  gap: ${({ theme }) => theme?.spacing?.spacing40};
  align-items: center;
`;

export const wishlistButtonStyle = {
  padding: '4px',
};

export const addToBagButtonStyle = (theme: Theme) => ({
  padding: `${theme?.spacing?.spacing40} ${theme?.spacing?.spacing40}`,
  maxWidth: '110px',
  ...theme?.typography?.buttonSmall,
});

export const ButtonText = styled.span``;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
