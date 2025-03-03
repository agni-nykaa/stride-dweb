import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing40};
  padding-right: ${({ theme }) => theme.spacing.spacing50};
  padding-left: ${({ theme }) => theme.spacing.spacing0};
  background-color: ${({ theme }) => theme.colors.surface};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.titleSmall};
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const WriteNewButton = styled.button`
  ${({ theme }) => theme.typography.buttonMedium};
  color: ${({ theme }) => theme?.colors?.surfaceInverse10};
  border: none;
  background-color: ${({ theme }) => theme?.colors?.surface};
  padding: ${({ theme }) => theme.spacing.spacing10}
    ${({ theme }) => theme.spacing.spacing0};
`;
