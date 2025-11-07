import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const REQUEST_TELEGRAM_API_KEY = process.env.REQUEST_TELEGRAM_API_KEY;

// Variáveis não são mais necessárias
// const GEMINI_ENDPOINT_URL = 'https://l009.com.br/api/gemini/';
// const REQUEST_GEMINI_API_KEY = process.env.REQUEST_GEMINI_API_KEY || ''; 

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any;

  try {
    const incomingSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

    if (REQUEST_TELEGRAM_API_KEY && incomingSecretToken !== REQUEST_TELEGRAM_API_KEY) {
        console.error('Webhook inválido: Secret Token não corresponde.');
        return NextResponse.json({ error: 'Não autorizado.' }, { status: 401, headers: corsHeaders });
    }

    body = await req.json();
    const message = body.message;

    if (!message || !message.text) {
        return NextResponse.json({ ok: true }, { headers: corsHeaders }); 
    }

    // 🎯 Extração dos IDs necessários
    const chatID = message.chat.id;
    const messageID = message.message_id;
    const updateID = body.update_id;

    // 🎯 Criação da resposta com os IDs
    const responseText = `✅ Confirmação do Webhook:\n\n` + 
                         `• Chat ID: ${chatID}\n` + 
                         `• Message ID: ${messageID}\n` +
                         `• Update ID: ${updateID}\n` +
                         `\nStatus: Integração Telegram -> Servidor OK!`;

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    // 🎯 Envia a resposta de volta ao usuário
    await axios.post(telegramApiUrl, {
      chat_id: chatID,
      text: responseText,
    });

    return NextResponse.json({ ok: true }, { headers: corsHeaders });

  } catch (error) {
    console.error('Erro no Webhook:', error instanceof Error ? error.message : error);
    
    // Tentativa de enviar erro de volta ao Telegram
    const chatID = body?.message?.chat?.id; 
    
    if (chatID && TELEGRAM_BOT_TOKEN) {
        const errorText = '⚠️ Falha no processamento. Verifique os logs do servidor.';
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: chatID, text: errorText }); 
    }

    return NextResponse.json(
      { error: 'Falha ao processar o Webhook do Telegram.' },
      { status: 500, headers: corsHeaders }
    );
  }
}