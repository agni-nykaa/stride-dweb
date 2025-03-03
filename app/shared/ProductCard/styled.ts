import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  border-top: 1.5px solid ${({ theme }) => theme?.colors?.textOutline};
  border-bottom: 1.5px solid ${({ theme }) => theme?.colors?.textOutline};
`;

export const Image = styled.img`
  height: 64px;
  width: 64px;
  margin: ${({ theme: { spacing } }) => `${spacing.spacing80}`};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme: { spacing } }) => `${spacing.spacing10}`};
  padding: ${({ theme: { spacing } }) => `${spacing.spacing60}`};
  border-left: 1.5px solid ${({ theme }) => theme?.colors?.textOutline};
  width: 100%;
`;

export const Name = styled.h1`
  text-transform: uppercase;
  ${({ theme }) => theme?.typography?.bodyMedium};
`;

export const Price = styled.p`
  ${({ theme }) => theme?.typography?.buttonMedium};
`;

export const ImageContainer = styled.div`
  margin: auto;
`;
