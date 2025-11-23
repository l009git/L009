/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import style from './Nav.module.css';

const Nav = function() {
    return (
        <nav className={style.nav}>
            <Link href='#'>
                <img src='../images/nav_logo.png' alt='dsd'></img>
                <p>More time, more life!</p>
            </Link>
            <Link href='#'>
                <p>Contact Us</p>
                <i className="bi bi-instagram"></i>
            </Link>
        </nav>
    );
}

export default Nav;