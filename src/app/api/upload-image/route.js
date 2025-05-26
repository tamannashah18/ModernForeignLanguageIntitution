import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Parse form data from the request
  const formData = await request.formData();
  const file = formData.get('file'); // 'file' is the key you used in FormData

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Get the original extension
  const originalName = file.name || 'upload';
  const extension = originalName.match(/\.[^/.]+$/)?.[0] || '';
  const newFilename = `${Date.now()}${extension}`;

  // Convert Blob to ArrayBuffer, then to Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload to Vercel Blob
  const blob = await put(newFilename, buffer, { access: 'public' });

  return NextResponse.json({ url: blob.url });
}
