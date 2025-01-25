import bavanLogo from "../images/Bavan logo.png";
import styles from "./header.module.css";
import { FaShoppingCart, FaHome, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={bavanLogo} alt="Bavan Designs Logo" />
      </div>

      <div className={styles.header4}>
        <a href="home" target="#">
          <FaHome className={styles.icon} />
          Home
        </a>
        <a href="men">Men</a>
        <a href="women">Women</a>
        <a href="kids">Kids</a>
        <a href="shop">
          {" "}
          <FaShoppingCart className={styles.icon} /> Shop{" "}
        </a>
        <a href="contact">Contact</a>
        <a href="">
          <FaSearch />
        </a>
      </div>
    </div>
  );
}

export default Header;
