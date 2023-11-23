import { Product } from '../../types';
import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import ItemCard from '../../components/ItemCard';
import example from '../../assets/example.png';
import { ProductContext } from '../../contexts/Products/ProductContext';

export default function Home() {
  const { products } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const productsPerPage = 9;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const newVisibleProducts = products.slice(startIndex, endIndex);
    setVisibleProducts((prevVisibleProducts) => [
      ...prevVisibleProducts,
      ...newVisibleProducts,
    ]);
  }, [currentPage, products]);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.container}>
      <h1> Bem vindo a Acme Inc. Store!</h1>
      <hr />
      <div className={styles.productItem}>
        {visibleProducts?.map((product, index) => (
          <ItemCard
            key={index}
            name={product.name}
            value={product.value}
            image={example}
          />
        ))}
      </div>
      {visibleProducts.length < products.length && (
        <button className={styles.showMore} onClick={handleShowMore}>
          Mostrar mais
        </button>
      )}
    </div>
  );
}
