import * as React from 'react';

interface Props {
  color?: string;
}
const RatingSvg = ({ color = '#FFF' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
  >
    <title>star</title>
    <path
      fill={color}
      d="M2.555 11.878c-.05 0-.1-.025-.15-.05a.277.277 0 01-.1-.275l1.098-4.092L.109 4.79c-.1-.05-.125-.175-.1-.275a.24.24 0 01.225-.174l4.242-.225L5.998.15c.05-.075.15-.15.25-.15s.2.075.225.15l1.522 3.967 4.242.225c.1 0 .2.075.225.174.025.1 0 .2-.075.275L9.093 7.46l1.098 4.092c.025.1 0 .2-.1.275-.075.05-.2.075-.274 0L6.248 9.532l-3.569 2.296c-.05.05-.075.05-.124.05z"
    />
  </svg>
);
export default RatingSvg;
