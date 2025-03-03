import styled from '@emotion/styled';
import React, { ReactNode, useEffect } from 'react';
import BackArrowIcon from '~/components/Icons/BackArrow';
import useModalRoute from '../Carousel/hooks/useOpenModal';

const ModalContent = styled.div`
  position: fixed;
  max-width: 100%;
  border-radius: 2px;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.15);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: white;

  &.partial-modal {
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    height: auto;
    max-width: 500px;
    overflow: hidden;
  }
  &.stick-to-bottom {
    top: unset;
    bottom: 0;
    margin: auto;
    max-width: 500px;
    transform: translateX(-50%);
    overflow: hidden;
  }
  &.bottom-drawer {
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60vh;
    background: #fff;
    border: none;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
  }
`;

const Overlay = styled.div`
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

const ModalHeader = styled.div<{ centerTitle?: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 3;
  height: 56px;

  ${({ centerTitle }) =>
    centerTitle &&
    `
    justify-content: center;
    
    button {
      position: absolute;
      left: 8px;
    }
  `}
`;

const BackButton = styled.button`
  background: none;
  border: none;
  margin-right: 8px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const ModalContentWrapper = styled.div`
  margin-top: 56px;
  height: calc(100% - 56px);
  overflow-y: auto;
`;

const Modal = ({
  children,
  showHeader = false,
  title,
  onBack,
  centerTitle = false,
  isOpen = false,
}: {
  children: ReactNode;
  showHeader?: boolean;
  title?: string;
  onBack?: () => void;
  centerTitle?: boolean;
  isOpen?: boolean;
}) => {
  const { closeModal, isModalOpan } = useModalRoute({
    onClose: onBack,
    isOpen: isOpen,
  });
  useEffect(() => {
    if (document?.body && isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (document?.body) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isModalOpan) return null;

  return (
    <>
      <ModalContent>
        {showHeader && (
          <ModalHeader centerTitle={centerTitle}>
            <BackButton onClick={closeModal}>
              <BackArrowIcon />
            </BackButton>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
        )}
        <ModalContentWrapper>{children}</ModalContentWrapper>
      </ModalContent>
      <Overlay onClick={closeModal} />
    </>
  );
};

export default Modal;
