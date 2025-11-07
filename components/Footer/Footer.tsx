import React from 'react';
import styles from './footer.module.css';

type FooterProps = unknown

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <nav aria-label="Links principais">
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
        <a href="#feedbacks">Feedbacks</a>
        <a href="#">Termos de uso</a>
        <a href="#">Políticas de privacidade</a>
      </nav>
      <section>
        <small>
          L009 SOLUÇÕES DIGITAIS LTDA - CNPJ: 61.114.588/0001-07.
        </small>
        <small>Elaborado e desenvolvido por <strong>L009</strong>.</small>
        <small>Todos os direitos reservados © 2025.</small>
      </section>
    </footer>
  );
};

export default Footer;
