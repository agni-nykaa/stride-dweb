import React from 'react';
import styled from '@emotion/styled';
import { MEDIA_TYPE } from '~/constants/mediaType';

interface HeartFilledProps {
  view?: string;
}

const Path = styled.path<{ view?: string }>`
  fill: ${({ view, theme }) =>
    view === MEDIA_TYPE.VIDEO
      ? theme?.colors?.surface
      : theme?.colors?.surfaceInverse10};
`;

function HeartFilled({ view }: HeartFilledProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        view={view}
        d="M16.8638 3.82041C16.0437 3.1719 15.0142 2.85357 13.9747 2.92708C12.9352 3.00059 11.9598 3.4607 11.2373 4.2183L9.99279 5.50923L8.74829 4.25367C8.03039 3.49084 7.0573 3.02415 6.01769 2.9441C4.97809 2.86404 3.94606 3.17634 3.12173 3.82041C2.68926 4.18521 2.33688 4.63691 2.08704 5.14673C1.8372 5.65655 1.69539 6.21329 1.67066 6.78146C1.64592 7.34964 1.7388 7.91678 1.94337 8.44673C2.14793 8.97669 2.45971 9.45782 2.85881 9.85947L9.99279 17.0834L17.1092 9.90368C17.5166 9.50273 17.8358 9.01981 18.0461 8.48629C18.2565 7.95277 18.3532 7.38058 18.3301 6.80688C18.3069 6.23319 18.1644 5.67082 17.9118 5.15631C17.6592 4.64179 17.3022 4.18664 16.8638 3.82041Z"
      />
    </svg>
  );
}

export default HeartFilled;
