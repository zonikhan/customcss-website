import React from "react";
import styles from "./Contact.module.css"; // Importing the updated CSS module
// import { Button } from "@mui/material";
// import Button from '@mui/material/Button'; // Import MUI Button

const Contact = () => {
  const GetInTouch = () => {
    window.open("https://www.linkedin.com/in/muhammad-saad-raza-6aa58b2b4", "_blank"); // LinkedIn profile link
  };

  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <h1 className={styles["contact-title"]}>Contact Me</h1>
        <p className={styles["contact-description"]}>
          You&apos;re welcome to contact me via any of the following methods:
        </p>

        {/* Contact Info */}
        <div className={styles["contact-info"]}>
          <p>📞 Phone: 03358191871</p>
          <p>📧 Email: khanzoni@361gmail.com</p>
          <p>🏠 Address house num A 75 zmamnabad 36.B.Area, Karachi</p>
        </div>

        {/* MUI Button with LinkedIn redirect */}
        <button
          onClick={GetInTouch}
          className={styles["contact-button"]} // Keep the custom styling for the button
        >
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Contact;