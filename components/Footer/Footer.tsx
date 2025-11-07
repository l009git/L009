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
        <small>L009 SOLUÇÕES DIGITAIS LTDA - CNPJ: 61.114.588/0001-07.</small>
        <small>Elaborado e desenvolvido por <strong>L009</strong>.</small>
        <small>Todos os direitos reservados © {currentYear}.</small>
      </section>
    </footer>
  );
};

export default Footer;