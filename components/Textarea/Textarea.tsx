'use client';

import { TextareaHTMLAttributes, ChangeEvent } from 'react';
import styles from './textarea.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ value, onChange, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={styles.textarea}
      value={value}
      onChange={onChange}
    />
  );
}