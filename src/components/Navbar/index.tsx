import styles from './styles.module.css';
import logo from '../../assets/acmeLogo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.navLoginCart}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className={styles.navCartCount}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
