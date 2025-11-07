import { NextResponse } from "next/server";

const TELEGRAM_BOT_KEY = process.env.TELEGRAM_BOT_KEY!;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_KEY}`;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const chatId = body?.message?.chat?.id;
    const text = body?.message?.text;

    console.log("Mensagem recebida:", text);

    if (chatId) {
      // responde "Oi" de volta
      await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: "Oi 👋",
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
