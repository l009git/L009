import React from 'react';
import styles from './social.module.css';

interface SocialProps {
  href: string;
  icon: string;
  label: string;
}

const Social: React.FC<SocialProps> = ({ href, icon, label }) => {
  return (
    <a href={href} className={styles.social} target='_blank' rel='noopener noreferrer'>
      <i className={icon}></i>
      <p>{label}</p>
    </a>
  );
};

export default Social;
