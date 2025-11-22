import React, { ReactNode } from 'react';
import styles from './result.module.css';

interface ResultProps {
    children: ReactNode;
    type?: 'success' | 'error' | 'info';
}

const Result: React.FC<ResultProps> = ({ children, type = 'info' }) => {
    const classNames = `${styles.result} ${styles[type]}`;
    return <span className={classNames}>{children}</span>;
};

export default Result;