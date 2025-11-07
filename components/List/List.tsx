import React, { ReactNode } from 'react';
import styles from './list.module.css';

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
};

export default List;