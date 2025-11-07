import React, { ReactNode } from 'react';
import styles from './result.module.css';

interface ResultProps {
  children: ReactNode;
  type?: 'success' | 'error' | 'info';
}

const Result: React.FC<ResultProps> = ({ children, type = 'info' }) => {
  return <span className={`${styles.result} ${styles[type]}`}>{children}</span>;
};

export default Result;
