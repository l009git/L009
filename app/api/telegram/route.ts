import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

// 🔑 Variáveis de Ambiente (Configurações de Segurança e Token)
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const REQUEST_TELEGRAM_API_KEY = process.env.REQUEST_TELEGRAM_API_KEY;

// 🌐 Configuração CORS para o endpoint
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Telegram-Bot-Api-Secret-Token',
};

// ---

/**
 * Lida com requisições OPTIONS (pré-voo CORS).
 */
export async function OPTIONS() {
    return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

/**
 * Lida com o Webhook POST do Telegram.
 */
export async function POST(req: NextRequest) {
    // Variável para armazenar o corpo, usada no try e no catch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let body: any;

    try {
        // 1. 🛡️ VALIDAÇÃO DE SEGURANÇA (Secret Token)
        const incomingSecretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');

        if (REQUEST_TELEGRAM_API_KEY && incomingSecretToken !== REQUEST_TELEGRAM_API_KEY) {
            console.error('Webhook inválido: Secret Token não corresponde.');
            return NextResponse.json({ error: 'Não autorizado.' }, { status: 401, headers: corsHeaders });
        }

        // 2. 📨 LEITURA DO CORPO E FILTRAGEM
        body = await req.json();
        const message = body.message;

        // Ignora updates que não são mensagens de texto (ex: edição de mensagem, join group)
        if (!message || !message.text) {
            return NextResponse.json({ ok: true }, { headers: corsHeaders }); 
        }

        // 3. 🎯 EXTRAÇÃO DE DADOS PARA RESPOSTA
        const chatID = message.chat.id;
        const messageID = message.message_id;
        const updateID = body.update_id;

        // 4. 📝 PREPARAÇÃO DA RESPOSTA DE CONFIRMAÇÃO
        const responseText = `✅ Confirmação do Webhook:\n\n` + 
                             `• **Chat ID:** ${chatID}\n` + 
                             `• **Message ID:** ${messageID}\n` +
                             `• **Update ID:** ${updateID}\n` +
                             `\nStatus: Integração Telegram -> Servidor OK!`;

        // 5. 📤 ENVIO DA RESPOSTA DE VOLTA PARA O TELEGRAM
        const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        await axios.post(telegramApiUrl, {
            chat_id: chatID,
            // Usamos Markdown para formatar o texto no Telegram
            text: responseText,
            parse_mode: 'Markdown' 
        });

        // Retorna sucesso ao Telegram para indicar que o Webhook foi processado
        return NextResponse.json({ ok: true }, { headers: corsHeaders });

    } catch (error) {
        // 6. 🚨 TRATAMENTO DE ERROS
        console.error('Erro no processamento do Webhook:', error instanceof Error ? error.message : error);
        
        // Tenta enviar uma mensagem de erro de volta ao usuário, usando o 'body' capturado
        const chatID = body?.message?.chat?.id; 
        
        if (chatID && TELEGRAM_BOT_TOKEN) {
            const errorText = '⚠️ Falha grave no servidor. Verifique os logs para detalhes.';
            await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: chatID, text: errorText }); 
        }

        return NextResponse.json(
            { error: 'Falha ao processar o Webhook do Telegram. Erro 500 interno.' },
            { status: 500, headers: corsHeaders }
        );
    }
}