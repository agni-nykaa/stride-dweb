import React, { useEffect } from 'react';

import { BOTTOM_SHEET_NAVIGATION, BottomSheetNavigation } from './constants';
import {
  BottomSheetContainer,
  BottomSheetContent,
  CloseButton,
  Backdrop,
} from './styled';
import Handle from '../../components/Icons/Handle';
import useOpenModal from '../Carousel/hooks/useOpenModal';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  noPadding?: boolean;
  showCloseIcon?: boolean;
  navigation?: BottomSheetNavigation;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = true,
  noPadding = false,
  showCloseIcon = true,
  navigation = 'handle',
}) => {
  const { isModalOpan, closeModal } = useOpenModal({ onClose, isOpen });

  useEffect(() => {
    if (isModalOpan) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpan]);

  const handleBackdropClick = () => {
    if (closeOnClickOutside) {
      closeModal();
      onClose();
    }
  };
  const getNavigation = () => {
    switch (navigation) {
      case BOTTOM_SHEET_NAVIGATION.HANDLE:
        return <Handle />;
      default:
        return <></>;
    }
  };
  if (!isModalOpan) return null;

  return (
    <>
      {isModalOpan && <Backdrop onClick={handleBackdropClick} />}
      <BottomSheetContainer isOpen={isModalOpan}>
        {navigation && <div className="navigation">{getNavigation()}</div>}
        {showCloseIcon && (
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        )}
        <BottomSheetContent noPadding={noPadding}>
          {children}
        </BottomSheetContent>
      </BottomSheetContainer>
    </>
  );
};

export default BottomSheet;
