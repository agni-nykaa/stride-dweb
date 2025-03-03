import React from 'react';

interface Props {
  color?: string;
}
const ThumbsUp = ({ color = '#FC2779' }: Props) => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>thumb</title>
    <g
      stroke={color}
      strokeWidth=".8"
      fill="none"
      fillRule="evenodd"
    >
      <path d="M.934 9.09l5.361-.085a.3.3 0 01.305.3v10.87a.3.3 0 01-.3.3H2.283a.3.3 0 01-.298-.262L.641 9.428a.3.3 0 01.293-.337z" />
      <path
        d="M6.6 11.883l3.377-6.799V1.468c1.039-.36 1.987.153 2.845 1.538.859 1.385.698 3.383-.482 5.994h7.897c.863-.003 1.294.429 1.294 1.294 0 .866-.657 1.396-1.973 1.59.99-.084 1.486.377 1.486 1.382 0 1.006-.72 1.52-2.162 1.543 1.064.045 1.596.46 1.596 1.243 0 .784-.78 1.308-2.338 1.572.942.125 1.413.6 1.413 1.425 0 .825-.475 1.3-1.427 1.427-5.74-.087-8.889-.13-9.444-.13-.321 0-.321-.961-.803-.961H6.595l.005-7.502z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default ThumbsUp;
