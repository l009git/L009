import React, { ReactNode } from 'react';
import styles from './footer.module.css';

interface FooterProps {
    children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {children}
            <section>
                <small>L009 DIGITAL SOLUTIONS LTD - CNPJ: 61.114.588/0001-07.</small>
                <small>Designed and developed by L009.</small>
                <small>All rights reserved © {currentYear}.</small>
            </section>
        </footer>
    );
};

export default Footer;