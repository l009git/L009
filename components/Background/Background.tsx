import React from 'react';
import styles from './background.module.css'; 

type BackgroundProps = unknown

const Background: React.FC<BackgroundProps> = () => {
  return (
    <div className={styles.background}></div>
  );
};

export default Background;
