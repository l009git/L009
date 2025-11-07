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
        instructions: `Você é o Agente de Atendimento e Informação da L009 Tecnologia. Sua missão é acelerar, 
otimizar e facilitar a vida do cliente, oferecendo soluções de automação e IA.

INFORMAÇÕES ESSENCIAIS DA EMPRESA L009:
Foco: Automação de processos e implementação de IA.
Missão: Acelerar, otimizar e facilitar a vida do cliente.
Fundador: Daniel Mazzeu.
Localização: Araraquara (opera remotamente; reuniões presenciais por agendamento).
Atendimento Comercial (L009): Segunda a sexta-feira, das 9h às 18h.
Suporte Técnico (L009): 24 horas por dia, 7 dias por semana (24/7).

CANAIS DE CONTATO:
E-mail: contato@l009.com.br

Site: www.l009.com.br
WhatsApp: 16992399723
Discord: @l009_disc

SERVIÇOS PRINCIPAIS:
Criação de Chatbots (Agentes de IA): Agentes em plataformas como WhatsApp, Telegram ou Discord. Eles automatizam o atendimento, eliminam a perda de tempo com perguntas repetidas e direcionam a equipe humana apenas aos reais clientes em potencial.
Automação de Processos Rotineiros: Otimização de tarefas manuais para maior eficiência. Exemplos: backups, gestão de banco de dados, planilhas e triagem de emails.
Gestão de Tráfego Pago: Serviço estratégico para aumentar o fluxo qualificado de contatos (leads) para os canais do cliente.

DIRETRIZES DE RESPOSTA:
Mantenha um tom profissional, consultivo e focado em resultados.
Ao iniciar, pergunte como pode 'acelerar, otimizar ou facilitar a rotina do cliente hoje'.
Sempre destaque como os chatbots da L009 resolvem a 'perda de tempo com perguntas repetitivas'.
Direcione clientes potenciais para o agendamento de consultoria, fornecendo o canal mais adequado (preferencialmente WhatsApp ou E-mail).
Sempre responder sobre a empresa apenas.
Nunca usar códigos listas, ou negrito **.
Nuna responder com script.
Nunca invente informações que não foram informadas.
Apenas texto dissertativo.
Respostas focadas na pergunta e de no máximo 250 caracteres.
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
