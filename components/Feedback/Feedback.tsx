/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./feedback.module.css";
import Title from "../Title/Title";

interface FeedbackProps {
  avatar: string;
  name: string;
}

const Feedback: React.FC<FeedbackProps> = ({ avatar, name }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackDetails}>
        <Title>{name}</Title>
        <div className={styles.feedbackStars}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div className={styles.feedbackAvatar}>
        <img src={avatar} alt="Avatar" width={50} height={50}/>
      </div>
    </div>
  );
};

export default Feedback;