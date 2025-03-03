import styled from '@emotion/styled';
import { hexToRgba } from '~/utils/colorUtils';

export const Container = styled.div`
  padding: ${({ theme }) => theme?.spacing?.spacing0}
    ${({ theme }) => theme?.spacing?.spacing40}
    ${({ theme }) => theme?.spacing?.spacing60}
    ${({ theme }) => theme?.spacing?.spacing50};
  background: ${({ theme }) => theme?.colors?.surface};
  color: rgb(0, 19, 37);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const SectionStyle = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  border-radius: 8px;
  padding: ${({ theme }) => theme?.spacing?.spacing30}
    ${({ theme }) => theme?.spacing?.spacing40};
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: ${({ theme }) => theme?.spacing?.spacing40};
  &:nth-of-type(1) {
    margin-right: 10px;
  }
`;

export const HelperText = styled.div`
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  ${({ theme }) => theme?.typography?.bodyXSmall}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyleMain = styled.div`
  color: ${({ theme }) => theme?.colors?.textPrimary};
  ${({ theme }) => theme?.typography?.buttonSmall}
`;
