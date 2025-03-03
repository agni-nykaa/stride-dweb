/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React from 'react';
import { hexToRgba } from '~/utils/colorUtils';

const Container = styled.div`
  padding: ${({ theme }) => theme?.spacing?.spacing80};
  padding-right:${({ theme }) => theme?.spacing?.spacing0}
  border-top: 1px ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.16)};
  border-bottom: 1px ${({ theme }) =>
    hexToRgba(theme?.colors?.textPrimary, 0.16)};
  background-color: ${({ theme }) => theme?.colors?.surface}; ;
`;

const SoldBy = styled.span`
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.64)};
  ${({ theme }) => theme?.typography?.bodyMedium};
`;

const NykaaRetail = styled.span`
  color: ${({ theme }) => hexToRgba(theme?.colors?.textPrimary, 0.92)};
  ${({ theme }) => theme?.typography?.subTitleMedium};
`;

const SoldByComponent: React.FC = () => (
  <Container>
    <SoldBy>Sold by -: </SoldBy>
    <NykaaRetail>Nykaa E retail private limited</NykaaRetail>
  </Container>
);

export default SoldByComponent;
