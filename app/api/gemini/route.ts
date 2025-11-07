import { GoogleGenAI } from '@google/genai';
import { NextResponse, NextRequest } from 'next/server';

interface GeminiRequestBody {
  instructions: string;
  message: string;
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY não definido no .env");

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const { instructions, message }: GeminiRequestBody = await req.json();
    if (!instructions || !message) {
      return NextResponse.json({ error: 'Parâmetros "instructions" e "message" são obrigatórios.' }, { status: 400, headers: corsHeaders });
    }

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction: instructions },
    });

    const response = await chat.sendMessage({ message });

    return NextResponse.json({ response: response.text }, { headers: corsHeaders });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json({ error: 'Falha ao processar a requisição com o Gemini API.', details: errorMessage }, { status: 500, headers: corsHeaders });
  }
}
