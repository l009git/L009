// botInstance.ts
import { Telegraf, Context } from "telegraf";

const TELEGRAM_BOT_KEY = process.env.TELEGRAM_BOT_KEY;
if (!TELEGRAM_BOT_KEY) throw new Error("TELEGRAM_BOT_KEY não definido");

const GEMINI_ENDPOINT_URL = "https://l009.com.br/api/gemini";

// Cria instância do bot
export const bot = new Telegraf<Context>(TELEGRAM_BOT_KEY);

// Handler para /start
bot.start((ctx) => ctx.reply("Oi 👋 Bem-vindo ao bot!"));

// Handler para qualquer mensagem de texto
bot.on("text", async (ctx) => {
  const userMessage = ctx.message.text;

  try {
    const geminiRes = await fetch(GEMINI_ENDPOINT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    await ctx.reply("Erro interno na IA.");
  }
});
