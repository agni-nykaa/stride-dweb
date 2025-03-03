import React from 'react';

interface ChevronDownSmallProps {
  color?: string;
  width?: number;
  height?: number;
}

function ChevronDownSmall({
  color = '#001325',
  width = 24,
  height = 24,
}: ChevronDownSmallProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.9988C11.8587 15.9996 11.7186 15.9727 11.5877 15.9196C11.4569 15.8665 11.3379 15.7883 11.2375 15.6894L5.33112 9.86502C5.1232 9.66415 5.00413 9.38946 5.00011 9.10139C4.99608 8.81331 5.10742 8.53544 5.30964 8.32891C5.51186 8.12238 5.78839 8.00411 6.07839 8.0001C6.3684 7.9961 6.64813 8.1067 6.85605 8.30758L12 13.428L17.144 8.30758C17.3519 8.1067 17.6316 7.9961 17.9216 8.0001C18.2116 8.00411 18.4881 8.12238 18.6904 8.32891C18.8926 8.53544 19.0039 8.81331 18.9999 9.10139C18.9959 9.38946 18.8768 9.66415 18.6689 9.86502L12.7625 15.7321C12.553 15.9163 12.2794 16.0119 12 15.9988Z"
        fill={color}
        fillOpacity="0.92"
      />
    </svg>
  );
}

export default ChevronDownSmall;
