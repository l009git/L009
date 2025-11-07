import { useState } from 'react';

export interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ResultData {
  type: 'success' | 'error' | '';
  message: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState<ResultData>({
    type: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    setResult({ type: '', message: '' });

    const missing = Object.entries(form)
      .filter(([_, v]) => !v.trim())
      .map(([k]) => k);

    if (missing.length > 0) {
      setResult({
        type: 'error',
        message: 'Preencha todos os campos antes de enviar.',
      });
      return;
    }

    const lastSent = localStorage.getItem('lastSent');
    const now = Date.now();
    const TEN_MINUTES = 10 * 60 * 1000;

    if (lastSent && now - parseInt(lastSent) < TEN_MINUTES) {
      const remaining = Math.ceil((TEN_MINUTES - (now - parseInt(lastSent))) / 60000);
      setResult({
        type: 'error',
        message: `Você só pode enviar uma mensagem a cada 10 minutos. Tente novamente em ${remaining} minutos.`,
      });
      return;
    }

    setLoading(true);
    setResult({ type: '', message: 'Enviando mensagem...' });

    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setResult({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      });

      setForm({ name: '', phone: '', subject: '', message: '' });

      localStorage.setItem('lastSent', now.toString());
    } catch {
      setResult({
        type: 'error',
        message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    result,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default ContactForm;
