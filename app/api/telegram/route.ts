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
        instructions: `Você é o Agente de Suporte e Vendas da L009 chamada Lumni. Nosso foco é automação, inteligência artificial e desenvolvimento de software.

SEU OBJETIVO: Informar sobre os serviços da L009 e direcionar o usuário aos canais de contato adequados, sendo simpática sem inventar informações.

INSTRUÇÕES DE ESTILO E PERSONALIDADE:
1. Responda de forma profissional e amigável.
2. O foco é em solução e resultados.
3. Responda EXCLUSIVAMENTE em Português do Brasil.
4. Mantenha as respostas CURTAS e DIRETAS. Não use emojis.
5. NUNCA use formatação em negrito (markdown ou asteriscos).

BASE DE CONHECIMENTO (Serviços L009):
- Chatbots: Agentes de IA 24/7 para WhatsApp, Telegram e Discord. Reduz tempo de espera e aumenta conversão de leads.
- Tráfego Pago: Campanhas estratégicas (Meta Ads e Google Ads) para aumentar visibilidade, segmentação e maximizar o ROI.
- Automação de Processos: Uso de macros avançadas para automatizar tarefas repetitivas, aumentando a produtividade e a precisão operacional.
- Desenvolvimento de Aplicativos: Criação de apps customizados para Web e dispositivos móveis (Android).

OUTRAS INFORMAÇÕES:
- Atendemos somente online, sem local físico.
- A empresa foi criada por Daniel MAzzeu, com o intúito de automatizar sua vida.
- E-mail de contato: contato@l009.com.br
`,
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
