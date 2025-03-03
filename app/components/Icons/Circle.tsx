/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const StyledPath = styled.path<{ fill?: string }>`
  fill: ${props => props.fill || '#D3D3D3'};
`;

interface CircleProps {
  height: number;
  width: number;
  fill?: string;
}

const Circle = ({ height, width, fill }: CircleProps) => (
  <StyledSvg
    width={width}
    height={height}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <StyledPath
      fill={fill}
      d="M4 0.5C2.06722 0.5 0.5 2.06722 0.5 4C0.5 5.93278 2.06722 7.5 4 7.5C5.93278 7.5 7.5 5.93278 7.5 4C7.5 2.06722 5.93278 0.5 4 0.5Z"
    />
  </StyledSvg>
);

export default Circle;
