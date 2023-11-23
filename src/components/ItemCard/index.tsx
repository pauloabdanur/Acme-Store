import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Props {
  id: number;
  image: string;
  name: string;
  value: string;
}

const ItemCard = ({ id, image, name, value }: Props) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`}>
        <img src={image} />
      </Link>
      <p>{name}</p>
      <div className={styles.itemValue}>R${value},00</div>
    </div>
  );
};

export default ItemCard;
