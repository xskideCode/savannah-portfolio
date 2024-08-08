import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'private', 'Leon_Ndungu_CV.pdf');
  const fileName = 'Leon_Ndungu_CV.pdf';

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename=${fileName}`,
        'Content-Type': 'application/pdf',
      },
    });
  } else {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}