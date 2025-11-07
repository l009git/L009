import React, { ReactNode } from 'react';
import styles from './small.module.css';

interface SmallProps {
  children: ReactNode;
}

const Small: React.FC<SmallProps> = ({ children }) => {
  return <span className={styles.small}>{children}</span>;
};

export default Small;
