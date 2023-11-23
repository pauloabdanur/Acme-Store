import styles from './styles.module.css';

interface Props {
  image: string;
  name: string;
  value: string;
}

const ItemCard = ({ image, name, value }: Props) => {
  return (
    <div className={styles.item}>
      <img src={image} />
      <p>{name}</p>
      <div className={styles.itemValue}>R${value},00</div>
    </div>
  );
};

export default ItemCard;
