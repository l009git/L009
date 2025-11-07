import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, message } = await req.json();

    if (!name || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `L009 Website - ${subject}`,
      text: `
        Nome: ${name}
        Telefone: ${phone}
        Mensagem: ${message}
      `,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });
  } catch (err) {
    console.error('Erro ao enviar email:', err);
    return NextResponse.json({ error: 'Erro ao enviar a mensagem.' }, { status: 500 });
  }
}
