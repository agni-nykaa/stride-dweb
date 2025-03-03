import { Spacing } from '../spacing/aSpacing';
import { TypoGraphy } from './typography/gTypography';
import { ColorTokens } from './color/aColor';

export type Theme = {
  colors: ColorTokens;
  typography: TypoGraphy;
  spacing: Spacing;
};
