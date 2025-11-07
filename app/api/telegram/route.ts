// app/api/telegram/route.ts

import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

// 🔑 Variáveis de Ambiente
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const REQUEST_TELEGRAM_API_KEY = process.env.REQUEST_TELEGRAM_API_KEY; // Secret Token para o Webhook
const GEMINI_ENDPOINT_URL = 'https://l009.com.br/api/gemini/'; // URL do serviço de IA (Bloco 1)
const REQUEST_GEMINI_API_KEY = process.env.REQUEST_GEMINI_API_KEY || ''; // Chave para autenticar no serviço de IA

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
};

// --- Rota OPTIONS ---
export async function OPTIONS() {
    return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

// --- Rota POST (Webhook) ---
export async function POST(req: NextRequest) {
    // Variável para armazenar o corpo, usada no try e no catch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let body: any;

    try {
        // 1. 🛡️ VALIDAÇÃO DE SEGURANÇA (Secret Token do Telegram)
        const incomingSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

        if (REQUEST_TELEGRAM_API_KEY && incomingSecretToken !== REQUEST_TELEGRAM_API_KEY) {
            console.error('Webhook inválido: Secret Token não corresponde.');
            return NextResponse.json({ error: 'Não autorizado.' }, { status: 401, headers: corsHeaders });
        }

        // 2. 📨 LEITURA E EXTRAÇÃO DE DADOS
        body = await req.json();
        const message = body.message;

        if (!message || !message.text) {
            return NextResponse.json({ ok: true }, { headers: corsHeaders }); 
        }

        const chatID = message.chat.id;
        const userMessage = message.text;

        // 3. ➡️ CHAMADA AO SERVIÇO GEMINI (Endpoint Interno)
        const geminiResponse = await axios.post(
            GEMINI_ENDPOINT_URL,
            {
                // Passa a instrução de sistema fixa para o bot Telegram
                message: userMessage,
                instructions: 'Você é um assistente de bot do Telegram. Seja conciso e útil.'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Usa a chave interna para autenticar no /api/gemini
                    'X-Request-Api-Key': REQUEST_GEMINI_API_KEY,
                },
            }
        );

        const responseText = geminiResponse.data.response;

        // 4. ⬅️ ENVIO DA RESPOSTA DE VOLTA PARA O TELEGRAM
        const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        await axios.post(telegramApiUrl, {
            chat_id: chatID,
            text: responseText,
        });

        // Retorna sucesso para o Telegram
        return NextResponse.json({ ok: true }, { headers: corsHeaders });

    } catch (error) {
        // 5. 🚨 TRATAMENTO DE ERROS
        console.error('Erro no Webhook/Gemini:', error instanceof Error ? error.message : error);
        
        // Tenta enviar erro de volta ao usuário se o chatID foi lido
        const chatID = body?.message?.chat?.id; 
        
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