import { hexToRgba } from '~/utils/colorUtils';
import { BaseTheme } from './types/BaseTheme';
import createLightTheme from '.';

const theme: BaseTheme = {
  colors: {
    primary: '#000',
    secondary: '#4caf50',
    background: '#f5f5f5',
    text: '#001325',
    textPrimary: hexToRgba('#001325', 0.92),
    textSecondary: hexToRgba('#001325', 0.64),
    textDisabled: hexToRgba('#001325', 0.36),
    textOutline: hexToRgba('#001325', 0.16),
  },
  typography: {
    titleXSmall: '1.2em',
    titleSmall: '1.4em',
    titleMedium: '1.6em',
    titleLarge: '1.8em',
    titleXLarge: '2em',
    bodySmall: '1em',
    bodyMedium: '1.2em',
    bodyLarge: '1.4em',
  },
};

export default { ...theme, ...createLightTheme({}) };
