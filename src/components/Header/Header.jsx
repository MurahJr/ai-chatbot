import React from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "Decima: The smartest way to chat"
        </p>
        <p className={styles.subHeading}>
          Revolutionize your chats with Decima, the intelligent companion that understands and elevates your interactions.
        </p>
        <Link to="/chatbox">
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={chatbotBanner} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
