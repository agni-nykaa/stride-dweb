import { useEffect } from 'react';
import { useLocation, useNavigate } from '@remix-run/react';
import { MODAL_QUERY_PARAM } from '~/constants/PD';

const useRemoveOpenModal = () => {
  const location = useLocation();
  const { key: MODAL_KEY, value: MODAL_VALUE } = MODAL_QUERY_PARAM;
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hasParam = searchParams.has(MODAL_KEY);
    const queryValue = searchParams.get(MODAL_KEY);

    if (hasParam && queryValue === MODAL_VALUE) {
      if (window.history.length <= 1 || document.referrer === '') {
        searchParams.delete(MODAL_KEY);
        const searchParamsData = searchParams.toString();
        const newUrl = `${location.pathname}${
          searchParamsData ? `?${searchParamsData}` : ''
        }`;
        navigate(newUrl, { replace: true });
      } else {
        navigate(-1);
      }
    }
  }, []);

  useEffect(() => {
    if (location.state?.scroll) {
      window.scrollTo(location.state.scroll.x, location.state.scroll.y);
    }
  }, [location]);
};

export default useRemoveOpenModal;
