import React from 'react';

interface PlayProps {
  width?: number;
  height?: number;
}

const Play: React.FC<PlayProps> = ({ width = 40, height = 40 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.8333 35H24.1667C23.25 35 22.5 34.25 22.5 33.3333V6.66667C22.5 5.75 23.25 5 24.1667 5H30.8333C31.75 5 32.5 5.75 32.5 6.66667V33.3333C32.5 34.25 31.75 35 30.8333 35Z"
      fill="white"
    />
    <path
      d="M15.8333 35H9.16667C8.25 35 7.5 34.25 7.5 33.3333V6.66667C7.5 5.75 8.25 5 9.16667 5H15.8333C16.75 5 17.5 5.75 17.5 6.66667V33.3333C17.5 34.25 16.75 35 15.8333 35Z"
      fill="white"
    />
  </svg>
);

export default Play;
