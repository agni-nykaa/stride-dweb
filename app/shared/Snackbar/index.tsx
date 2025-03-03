/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect } from 'react';

const SnackbarStyles = styled.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  background: #1b1e21;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 16px;
`;

const MessageStyles = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
`;

const ActionStyles = styled.div`
  color: #f061a7;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

interface SnackbarProps {
  onActionClick: () => void;
  onDismiss: () => void;
  duration?: number;
  autoHide?: boolean;
  text: string;
  actionText: string;
}

const Snackbar = ({
  onActionClick,
  onDismiss,
  duration = 3000,
  autoHide = true,
  text,
  actionText,
}: SnackbarProps) => {
  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        onDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoHide, duration, onDismiss]);

  return (
    <SnackbarStyles>
      {text && <MessageStyles>{text}</MessageStyles>}
      {actionText && (
        <ActionStyles onClick={onActionClick}>{actionText}</ActionStyles>
      )}
    </SnackbarStyles>
  );
};

export default Snackbar;
