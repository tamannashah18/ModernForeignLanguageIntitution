import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Use default unless you have a custom output

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

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({ // Use 'review' if that's your model name
      include: {
        Exam_Info: true,
        Languages: true
      },
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(serializeBigInt(reviews));
  } catch (error) {
    console.error('GET /reviews error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 }); // For debugging
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
