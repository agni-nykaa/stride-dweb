/** @jsxImportSource @emotion/react */
import { SHADE_TEXT } from '../constants';
import {
  ShadeColor,
  ShadeName,
  Shade as ShadeContainer,
  ShadeText,
} from './styled';

interface ShadeProps {
  shadeImage: string;
  variantName: string;
}

export default function Shade({ shadeImage, variantName }: ShadeProps) {
  return (
    <ShadeContainer>
      <ShadeText>{SHADE_TEXT}</ShadeText>{' '}
      <ShadeColor
        src={shadeImage}
        alt={variantName}
        data-loading="lazy"
      />{' '}
      <ShadeName>{variantName}</ShadeName>
    </ShadeContainer>
  );
}
