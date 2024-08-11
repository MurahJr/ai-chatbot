import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          &copy; {new Date().getFullYear()} Decima. Designed By{" "}
          <a href="https://linkedin.com/in/tafadzwa-muranda">Tafadzwa Muranda</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="https://x.com/MurahJr">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/MurahJr">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/tafadzwa-muranda">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
