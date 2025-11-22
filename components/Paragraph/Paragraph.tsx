import React, { ReactNode } from 'react';
import styles from './paragraph.module.css';

interface ParagraphProps {
  children: ReactNode;
  fontStyle?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children , fontStyle = 'normal' }) => {
  return (
    <p className={styles.paragraph} style={{ fontStyle }}>
      {children}
    </p>
  );
};

export default Paragraph;

