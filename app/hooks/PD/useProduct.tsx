import { createContext, useContext, RefObject } from 'react';

interface ProductContextType {
  recommendationsRef: RefObject<HTMLDivElement> | null;
}

export const ProductContext = createContext<ProductContextType>({
  recommendationsRef: null,
});

export const useProductContext = () => useContext(ProductContext);
