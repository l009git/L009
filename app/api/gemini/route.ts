// app/api/gemini/route.ts
import { GoogleGenAI } from '@google/genai';
import { NextResponse, NextRequest } from 'next/server';

interface GeminiRequestBody {
  instructions: string; // Instrução do sistema (System Prompt)
  message: string;      // Mensagem do usuário
}

// Inicializa a GoogleGenAI. A chave GEMINI_API_KEY é lida automaticamente do ambiente.
const ai = new GoogleGenAI({});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// --- Rota OPTIONS ---
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

// --- Rota POST (Serviço de IA) ---
export async function POST(req: NextRequest) {
  try {
    // 1. 📨 Leitura dos Dados
    const { instructions, message }: GeminiRequestBody = await req.json();

    if (!instructions || !message) {
      return NextResponse.json(
        { error: 'Parâmetros "instructions" e "message" são obrigatórios.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // 2. 🧠 Chamada ao Gemini
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: instructions,
      },
    });

    const response = await chat.sendMessage({
      message: message,
    });

    // 3. ✅ Resposta de Sucesso
    return NextResponse.json(
      { response: response.text },
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error('Erro na chamada da API do Gemini:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';

    return NextResponse.json(
      { error: 'Falha ao processar a requisição com o Gemini API.', details: errorMessage },
      { status: 500, headers: corsHeaders }
    );
  }
}
