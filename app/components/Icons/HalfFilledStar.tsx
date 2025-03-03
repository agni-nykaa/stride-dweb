import React from 'react';

interface HalfFilledStarProps {
  width?: number;
  height?: number;
}

function HalfFilledStar(props: HalfFilledStarProps) {
  const { width = 24, height = 24 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#001325"
        fillOpacity=".92"
        d="m20.5 9-5.2-.7L13 3.5c-.2-.4-.6-.6-1-.6s-.8.2-1 .6L8.7 8.2 3.5 9c-.9.1-1.3 1.3-.6 2l3.8 3.7-.9 5.2c-.1.7.5 1.3 1.1 1.3.2 0 .381-.032.5-.1l4.6-2.5 4.6 2.4c.2.1.4.1.5.1.7 0 1.2-.6 1.1-1.3l-.9-5.2 3.7-3.7c.8-.7.5-1.8-.5-1.9Zm-4.7 5.1.1.8.8 4.5-4-2.1-.7-.4v-12l2 4 .3.7.8.1 4.5.6-3.8 3.8Z"
      />
    </svg>
  );
}

export default HalfFilledStar;
