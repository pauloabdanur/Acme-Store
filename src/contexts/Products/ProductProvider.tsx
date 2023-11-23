import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/productUtils';
import { ProductContext } from './ProductContext';
import { Cart, Product } from '../../types';

interface Props {
  children: JSX.Element;
}

export const ProductProvider = ({ children }: Props) => {
  const storedProducts = localStorage.getItem('products');
  const initialProducts: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  const getDefaultCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart: Cart = {};
    if (storedCart) {
      cart = JSON.parse(storedCart);
    } else {
      for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
      }
    }

    return cart;
  };

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [favoritesInLocalStorage, setFavoritesInLocalStorage] = useState<
    number[]
  >([]);
  const [favorites, setFavorites] = useState<number[]>(favoritesInLocalStorage);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    const initialFavorites: number[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    setFavorites(initialFavorites);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newProducts = await fetchProducts();
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const addToFavorites = (id: number) => {
    setFavorites((prevFavorites) => [...prevFavorites, id]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== id)
    );
    setFavoritesInLocalStorage((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((favId) => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isFavorite = (id: number): boolean => {
    return favorites.includes(id);
  };

  const addToCart = (id: number) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [id]: prev[id] - 1 };
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += Number(itemInfo?.value) * cartItems[item];
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const getProductById = (productId: number): Product | undefined => {
    return products.find((product) => product.id === productId);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProductById,
        cartItems,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
