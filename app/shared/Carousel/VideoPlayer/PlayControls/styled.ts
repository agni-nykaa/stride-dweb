import styled from '@emotion/styled';

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  pointer-events: auto;
  border-radius: 8px;
`;
