import { Theme as EmotionTheme } from '@emotion/react';

interface BaseTheme extends EmotionTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    textOutline: string;
  };
  typography: {
    titleXSmall: string;
    titleSmall: string;
    titleMedium: string;
    titleLarge: string;
    titleXLarge: string;
    bodySmall: string;
    bodyMedium: string;
    bodyLarge: string;
  };
}

export type { BaseTheme };
