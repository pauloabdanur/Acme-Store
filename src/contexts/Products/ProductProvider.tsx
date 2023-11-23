import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/productUtils';
import { ProductContext } from './ProductContext';
import { Product } from '../../types';

interface Props {
  children: JSX.Element;
}

export const ProductProvider = ({ children }: Props) => {
  const storedProducts = localStorage.getItem('products');
  const initialProducts: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  const [products, setProducts] = useState<Product[]>(initialProducts);

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
  }, [products]);

  const getProductById = (productId: number): Product | undefined => {
    return products.find((product) => product.id === productId);
  };

  return (
    <ProductContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
