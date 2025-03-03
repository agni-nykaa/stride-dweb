import { useState, useCallback } from 'react';
import { useFetcherHandler } from './useFetcherHandler';
import { queryStringFromParams } from '~/utils/api';

interface UsePaginationOptions {
  initialPage?: number;
  pageSize?: number;
  enabled?: boolean;
  defaultData?: any[];
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

interface UsePaginationReturn<T> {
  data: T[];
  isLoading: boolean;
  hasMore: boolean;
  currentPage: number;
  loadMore: () => void;
  reset: () => void;
}

export function usePagination<T>(
  actionRoute: string,
  queryParams: Record<string, any>,
  options: UsePaginationOptions = {},
): UsePaginationReturn<T> {
  const {
    initialPage = 1,
    pageSize = 10,
    enabled = true,
    defaultData = [],
    onSuccess,
    onError,
  } = options;

  const [data, setData] = useState<T[]>(defaultData);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { fetcher } = useFetcherHandler({
    onSuccess: (response) => {
      const { data: newItems } = response;
      setData((prev) => [...prev, ...newItems]);
      setHasMore(newItems.length === pageSize);
      setCurrentPage((prev) => prev + 1);
      setIsLoading(false);
      onSuccess?.(newItems);
    },
    onError: (error) => {
      setIsLoading(false);
      onError?.(error);
    },
    successHandler: (response) => response.status || false,
  });

  const loadMore = useCallback(() => {
    if (!enabled || isLoading || !hasMore) return;

    setIsLoading(true);
    const params = {
      ...queryParams,
      pageNo: currentPage + 1,
    };
    const queryString = queryStringFromParams(params);
    fetcher.load(`${actionRoute}${queryString}`);
  }, [actionRoute, queryParams, currentPage, hasMore, isLoading, enabled]);

  const reset = useCallback(() => {
    setData([]);
    setCurrentPage(initialPage);
    setHasMore(true);
    setIsLoading(false);
  }, [initialPage]);

  return {
    data,
    isLoading,
    hasMore,
    currentPage,
    loadMore,
    reset,
  };
}
