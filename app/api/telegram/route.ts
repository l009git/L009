import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const REQUEST_TELEGRAM_TOKEN = process.env.REQUEST_TELEGRAM_TOKEN;
const GEMINI_ENDPOINT_URL = 'https://l009.com.br/api/gemini/';
const REQUEST_API_KEY = process.env.REQUEST_API_KEY || '';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const incomingSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

    if (REQUEST_TELEGRAM_TOKEN && incomingSecretToken !== REQUEST_TELEGRAM_TOKEN) {
        console.error('Webhook inválido: Secret Token não corresponde.');
        return NextResponse.json({ error: 'Não autorizado.' }, { status: 401, headers: corsHeaders });
    }

    const body = await req.json();
    const message = body.message;

    if (!message || !message.text) {
        return NextResponse.json({ ok: true }, { headers: corsHeaders }); 
    }

    const chatID = message.chat.id;
    const userMessage = message.text;

    const geminiResponse = await axios.post(
      GEMINI_ENDPOINT_URL,
      {
        message: userMessage,
        instructions: 'Você é um assistente de bot do Telegram. Seja conciso e útil.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Request-Api-Key': REQUEST_API_KEY,
        },
      }
    );

    const responseText = geminiResponse.data.response;

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(telegramApiUrl, {
      chat_id: chatID,
      text: responseText,
    });

    return NextResponse.json({ ok: true }, { headers: corsHeaders });

  } catch (error) {
    console.error('Erro no Webhook/Gemini:', error instanceof Error ? error.message : error);
    
    const chatID = (await req.json()).message?.chat?.id;
    if (chatID && TELEGRAM_BOT_TOKEN) {
        const errorText = 'Desculpe, houve uma falha interna na IA.';
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: chatID, text: errorText });
    }

    return NextResponse.json(
      { error: 'Falha ao processar o Webhook do Telegram.' },
      { status: 500, headers: corsHeaders }
    );
  }
}