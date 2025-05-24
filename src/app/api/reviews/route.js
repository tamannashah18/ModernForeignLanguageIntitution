import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma'; // Adjust path as needed
const prisma = new PrismaClient();

// Helper to serialize BigInt values to string
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

// GET /api/reviews
export async function GET() {
  try {
    const reviews = await prisma.reviews.findMany({
      include: {
        Exam_Info: true,
        Languages: true
      },
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(serializeBigInt(reviews));
  } catch (error) {
    console.error('GET /reviews error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/reviews
export async function POST(request) {
  try {
    const body = await request.json();
    const { student_name, experience, exam_id, marks_obtained, language, exam_date, picture } = body;
    const review = await prisma.reviews.create({
      data: {
        student_name,
        experience,
        exam_id,
        marks_obtained,
        language,
        exam_date,
        picture
      }
    });
    return NextResponse.json(serializeBigInt(review), { status: 201 });
  } catch (error) {
    console.error('POST /reviews error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
