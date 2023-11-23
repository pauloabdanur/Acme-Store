import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/productUtils';
import { ProductContext } from './ProductContext';
import { Product } from '../../types';

interface Props {
  children: JSX.Element;
}

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await fetchProducts();
      setProducts(newProducts);
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
