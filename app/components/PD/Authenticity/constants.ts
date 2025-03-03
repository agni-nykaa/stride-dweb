import React from 'react';

export const AUTHENTICITY_CONSTANTS = {
  WIDGET_TITLE: 'Authenticity & Return Policy',
  AUTHENTIC: {
    TITLE: '100% Authentic',
    HELPER_TEXT: 'view certificate',
  },
  RETURN_POLICY: {
    TITLE: 'Return policy',
    EASY_TITLE: 'Easy return policy',
    HELPER_TEXT: 'view policy',
  },
  BUTTON_TEXT: 'Okay',
} as const;

export interface InfoItemType {
  icon: React.ReactNode;
  mainText: string;
  helperText: string;
  content?: string;
}
