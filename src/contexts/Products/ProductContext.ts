import { createContext } from 'react';
import { Cart, Product } from '../../types';

interface ProductContextType {
  products: Product[];
  getProductById: (num: number) => Product | undefined;
  cartItems: Cart;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);
