import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: ReactNode;
}

const Section = function({ children }: SectionProps) {

    return (
        <section className={styles.section}>
            {children} 
        </section>
    );
}

export default Section;