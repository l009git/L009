import Link from 'next/link';
import style from './Footer.module.css';

const Footer = function() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <div>
                <Link href='#'>About</Link>
                <Link href='#'>Contact</Link>
                <Link href='#'>Privacy & Terms</Link>
            </div>
            <div>
                <small>L009 DIGITAL SOLUTIONS LTD - CNPJ: 61.114.588/0001-07.</small>
                <small>Designed and developed by L009.</small>
                <small>All rights reserved © {currentYear}.</small>
            </div>
        </footer>
    );
}

export default Footer;