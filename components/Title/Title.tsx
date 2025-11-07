import React, { ReactNode } from 'react';
import styles from './title.module.css';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default Title;
