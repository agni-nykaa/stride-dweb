import { FetcherWithComponents, useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { API_STATES } from '~/constants/api';

interface FetcherHandlerProps {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  successHandler: (data: any) => boolean;
}

export function useFetcherHandler({
  onSuccess,
  onError,
  successHandler,
}: FetcherHandlerProps): {
  fetcher: FetcherWithComponents<any>;
  isLoading: boolean;
  isContentLoading: boolean;
} {
  const fetcher = useFetcher();
  const { state, data } = fetcher;
  const [isLoading, setIsLoading] = useState(false);
  const [isContentLoading, setIsContentLoading] = useState(true);

  useEffect(() => {
    if (state === API_STATES.IDLE && data) {
      if (successHandler(data)) {
        setIsLoading(true);
        onSuccess(data);
      } else {
        onError(data.message || 'Operation failed');
      }
      setIsContentLoading(false);
      setIsLoading(false);
    } else if (state === API_STATES.SUBMITTING) {
      setIsLoading(true);
    }
  }, [state]);

  return { fetcher, isLoading, isContentLoading };
}
