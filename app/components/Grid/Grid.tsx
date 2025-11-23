import React, { ReactNode } from 'react';
import styles from './grid.module.css'; 

interface GridProps {
  columns: 1 | 2 | 3 | 4;
  children: ReactNode;
  id?: string;
}

const Grid: React.FC<GridProps> = ({ columns, children, id }) => {
  return (
    <div id={id} className={styles[`grid-${columns}`]}>
      {children}
    </div>
  );
};

export default Grid;