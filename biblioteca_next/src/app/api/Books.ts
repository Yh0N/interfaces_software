import { NextResponse } from "next/server";
import axios from "axios";
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const GOOGLE_BOOKS_API_KEY = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`;
  const { data } = await axios.get(GOOGLE_BOOKS_API_KEY);
  
  return NextResponse.json(data.items || []);
}
