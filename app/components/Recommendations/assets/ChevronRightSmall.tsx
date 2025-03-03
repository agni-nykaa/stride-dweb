import React from 'react';

interface Props {
  fill?: string;
  height?: string;
  width?: string;
}
function ChevronRightSmall({
  fill = 'white',
  height = '24',
  width = '24',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-right-small">
        <path
          id="Icon"
          d="M9.06552 18.9989C8.9261 18.9997 8.78789 18.9726 8.65882 18.9191C8.52975 18.8656 8.41235 18.7867 8.31336 18.6871C8.21407 18.5871 8.13526 18.4682 8.08147 18.3371C8.02769 18.2061 8 18.0656 8 17.9236C8 17.7816 8.02769 17.6411 8.08147 17.5101C8.13526 17.379 8.21407 17.2601 8.31336 17.1601L13.3984 12.0093L8.31336 6.85852C8.11388 6.65033 8.00404 6.37022 8.00801 6.07983C8.01199 5.78944 8.12945 5.51254 8.33455 5.31005C8.53965 5.10756 8.8156 4.99607 9.10169 5.00011C9.38778 5.00414 9.66057 5.12337 9.86006 5.33156L15.6866 11.2458C15.7859 11.3458 15.8647 11.4647 15.9185 11.5958C15.9723 11.7268 16 11.8674 16 12.0093C16 12.1513 15.9723 12.2918 15.9185 12.4229C15.8647 12.5539 15.7859 12.6728 15.6866 12.7728L9.86006 18.6871C9.75609 18.792 9.63179 18.874 9.49503 18.9276C9.35826 18.9813 9.21201 19.0056 9.06552 18.9989Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChevronRightSmall;
