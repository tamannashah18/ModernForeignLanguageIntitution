import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma'; // Adjust path if needed

const prisma = new PrismaClient();

function serializeBigInt(obj) {
  if (Array.isArray(obj)) return obj.map(serializeBigInt);
  if (obj && typeof obj === 'object') {
    const res = {};
    for (const key in obj) {
      if (typeof obj[key] === 'bigint') res[key] = obj[key].toString();
      else if (typeof obj[key] === 'object') res[key] = serializeBigInt(obj[key]);
      else res[key] = obj[key];
    }
    return res;
  }
  return obj;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language');
    if (!language) {
      return NextResponse.json({ error: 'Missing language parameter' }, { status: 400 });
    }
    const exams = await prisma.exam_Info.findMany({
      where: { language: BigInt(language) },
      orderBy: { exam_name: 'asc' }
    });
    return NextResponse.json(serializeBigInt(exams));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
