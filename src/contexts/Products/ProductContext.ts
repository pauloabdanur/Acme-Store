import { createContext } from 'react';
import { Cart, Product } from '../../types';

interface ProductContextType {
  products: Product[];
  getProductById: (num: number) => Product | undefined;
  cartItems: Cart;
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);
