import React from "react";
import styles from "../Footer/Footer.module.css"; // Import custom CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 Rabia arif. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;