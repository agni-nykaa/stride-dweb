import { Theme as EmotionTheme } from '@emotion/react';
import { BaseTheme } from '../themes/types/BaseTheme';
import baseTheme from '~/themes/baseTheme';

class ThemeFactory {
  static initialize(): BaseTheme {
    return baseTheme;
  }

  static extendTheme(customTheme?: Partial<BaseTheme>): BaseTheme {
    if (customTheme) {
      return {
        ...baseTheme,
        colors: {
          ...baseTheme?.colors,
          ...customTheme?.colors,
        },
        typography: {
          ...baseTheme?.typography,
          ...customTheme?.typography,
        },
      };
    }
    return baseTheme;
  }
}

export default ThemeFactory;
