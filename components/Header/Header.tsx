import styles from './header.module.css';

const Header = () => {
    const spans = Array.from({ length: 21 }, (_, i) => (
        <span key={i} style={{ '--i': `${i}` } as React.CSSProperties}></span>
    ));

    return (
        <div id="home" className={styles.header}>
            <div className={styles.logoArea}>
                <div className={styles.infinite} aria-label="Animated L009 Logo">
                    <div className={styles.infiniteLetter} aria-hidden="true" title="Logo letter L">L</div>
                    <div className={styles.infiniteContainer} role="presentation" aria-hidden="true" title="Logo animation">
                        <div className={styles.infiniteCircle} aria-hidden="true" title="Decorative circle">{spans}</div>
                        <div className={styles.infiniteCircle} aria-hidden="true" title="Decorative circle">{spans}</div>
                    </div>
                    <div className={styles.infiniteLetter} aria-hidden="true" title="Logo number 9">9</div>
                </div>
            </div>
            <div className={styles.textArea}>
                <h2>More time, more life.</h2>
                <p>We automate your digital life, so you can enjoy more of your time.</p>
            </div>
            <a href="#services">
                <i className="bi bi-arrow-down-circle-fill"></i>
            </a>
        </div>
    );
}

export default Header;