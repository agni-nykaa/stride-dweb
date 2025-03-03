import { useNavigate, useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { ProductVariant } from '~/types/PD';
import { handleSkuIdInUrl } from '~/utils/PD';

interface UseUpdateSkuIdProps {
  currentSkuData: ProductVariant | null;
  parentId: string;
}

export const useUpdateSkuId = ({
  currentSkuData,
  parentId,
}: UseUpdateSkuIdProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentSkuData) {
      const newUrl = handleSkuIdInUrl({
        currentSku: currentSkuData,
        parentId,
        pathname: location?.pathname,
        search: location?.search,
      });

      if (newUrl) {
        navigate(newUrl, { replace: true });
      }
    }
  }, [parentId]);
};
