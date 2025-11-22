import React, { ReactNode } from 'react';
import styles from './small.module.css';

interface SmallProps {
  children: ReactNode;
}

const Small: React.FC<SmallProps> = ({ children }) => {
  return (
      <small className={styles.small}> 
          {children}
      </small>
  );
};

export default Small;
