import styled from '@emotion/styled';

interface BottomSheetContainerProps {
  isOpen: boolean;
}

interface BottomSheetContentProps {
  noPadding?: boolean;
}

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const BottomSheetContainer = styled.div<BottomSheetContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: transform 0.3s ease-out;
  transform: translateY(${(props) => (props.isOpen ? '0' : '100%')});
  .navigation {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    svg {
      position: relative;
      margin: 1rem 1.25rem;
      cursor: pointer;
    }
  }
  z-index: 6;
`;

export const BottomSheetContent = styled.div<BottomSheetContentProps>`
  padding-top: ${(props) => (props.noPadding ? '0' : '35px')};
  padding-bottom: ${(props) => (props.noPadding ? '0' : '16px')};
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
