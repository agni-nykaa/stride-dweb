import { colors } from './color/gColor';
import { colorTokens } from './color/aColor';
import { ColorTokens } from './types/color/aColor';
import typography from './typography/gTypography';
import spacing from './spacing/gSpacing';
import { TypoGraphy } from './types/typography/gTypography';
import { getTypography } from './typography/aTypography';
import { Theme } from './types';

type CustomTokens = Partial<{
  colors: Partial<ColorTokens>;
  typography: Partial<TypoGraphy>;
}>;

const createLightTheme = (customTokens: Partial<CustomTokens>): Theme => {
  const updatedTokens = {
    ...colorTokens,
    ...customTokens.colors,
  };

  const typographyTokens = {
    ...typography,
    ...customTokens.typography,
  };

  const theme: Theme = {
    colors: {
      ...colors,
      ...updatedTokens,
    },
    typography: {
      ...typographyTokens,
      ...getTypography(typographyTokens),
    },
    spacing,
  };

  // TODO: replace with deep copy
  return { ...theme };
};

export default createLightTheme;
