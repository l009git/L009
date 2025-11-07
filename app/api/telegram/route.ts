import { NextRequest, NextResponse } from "next/server";
import { Telegraf, Context } from "telegraf";

const token = process.env.TELEGRAM_BOT_KEY;
if (!token) throw new Error("TELEGRAM_BOT_KEY não definida no .env.local");

const bot = new Telegraf<Context>(token);

// === Handlers ===
bot.start((ctx) => ctx.reply("Oi 👋 Bem-vindo ao bot Next.js com TypeScript!"));
bot.hears(/oi|olá|opa/i, (ctx) => ctx.reply("Oi! Tudo bem? 😄"));
bot.on("text", (ctx) => ctx.reply(`Você disse: ${ctx.message.text}`));

// === Webhook Handler ===
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await bot.handleUpdate(body); // processa a atualização recebida
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no webhook:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
