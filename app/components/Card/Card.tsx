import { ReactNode } from 'react';
import style from './Card.module.css';

interface CardProps {
    children: ReactNode;
}

const Card = function({ children }: CardProps) {
    return (
        <div className={style.card}>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Card;