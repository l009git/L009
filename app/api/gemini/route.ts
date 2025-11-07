import { GoogleGenAI } from '@google/genai';
import { NextResponse, NextRequest } from 'next/server';

interface GeminiRequestBody {
  instructions: string;
  message: string;
}

const requestApiKey = process.env.REQUEST_API_KEY;

const ai = new GoogleGenAI({});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Request-Api-Key',
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    if (!requestApiKey) {
      console.error('REQUEST_API_KEY não está definida nas variáveis de ambiente.');
      return NextResponse.json(
        { error: 'Configuração interna do servidor inválida.' },
        { status: 500, headers: corsHeaders }
      );
    }

    const incomingApiKey = req.headers.get('X-Request-Api-Key');

    if (incomingApiKey !== requestApiKey) {
      return NextResponse.json(
        { error: 'Chave de API de requisição inválida ou ausente.' },
        { status: 401, headers: corsHeaders }
      );
    }

    const { instructions, message }: GeminiRequestBody = await req.json();

    if (!instructions || !message) {
      return NextResponse.json(
        { error: 'Parâmetros "instructions" e "message" são obrigatórios.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: instructions,
      },
    });

    const response = await chat.sendMessage({
      message: message,
    });

    return NextResponse.json({
      response: response.text,
    }, {
      headers: corsHeaders
    });
  } catch (error) {
    console.error('Erro na chamada da API do Gemini:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';

    return NextResponse.json(
      { error: 'Falha ao processar a requisição com o Gemini API.', details: errorMessage },
      { status: 500, headers: corsHeaders }
    );
  }
}