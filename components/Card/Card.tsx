import React, { ReactNode, useState, useEffect } from 'react';
import styles from './card.module.css'; 

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [speed, setSpeed] = useState<string | null>(null);

  useEffect(() => {
    const randomSpeed = (Math.random() * 2 + 2).toFixed(2);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSpeed(`${randomSpeed}s`);
  }, []);

  return (
    <div className={styles.card} style={{ '--rotate-speed': speed } as React.CSSProperties}>
      <div className={styles['card-border']}></div>
      <div className={styles['card-container']}>
        {children}
      </div>
    </div>
  );
};

export default Card;
