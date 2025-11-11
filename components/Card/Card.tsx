import React, { ReactNode, useState, useEffect, useRef } from 'react';
import styles from './card.module.css'; 

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [speed, setSpeed] = useState<string | null>(null);
  const [isHover, setIsHover] = useState(false); // Estado para controlar a classe card-hover
  const cardRef = useRef<HTMLDivElement>(null); // Ref para o elemento DOM do card

  // 1. Define a velocidade de rotação
  useEffect(() => {
    const randomSpeed = (Math.random() * 2 + 2).toFixed(2);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSpeed(`${randomSpeed}s`);
  }, []);

  // 2. Lógica do Intersection Observer
  useEffect(() => {
    const observerRef = cardRef.current;
    if (!observerRef) return;

    // Calcula a posição central como limite (threshold).
    // Para simplificar, vamos usar 50% da viewport como referência.
    // Você pode ajustar 'rootMargin' para refinar o "centro".
    const options = {
      root: null, // viewport
      rootMargin: '-40% 0px -40% 0px', // O card deve estar 40% acima e 40% abaixo do centro para ser considerado
      threshold: 0, // Apenas precisamos de qualquer interseção
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se a interseção ocorrer dentro do rootMargin (nos 20% centrais da tela)
        setIsHover(entry.isIntersecting);
      });
    }, options);

    observer.observe(observerRef);

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, []); // Executa apenas uma vez após a montagem

  // Constrói a lista de classes CSS
  const cardClasses = `${styles.card} ${isHover ? styles['card-hover'] : ''}`;

  return (
    <div 
      ref={cardRef} // Associa a ref ao elemento div
      className={cardClasses} 
      style={{ '--rotate-speed': speed } as React.CSSProperties}
    >
      <div className={styles['card-border']}></div>
      <div className={styles['card-container']}>
        {children}
      </div>
    </div>
  );
};

export default Card;