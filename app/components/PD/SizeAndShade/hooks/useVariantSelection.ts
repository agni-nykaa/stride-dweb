import { useState } from 'react';
import { useSearchParams, useNavigate } from '@remix-run/react';
import { logger } from '~/utils/logger';
import {
  CHILDID_MISSING_ERR,
  SKUID_PARAM,
  VARIANT_CHANGE_ERR,
} from '../constants';
import { Variant } from '../types';

export const useVariantSelection = (
  variants: Variant[],
  onSelect?: (index: number) => void,
) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getInitialIndex = () => {
    const skuId = searchParams?.get(SKUID_PARAM);
    if (!skuId) return 0;
    const index = variants?.findIndex((variant) => variant.childId === skuId);
    return index >= 0 ? index : 0;
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(getInitialIndex());

  const handleSelect = (index: number, childId: string) => {
    try {
      if (!childId) {
        logger.error(CHILDID_MISSING_ERR, variants[index]);
        return;
      }

      const params = new URLSearchParams(searchParams);
      if (params) {
        params.set(SKUID_PARAM, childId);
        navigate(`?${params.toString()}`, {
          replace: true,
          preventScrollReset: true,
        });
      }
      setSelectedIndex(index);
      onSelect?.(index);
    } catch (error) {
      logger.error(VARIANT_CHANGE_ERR, error);
    }
  };

  return { selectedIndex, handleSelect };
};
