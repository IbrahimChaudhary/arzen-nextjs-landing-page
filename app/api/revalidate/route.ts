import { maxHeaderSize } from 'http';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Security Check: Grab the secret token from the headers
    const secret = request.headers.get('authorization');
    if (secret !== `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    // 2. Read the message body sent by Sanity
    const body = await request.json();
    
    // 3. If the changed document is a caseStudy, trigger the magic eraser
    if (body._type === 'caseStudy') {
      revalidateTag('caseStudy','max'); // This matches the tag you put in your fetch!
      return NextResponse.json({ 
        message: 'Successfully revalidated case studies', 
        now: Date.now() 
      });
    }

    // If it was a different document type, do nothing
    return NextResponse.json({ message: 'No action taken', now: Date.now() });

  } catch (err) {
    return NextResponse.json({ message: 'Error parsing webhook' }, { status: 500 });
  }
}