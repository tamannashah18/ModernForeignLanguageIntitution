import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();            // {name, phone, …}

  // 👉 TODO: store in DB, Supabase, Google Sheet, etc.
  console.log('New enquiry', data);

  return NextResponse.json({ ok: true });
}