import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;

  .hide-overlay {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  background: #f7f7f7;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #ddd;
`;

export const Body = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  background: #000;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 16px;
  position: relative;
  display: flex;
  top: 1px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;
export const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
