import { useState, useCallback, useMemo } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface Result {
    message: string;
    type: 'success' | 'error' | 'info';
}

const INITIAL_FORM_STATE: FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const ContactForm = () => {
    const [form, setForm] = useState<FormData>(INITIAL_FORM_STATE);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Result>({ message: '', type: 'info' });

    const handleChange = useCallback((key: keyof FormData, value: string) => {
        setForm(prev => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        setResult({ message: '', type: 'info' });

        try {
            const { name, email, subject, message } = form;
            
            if (!name || !email || !subject || !message) {
                setResult({ message: 'All fields are required.', type: 'error' });
                return;
            }

            if (!isValidEmail(email)) {
                setResult({ message: 'Please enter a valid email address.', type: 'error' });
                return;
            }

            const response = await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                const data = await response.json();
                setResult({ message: data.message || 'Message sent successfully!', type: 'success' });
                setForm(INITIAL_FORM_STATE);
            } else {
                let errorData: { error?: string } = {};

                try {
                    errorData = await response.json();
                } catch (e) {
                    console.error("Failed to parse JSON error response. Server returned non-JSON content.", e);
                    setResult({ 
                        message: 'Server error: API response was invalid. Check server logs and route path.', 
                        type: 'error' 
                    });
                    return;
                }

                setResult({ 
                    message: errorData.error || `Server responded with status ${response.status}. Failed to send the message.`, 
                    type: 'error' 
                });
            }
        } catch (error) {
            console.error('Network or request error:', error);
            setResult({ message: 'Network error or unable to reach the API server.', type: 'error' });
        } finally {
            setLoading(false);
        }
    }, [form]);

    return useMemo(() => ({
        form,
        result,
        loading,
        handleChange,
        handleSubmit,
    }), [form, result, loading, handleChange, handleSubmit]);
};

export default ContactForm;