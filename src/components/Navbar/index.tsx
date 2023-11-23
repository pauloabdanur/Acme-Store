import styles from './styles.module.css';
import logo from '../../assets/acmeLogo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/Products/ProductContext';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ProductContext);
  const { signed, signOut } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.searchBar}></div>
      <div className={styles.navLoginCart}>
        {signed ? (
          <Link to="/">
            <button onClick={() => signOut()}>Logout</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className={styles.navCartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
