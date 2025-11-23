import { ReactNode } from 'react';
import style from './Section.module.css';

interface SectionProps {
    children: ReactNode;
    gap?: string;
    title?: string;
    description?: string;
}

const Section = function({ children, gap, title, description }: SectionProps) {
    const sectionGap = gap ? { gap: gap } : {};

    return (
        <section className={style.section} style={sectionGap}>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </section>
    );
}

export default Section;