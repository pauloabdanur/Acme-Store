import Navbar from '../../components/Navbar';
import useAuth from '../../hooks/useAuth';
import { Product } from '../../types';
import { fetchProducts } from '../../utils/productUtils';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await fetchProducts();
      setProducts(newProducts);
    };

    console.log(user);

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Bem vindo! {user?.name}</h2>
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              <h2>Nome: </h2>
              <p>{product.name}</p>
              <h2>Descrição: </h2>
              <p>{product.description}</p>
              <h2>Valor: </h2>
              <p>R${product.value},00</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
