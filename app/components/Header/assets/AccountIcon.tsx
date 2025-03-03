import styled from '@emotion/styled';
import React from 'react';

const Icon = styled.svg`
  circle {
    fill: ##000000;
  }
  path {
    stroke: ##000000;
  }
`;

function Account() {
  return (
    <Icon
      color={'#000000'}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>ic-account</title>
      <g
        id="ic-account"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ic_account"
          transform="translate(4.000000, 3.000000)"
        >
          <path
            d="M4.71,4.3 L4.71,4.19 C4.71,2.37298317 6.18298317,0.9 8,0.9 C9.81701683,0.9 11.29,2.37298317 11.29,4.19 L11.29,4.29 C11.29,6.10701683 9.81701683,7.58 8,7.58 C6.18298317,7.58 4.71,6.10701683 4.71,4.29 L4.71,4.3 Z"
            id="Path"
            stroke="#000000"
            strokeWidth="1.5"
          ></path>
          <circle
            id="Oval"
            fill="#000000"
            fillRule="nonzero"
            cx="15.65"
            cy="18.06"
            r="1"
          ></circle>
          <circle
            id="Oval"
            fill="#000000"
            fillRule="nonzero"
            cx="11.77"
            cy="18.06"
            r="1"
          ></circle>
          <circle
            id="Oval"
            fill="#000000"
            fillRule="nonzero"
            cx="7.88"
            cy="18.06"
            r="1"
          ></circle>
          <path
            d="M4.16,18.24 L1,18.24 C0.785174643,18.24 0.579147974,18.154661 0.427243507,18.0027565 C0.275339041,17.850852 0.189892462,17.6448254 0.189892462,17.43 L0.189892462,15.52 C0.182015162,14.4007779 0.618981212,13.3242274 1.40476473,12.5271916 C2.19054824,11.7301558 3.26077754,11.2779283 4.38,11.27 L11.69,11.27 C13.7812854,11.2805307 15.5462056,12.8280332 15.83,14.9"
            id="Path"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </Icon>
  );
}

export default Account;
