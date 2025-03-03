import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}
const BackArrowIcon = ({
  width = 28,
  height = 28,
  fillColor = '#111314',
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M19.737 11.158H7.888l3.849-3.849-1.263-1.263L4.52 12l5.954 5.954 1.263-1.263-3.849-3.849h11.849z"
    />
  </svg>
);

export default BackArrowIcon;
