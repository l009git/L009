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
    const classNames = `${styles.input} ${props.className || ''}`;

    const formatPhoneNumber = (value: string): string => {
        const numbers = value.replace(/\D/g, '').substring(0, 11);
        
        let formatted = numbers;

        if (numbers.length > 2 && numbers.length <= 11) {
            
            if (numbers.length <= 10) { 
                formatted = numbers.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
            } else { 
                formatted = numbers.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            }
        }
        
        if (numbers.length > 2 && numbers.length <= 6) {
             formatted = `(${numbers.substring(0, 2)}) ${numbers.substring(2)}`;
        } else if (numbers.length > 6) {
             formatted = `(${numbers.substring(0, 2)}) ${numbers.substring(2, numbers.length - 4)}-${numbers.substring(numbers.length - 4)}`;
        } else if (numbers.length <= 2 && numbers.length > 0) {
             formatted = `(${numbers}`;
        }

        if (value.length === 0) return '';
        
        return formatted;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let formattedValue = e.target.value;

        if (mask === 'phone') {
            formattedValue = formatPhoneNumber(e.target.value);
        }

        const syntheticEvent = {
            ...e,
            target: {
                ...e.target,
                value: formattedValue,
            }
        } as ChangeEvent<HTMLInputElement>;
        
        if (props.onChange) {
            props.onChange(syntheticEvent);
        }
    };

    return (
        <input 
            {...props} 
            onChange={handleChange} 
            className={classNames} 
            value={props.value || ''} 
        />
    );
}