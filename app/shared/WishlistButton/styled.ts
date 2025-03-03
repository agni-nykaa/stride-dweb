import styled from '@emotion/styled';

export const WishlistText = styled.div`
  ${({ theme }) => theme?.typography?.bodyLarge};
  letter-spacing: 0;
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  padding: 0 1.5rem;
  padding: ${({ theme }) =>
    `${theme?.spacing?.spacing0} ${theme?.spacing?.spacing120}`};
`;

export const fullWidth = {
  width: '100%',
};
