/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import Circle from '~/components/Icons/Circle';

import { Wrapper, DotList, Dot } from './styled';
import { calculateTranslateX } from './utils';
import Polygon from '~/components/Icons/Polygon';

interface DotsProps {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
  videoIndexes: number[];
}

const Dots = ({ count, activeIndex, onClick, videoIndexes }: DotsProps) => {
  const theme:any = useTheme();
  if (count <= 0) return null;

  const translateX = calculateTranslateX(activeIndex, count);
  const renderDotContent = (index: number) => {
    const isActive = index === activeIndex;
    if (videoIndexes?.includes(index)) {
      return (
        <Polygon
          width={6}
          height={6}
          fill={isActive ? theme?.colors?.primary : '#D3D3D3'}
        />
      );
    }
    return (
      <Circle
        height={6}
        width={6}
        fill={isActive ? theme?.colors?.primary : '#D3D3D3'}
      />
    );
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <DotList transform={translateX}>
        {Array.from({ length: count }).map((_, index: number) => (
          <Dot
            key={index}
            onClick={() => onClick(index)}
            role="button"
          >
            {renderDotContent(index)}
          </Dot>
        ))}
      </DotList>
    </Wrapper>
  );
};

export default Dots;
