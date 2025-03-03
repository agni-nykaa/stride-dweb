import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';

const SwipeContainer = styled.div<{ currentIndex: number; dragOffset: number }>`
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${({ currentIndex, dragOffset }) =>
    `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`};
`;

interface SwipeableContainerProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  totalItems: number;
  hasMore?: boolean;
  loadMore?: () => void;
  children: React.ReactNode;
}

const SwipeableContainer = ({
  currentIndex,
  setCurrentIndex,
  totalItems,
  hasMore,
  loadMore,
  children,
}: SwipeableContainerProps) => {
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const handleTouchStart = (e: any) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (dragStart !== null) {
      const currentX = e.touches[0].clientX;
      setDragOffset(currentX - dragStart);
    }
  };

  const handleTouchEnd = () => {
    if (dragStart !== null) {
      if (dragOffset < -50) {
        setCurrentIndex(
          onSwipeLeft(currentIndex, totalItems, hasMore, loadMore),
        );
      } else if (dragOffset > 50) {
        setCurrentIndex(onSwipeRight(currentIndex));
      }
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const handleMouseDown = (e: any) => {
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (dragStart !== null) {
      const currentX = e.clientX;
      setDragOffset(currentX - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (dragStart !== null) {
      // If dragOffset is less than -50, user swiped left
      if (dragOffset < -50) {
        setCurrentIndex(
          onSwipeLeft(currentIndex, totalItems, hasMore, loadMore),
        );
        // If dragOffset is greater than 50, user swiped right
      } else if (dragOffset > 50) {
        setCurrentIndex(onSwipeRight(currentIndex));
      }
    }
    setDragStart(null);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (dragStart !== null) {
      // If dragOffset is less than -50, user swiped left
      if (dragOffset < -50) {
        setCurrentIndex(
          onSwipeLeft(currentIndex, totalItems, hasMore, loadMore),
        );
        // If dragOffset is greater than 50, user swiped right
      } else if (dragOffset > 50) {
        setCurrentIndex(onSwipeRight(currentIndex));
      }
    }
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <SwipeContainer
      currentIndex={currentIndex}
      dragOffset={dragOffset}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </SwipeContainer>
  );
};

const onSwipeRight = (activeIndex: number): number => activeIndex > 0 ? activeIndex - 1 : activeIndex;

const onSwipeLeft = (
  activeIndex: number,
  totalItems: number,
  hasMore?: boolean,
  loadMore?: () => void,
): number => {
  if (activeIndex < totalItems - 1) {
    return activeIndex + 1;
  } else if (hasMore) {
    loadMore && loadMore();
  }
  return activeIndex;
};

export default SwipeableContainer;
