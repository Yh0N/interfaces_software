import { NextResponse } from "next/server";
import axios from "axios";

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const response = await axios.post(
    "https://api.mistral.ai/chat/completions",
    {
      model: "mistral-7b",
      messages: [{ role: "user", content: message }],
    },
    { headers: { Authorization: `Bearer ${MISTRAL_API_KEY}` } }
  );

  return NextResponse.json(response.data);
}
