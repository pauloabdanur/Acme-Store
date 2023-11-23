import { createContext } from 'react';
import { Product } from '../../types';

interface ProductContextType {
  products: Product[];
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);
