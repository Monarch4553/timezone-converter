// app/api/decode/route.js
import { retrieve } from '@/utils/storage';

export async function POST(req) {
  const { encodedStr } = await req.json();

  if (!encodedStr) {
    return new Response(JSON.stringify({ error: 'Encoded string is required' }), { status: 400 });
  }

  const decodedTime = retrieve(encodedStr);

  if (decodedTime === null) {
    return new Response(JSON.stringify({ error: 'Encoded string not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ decodedTime }), { status: 200 });
}
