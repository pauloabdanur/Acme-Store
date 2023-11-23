import { useContext } from 'react';
import styles from './styles.module.css';
import { ProductContext } from '../../contexts/Products/ProductContext';
import removeIcon from '../../assets/cart_cross_icon.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ProductContext);
  const { user, signed } = useContext(AuthContext);

  const handleCheckout = () => {
    if (signed) {
      const cartProducts: string[] = [];
      products.map((product) => {
        if (cartItems[product.id] > 0) {
          cartProducts.push(product.name);
        }
      });

      const checkoutInfo = {
        produtos: cartProducts,
        usuario: user?.name,
        email: user?.email,
      };

      alert(JSON.stringify(checkoutInfo));
    } else {
      alert('Apenas usuários logados podem realizar checkout!');
    }
  };

  return (
    <div className={styles.cartItems}>
      <div className={styles.formatMain}>
        <p>Produtos</p>
        <p>Titulo</p>
        <p>Valor</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {products.map((product, index) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={index}>
              <div className={`${styles.cardFormat} ${styles.formatMain}`}>
                <img
                  src={product.image}
                  alt=""
                  className={styles.productImage}
                />
                <p>{product.name}</p>
                <p>R${product.value},00</p>
                <button className={styles.quantityBt}>
                  {cartItems[product.id]}
                </button>
                <p>R${Number(product.value) * cartItems[product.id]},00</p>
                <img
                  className={styles.removeIcon}
                  src={removeIcon}
                  onClick={() => removeFromCart(product.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartItemsBottom}>
        <div className={styles.cardItemsTotal}>
          <h1>Total Carrinho</h1>
          <div>
            <div className={styles.cardItemsTotalItem}>
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()},00</p>
            </div>
            <hr />
            <div className={styles.cardItemsTotalItem}>
              <p>Taxa de frete</p>
              <p>Grátis</p>
            </div>
            <hr />
            <div className={styles.cardItemsTotalItem}>
              <h3>Total</h3>
              <h3>R${getTotalCartAmount()},00</h3>
            </div>
          </div>
          <button onClick={() => handleCheckout()}>Fazer Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
