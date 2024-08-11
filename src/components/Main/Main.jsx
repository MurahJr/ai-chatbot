import React from "react";
import styles from "./Main.module.css";
import ChatBotCardImg from "../../assets/Chat-bot-bro.svg";
import ResponsiveImg from "../../assets/responsive.svg";
import ConversationalImg from "../../assets/conversational.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Decima's Brand Voice:</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ConversationalImg} alt="ConversationalImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Advanced AI Core</h1>
            <p>
              Decima is built on cutting-edge AI technology, drawing from the latest
              advancements in language models. Powered by state-of-the-art natural
              language processing, Decima is designed to understand and respond to
              a wide array of queries with precision. Its deep learning framework
              allows it to continuously evolve, adapting to new conversations and
              learning from each interaction to deliver more personalized and
              insightful responses.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Engaging Conversationalist</h1>
            <p>
              Decima is more than just a chatbot; it's a dynamic conversationalist
              crafted to engage users in meaningful, context-aware dialogues. Its
              ability to grasp subtle nuances and provide coherent, relevant answers
              makes it an ideal companion for diverse interactions, whether answering
              questions or facilitating thoughtful discussions.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ResponsiveImg} alt="ResponsiveImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Responsive & Clean UI</h1>
            <p>
              Decima’s interface is meticulously designed to offer an intuitive user
              experience, enabling effortless navigation and interaction. The UI is
              not just responsive but also adaptive, providing a fluid experience
              across various devices and screen sizes. This ensures that users can
              engage with Decima in a consistent and enjoyable manner, no matter
              where they are.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.explore}>
        <Link to="/chatbox">
          <button className={styles.btn}>Explore Now !</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
