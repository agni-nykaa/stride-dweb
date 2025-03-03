import { ColorTokens } from '../types/color/aColor';
import { colors } from './gColor';

export const colorTokens: ColorTokens = {
  primary: colors.black600,

  primaryInverse: colors.pink400,

  secondary: colors.pink600,

  secondaryInverse: colors.pink400,

  surface: colors.snow100,
  surface20: colors.snow300,
  surface30: colors.snow400,
  surface40: colors.snow500,
  surface50: colors.snow600,

  surfaceInverse: colors.black400,
  surfaceInverse10: colors.black600,
  surfaceInverse30: colors.black300,
  surfaceInverse40: colors.black200,

  textPrimary: colors.pebble900,

  textInversePrimary: colors.snow100,

  // positive50 has been deprecated, use positive10 instead
  positive: colors.green700,

  // negative50 has been deprecated, use negative10 instead
  negative: colors.red700,
  warning: colors.orange700,
  white: colors.snow100,
};
