import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  width: 100%;
  margin: ${({ theme }) => theme?.spacing?.spacing0} auto;
  min-height: 48px;
`;

export const CloseIconWrapper = styled.div<{ isVideo: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${({ theme }) => theme?.spacing?.spacing40};
  position: absolute;
  right: 16px;
  svg {
    width: 16px;
    height: 16px;
  }
  ${({ isVideo }) =>
    isVideo &&
    `
    svg path {
      fill: white;
    }
  `}
`;
export const VideoOption = styled.div`
  svg path {
    fill: white;
  }
`;
