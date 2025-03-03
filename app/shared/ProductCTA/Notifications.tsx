import React from 'react';

import Snackbar from '../Snackbar';
import { Toast } from '../Toast';

interface NotificationManagerProps {
  toast: { show: boolean; message: string };
  snackbar: { show: boolean; message: string; actionText: string };
  onToastDismiss: () => void;
  onSnackbarDismiss: () => void;
  onSnackbarAction: () => void;
}

export default function Notifications({
  toast,
  snackbar,
  onToastDismiss,
  onSnackbarDismiss,
  onSnackbarAction,
}: NotificationManagerProps) {
  return (
    <>
      {toast?.show && (
        <Toast
          message={toast?.message}
          background="black"
          onDismiss={onToastDismiss}
        />
      )}
      {snackbar?.show && (
        <Snackbar
          onActionClick={onSnackbarAction}
          onDismiss={onSnackbarDismiss}
          duration={3000}
          autoHide={true}
          text={snackbar?.message}
          actionText={snackbar?.actionText}
        />
      )}
    </>
  );
}
