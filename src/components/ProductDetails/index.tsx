import { Product } from '../../types';
import styles from './styles.module.css';
import starIcon from '../../assets/star_icon.png';
import emptyStar from '../../assets/star_dull_icon.png';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/Products/ProductContext';

interface Props {
  product: Product;
}

const ProductDetails = ({ product }: Props) => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className={styles.productDetails}>
      <div className={styles.displayLeft}>
        <div className={styles.imageList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={styles.productImage}>
          <img className={styles.mainImage} src={product.image} alt="" />
        </div>
      </div>
      <div className={styles.displayRight}>
        <h1>{product.name}</h1>
        <div className={styles.starRating}>
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={emptyStar} alt="" />
          <p>(135 avaliações)</p>
        </div>
        <div className={styles.productValues}>
          <div className={styles.oldValue}>
            R${Number(product.value) + 100},00
          </div>
          <div className={styles.newValue}>R${product.value},00</div>
        </div>
        <div className={styles.productDescription}>{product.description}</div>
        <div className={styles.productSizes}>
          <h1>Select Size</h1>
          <div className={styles.sizeOptions}>
            <div>P</div>
            <div>M</div>
            <div>G</div>
            <div>XG</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
