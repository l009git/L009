import { NextRequest, NextResponse } from "next/server";
import { Telegraf, Context } from "telegraf";

const TELEGRAM_BOT_KEY = process.env.TELEGRAM_BOT_KEY;
if (!TELEGRAM_BOT_KEY) throw new Error("TELEGRAM_BOT_KEY não definido");

const REQUEST_TELEGRAM_API_KEY = process.env.REQUEST_TELEGRAM_API_KEY;
const GEMINI_ENDPOINT_URL = "https://l009.com.br/api/gemini";
const REQUEST_GEMINI_API_KEY = process.env.REQUEST_GEMINI_API_KEY || "";

// Cria instância do bot Telegraf
const bot = new Telegraf<Context>(TELEGRAM_BOT_KEY);

// === Handlers do bot ===
bot.start((ctx) => ctx.reply("Oi 👋 Bem-vindo ao bot Next.js com Telegraf!"));

// Responde a qualquer mensagem de texto
bot.on("text", async (ctx) => {
  const userMessage = ctx.message.text;

  try {
    // Chamada ao Gemini usando fetch
    const geminiRes = await fetch(GEMINI_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Request-Api-Key": REQUEST_GEMINI_API_KEY,
      },
      body: JSON.stringify({
        message: userMessage,
        instructions: "Você é um assistente de bot do Telegram. Seja conciso e útil.",
      }),
    });

    const geminiData = await geminiRes.json();
    const responseText = geminiData.response || "Desculpe, não entendi.";

    await ctx.reply(responseText);
  } catch (err) {
    console.error("Erro Gemini:", err);
    await ctx.reply("Desculpe, houve uma falha interna na IA.");
  }
});

// === Webhook Handler Next.js ===
export async function POST(req: NextRequest) {
  try {
    const incomingSecretToken = req.headers.get("X-Telegram-Bot-Api-Secret-Token");

    if (REQUEST_TELEGRAM_API_KEY && incomingSecretToken !== REQUEST_TELEGRAM_API_KEY) {
      console.error("Webhook inválido: Secret Token não corresponde.");
      return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    }

    const text = await req.text();
    if (!text) return NextResponse.json({ ok: true });

    const body = JSON.parse(text);

    await bot.handleUpdate(body); // processa a atualização recebida pelo Telegraf
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no webhook:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}

// === Opcional: GET para teste do webhook ===
export async function GET() {
  return NextResponse.json({ ok: true, message: "Webhook ativo ✅" });
}
