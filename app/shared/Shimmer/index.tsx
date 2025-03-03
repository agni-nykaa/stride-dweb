import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { SHIMMER_OPTIONS } from './constants';

interface ShimmerWrapperProps {
  height?: string;
  width?: string;
  show?: boolean;
  animationDuration?: string;
  baseColor?: string;
  highlightColor?: string;
  backgroundColor?: string;
}

const ShimmerContainer = styled.div<ShimmerWrapperProps>`
  display: block;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};

  @keyframes shimmerAnimation {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  ${({ animationDuration, baseColor, highlightColor, backgroundColor }) =>
    `
    animation-duration: ${animationDuration || '1s'};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmerAnimation;
    animation-timing-function: linear;
    background: linear-gradient(
      to right,
      ${baseColor || '#eeeeee'} 8%,
      ${highlightColor || '#dddddd'} 18%,
      ${backgroundColor || '#eeeeee'} 33%
    );
    background-size: 800px 104px;
    position: relative;
  `}
`;

interface ShimmerProps extends ShimmerWrapperProps {
  children: ReactNode;
}

const Shimmer = ({
  children,
  show = SHIMMER_OPTIONS.show,
  height = SHIMMER_OPTIONS.height,
  width = SHIMMER_OPTIONS.width,
  animationDuration = SHIMMER_OPTIONS.animationDuration,
  baseColor = SHIMMER_OPTIONS.baseColor,
  highlightColor = SHIMMER_OPTIONS.highlightColor,
  backgroundColor = SHIMMER_OPTIONS.backgroundColor,
}: ShimmerProps) => (
  <>
    {show ? (
      <ShimmerContainer
        height={height}
        width={width}
        animationDuration={animationDuration}
        baseColor={baseColor}
        highlightColor={highlightColor}
        backgroundColor={backgroundColor}
      />
    ) : (
      children
    )}
  </>
);

export default Shimmer;
