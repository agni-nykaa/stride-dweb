import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1.5px solid black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: none;
  height: 24px;
  text-align: center;
  margin-bottom: -5px;
`;

export const Text = styled.span`
  ${({ theme }) => theme?.typography?.subTitleSmall};
`;
