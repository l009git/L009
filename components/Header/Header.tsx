import styles from './header.module.css';
import Infinite from '../Infinite/Infinite';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logoArea}>
          <Infinite />
        </div>
        <div className={styles.textArea}>
          <h2>Mais tempo, mais vida.</h2>
          <p>Automatizamos sua vida digital, para que você possa disfrutar mais do seu tempo.</p>
        </div>
    </div>
  );
}
