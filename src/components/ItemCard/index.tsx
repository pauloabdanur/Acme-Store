import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/Products/ProductContext';
import heartFilled from '../../assets/heart_filled.png';
import heartEmpty from '../../assets/heart_empty.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';

interface Props {
  id: number;
  image: string;
  name: string;
  value: string;
}

const ItemCard = ({ id, image, name, value }: Props) => {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(ProductContext);

  const { signed } = useContext(AuthContext);

  const handleAddToFavorites = () => {
    if (signed) {
      isFavorite(id) ? removeFromFavorites(id) : addToFavorites(id);
    } else {
      alert('Apenas usuários logados podem adicionar produtos aos favoritos!');
    }
    isFavorite(id) ? removeFromFavorites(id) : addToFavorites(id);
  };

  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={image} />
      </Link>
      <p>{name}</p>
      <div className={styles.itemBottom}>
        <div className={styles.itemValue}>R${value},00</div>
        <button onClick={handleAddToFavorites}>
          {isFavorite(id) ? (
            <img src={heartFilled} alt="Favorito" />
          ) : (
            <img src={heartEmpty} alt="Adicionar aos favoritos" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
