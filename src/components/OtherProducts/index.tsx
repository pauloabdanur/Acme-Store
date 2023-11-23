import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ProductContext } from '../../contexts/Products/ProductContext';
import ItemCard from '../ItemCard';
import { Product } from '../../types';

const OtherProducts = () => {
  const [otherProducts, setOtherProducts] = useState<Product[]>();

  const { products } = useContext(ProductContext);

  useEffect(() => {
    const startIndex = Math.random() * (products.length - 4);
    const endIndex = startIndex + 3;
    setOtherProducts(products.slice(startIndex, endIndex));
  }, []);

  return (
    <div className={styles.otherProducts}>
      <h1>Other Products</h1>
      <hr />
      <div className={styles.productsList}>
        {otherProducts?.map((product, index) => {
          return (
            <ItemCard
              key={index}
              id={product.id}
              name={product.name}
              value={product.value}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
