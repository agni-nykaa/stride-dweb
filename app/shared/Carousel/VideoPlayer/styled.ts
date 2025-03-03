import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  background: black;
`;

export const ControlsContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
`;
