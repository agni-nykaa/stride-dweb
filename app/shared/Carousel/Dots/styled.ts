import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 50px;
`;

export const DotList = styled.ul<{ transform: number }>`
  display: flex;
  transform: translateX(${(props) => props.transform}px);
  transition: all 0.2s ease 0s;
  gap: ${({ theme }) => theme?.spacing?.spacing20};
`;

export const Dot = styled.li`
  display: flex;
  align-items: center;
  line-height: 0;
`;
