import styles from './infinite.module.css';
import React from 'react';

interface CSSVarProps extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

const Infinite = function() {
  const spans = Array.from({ length: 21 }, (_, i) => (
    <span key={i} style={{ '--i': i } as CSSVarProps}></span>
  ));

  return (
    <section className={styles.infinite} aria-label="Logotipo Animado da L009">
      <div className={styles.infiniteLetter} aria-hidden="true" title="Letra L do logotipo">L</div>
      <div
        className={styles.infiniteContainer} role="presentation" aria-hidden="true" title="Animação do logotipo">
        <div className={styles.infiniteCircle} aria-hidden="true" title="Círculo decorativo">
          {spans}
        </div>
        <div className={styles.infiniteCircle} aria-hidden="true" title="Círculo decorativo">
          {spans}
        </div>
      </div>
      <div className={styles.infiniteLetter} aria-hidden="true" title="Número 9 do logotipo">9</div>
    </section>
  );
}

export default Infinite;