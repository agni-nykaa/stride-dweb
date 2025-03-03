import { useEffect } from 'react';
import { useLocation, useNavigate } from '@remix-run/react';
import { MODAL_QUERY_PARAM } from '~/constants/PD';

interface useOpenModalProps {
  paramKey?: string;
  paramValue?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const useOpenModal = ({ onClose, isOpen }: useOpenModalProps = {}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { key: MODAL_KEY, value: MODAL_VALUE } = MODAL_QUERY_PARAM;

  const closeModal = () => {
    navigate(-1);
    onClose?.();
  };

  const openModal = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(MODAL_KEY, MODAL_VALUE);
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      state: {
        ...location.state,
        scroll: { x: scrollX, y: scrollY },
      },
    });
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    }
  }, [isOpen]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hasParam = searchParams.has(MODAL_KEY);
    const paramValue = searchParams.get(MODAL_KEY);
    if (!hasParam || paramValue === null) {
      onClose?.();
    }
  }, [location]);

  return {
    isModalOpan:
      (isOpen &&
        new URLSearchParams(location.search).get(MODAL_KEY) === MODAL_VALUE) ||
      false,
    openModal,
    closeModal,
  };
};

export default useOpenModal;
