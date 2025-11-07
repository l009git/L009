import React, { ReactNode } from 'react';
import styles from './paragraph.module.css';

interface ParagraphProps {
  children: ReactNode;
  fontStyle?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, fontStyle = 'normal' }) => {
  return (
    <span className={styles.paragraph} style={{ fontStyle }}>
      {children}
    </span>
  );
};

export default Paragraph;
