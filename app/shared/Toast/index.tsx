/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import YesTick from '../../components/Icons/YesTick';

interface ToastProps {
  message: string;
  background?: string;
  duration?: number;
  onDismiss?: () => void;
  autoHide?: boolean; // new prop
}

const ToastContainer = styled.div<{ background?: string; isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ background }) => background || '#ff6b00'};
  color: #fff;
  font-weight: 600;
  padding: 16px;
  margin-bottom: ${({ isVisible }) => (isVisible ? '0' : '-80px')};
  transition: all 0.3s;
  z-index: 2;
  &.visible {
    margin-bottom: 0;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const Toast = ({
  message,
  background,
  duration = 3000,
  onDismiss,
  autoHide = true, // default to true for backward compatibility
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss, autoHide]);

  return (
    <ToastContainer
      background={background}
      isVisible={isVisible}
    >
      <MessageContainer>
        <YesTick />
        <span>{message}</span>
      </MessageContainer>
    </ToastContainer>
  );
};
