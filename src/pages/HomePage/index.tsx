import { Product } from '../../types';
import { fetchProducts } from '../../utils/productUtils';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ItemCard from '../../components/ItemCard';
import example from '../../assets/example.png';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await fetchProducts();
      setProducts(newProducts);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1> Bem vindo a Acme Inc. Store!</h1>
      <hr />
      <div className={styles.productItem}>
        {products?.map((product, index) => (
          <ItemCard
            key={index}
            name={product.name}
            value={product.value}
            image={example}
          />
        ))}
      </div>
    </div>
  );
}
