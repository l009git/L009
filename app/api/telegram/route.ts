import { NextRequest, NextResponse } from "next/server";
import { Telegraf, Context } from "telegraf";

const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
if (!TELEGRAM_API_KEY) throw new Error("TELEGRAM_API_KEY não definido");

const bot = new Telegraf<Context>(TELEGRAM_API_KEY);

bot.on("text", async (ctx) => {
  const userMessage = ctx.message.text;
  try {
    const res = await fetch('https://l009.vercel.app/api/gemini', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userMessage,
        instructions: "Você é um cavaleiro de ni",
      }),
    });
    const data = await res.json();
    await ctx.reply(data.response || "Desculpe, não entendi.");
  } catch (err) {
    console.error(err);
    await ctx.reply("Desculpe, houve uma falha interna na IA.");
  }
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const text = await req.text();
    if (!text) return NextResponse.json({ ok: true }, { headers: corsHeaders });

    const body = JSON.parse(text);
    await bot.handleUpdate(body);

    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500, headers: corsHeaders });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Webhook ativo" }, { headers: corsHeaders });
}
