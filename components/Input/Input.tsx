'use client';

import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  mask?: 'phone';
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ mask, ...props }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (mask === 'phone') {
      value = value.replace(/\D/g, '');
      if (value.length > 0) value = '(' + value;
      if (value.length > 3) value = value.slice(0, 3) + ') ' + value.slice(3);
      if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10, 15);
    }

    e.target.value = value;
    if (props.onChange) props.onChange(e);
  };

  return <input {...props} onChange={handleChange} className={styles.input} />;
}
