import { NextResponse } from "next/server";

// Rota de API para verificar se o servidor está respondendo
export async function GET() {
    return NextResponse.json({ status: "ok" });
}