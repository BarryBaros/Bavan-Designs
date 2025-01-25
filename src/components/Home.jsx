import styles from "./home.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1 className={styles.title}> BAVAN DESIGNS</h1>
        <p>We Dress you for the Occasion</p>
      </div>

      {/* <button className={styles.orderbtn}>ORDER</button> */}

      <div className={styles.socialfooter}>
        <div className={styles.copyright}>
          &copy; 2025 Bavan Designs. All rights reserved.
        </div>
        <footer className={styles.socialmedia}>
          <a
            href="https://www.facebook.com/bavandesigns"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@bavandesigns?_t=ZM-8tJRWEdImdp&_r=1"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </footer>
      </div>
    </div>
  );
}
