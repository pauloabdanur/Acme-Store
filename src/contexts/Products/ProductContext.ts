import { createContext } from 'react';
import { Product } from '../../types';

interface ProductContextType {
  products: Product[];
  getProductById: (num: number) => Product | undefined;
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);
