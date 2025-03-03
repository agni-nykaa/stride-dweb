import React from 'react';

interface PauseProps {
  width?: number;
  height?: number;
}

const PauseIcon: React.FC<PauseProps> = ({ width = 21, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0266 10.8667L2.71993 0.20001C1.8266 -0.346657 0.679932 0.293343 0.679932 1.33334V22.6667C0.679932 23.7067 1.8266 24.3467 2.7066 23.8L20.0133 13.1333C20.8666 12.6133 20.8666 11.3867 20.0266 10.8667Z"
      fill="white"
    />
  </svg>
);

export default PauseIcon;
