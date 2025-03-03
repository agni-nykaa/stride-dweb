import { useEffect, useRef, ReactNode } from 'react';
import styled from '@emotion/styled';

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading?: boolean;
  children: ReactNode;
  threshold?: number;
  LoadingComponent?: ReactNode;
  className?: string;
  disabled?: boolean;
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const DefaultLoader = () => <LoaderWrapper>Loading more...</LoaderWrapper>;

const InfiniteScroll = ({
  onLoadMore,
  hasMore,
  isLoading = false,
  children,
  threshold = 0.1,
  LoadingComponent = <DefaultLoader />,
  className,
  disabled = false,
}: InfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      {
        threshold,
        rootMargin: '100px', // Load more before reaching the end
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore, threshold, disabled]);

  return (
    <div className={className}>
      {children}
      {!disabled && <div ref={loaderRef}>{isLoading && LoadingComponent}</div>}
    </div>
  );
};

export default InfiniteScroll;
