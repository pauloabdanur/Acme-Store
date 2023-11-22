import styles from './styles.module.css';
import logo from '../../assets/acmeLogo.png';
import cart_icon from '../../assets/cart_icon.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navLoginCart}>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className={styles.navCartCount}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
