import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma'; // Adjust path if needed

const prisma = new PrismaClient();
function serializeBigInt(obj) {
  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  } else if (obj && typeof obj === 'object') {
    const res = {};
    for (const key in obj) {
      if (typeof obj[key] === 'bigint') {
        res[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object') {
        res[key] = serializeBigInt(obj[key]);
      } else {
        res[key] = obj[key];
      }
    }
    return res;
  }
  return obj;
}

// Inside your API handler:
export async function GET() {
  try {
    const languages = await prisma.languages.findMany({
      orderBy: { language_name: 'asc' }
    });
    return NextResponse.json(serializeBigInt(languages));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
