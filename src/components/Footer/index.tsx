import styles from './styles.module.css';
import acmeLogo from '../../assets/acmeLogo.png';
import instagramIcon from '../../assets/instagram_icon.png';
import pinterestIcon from '../../assets/pintester_icon.png';
import whatsappIcon from '../../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src={acmeLogo} alt="" />
      </div>
      <ul className={styles.links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.socialIcons}>
        <div className={styles.iconsContainer}>
          <img src={instagramIcon} alt="" />
        </div>
        <div className={styles.iconsContainer}>
          <img src={pinterestIcon} alt="" />
        </div>
        <div className={styles.iconsContainer}>
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className={styles.copyright}>
        <hr />
        <p>Copyright @ 2023 Paulo Abdanur. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
