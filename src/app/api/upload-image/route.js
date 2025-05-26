import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const config = { api: { bodyParser: false } };

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') +`${Date.now()}`;

    // The request body is the file
    const blob = await put(filename, request.body, { access: 'public' });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
