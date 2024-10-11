// app/api/encode/route.js
import { encode } from '@/utils/encoder';
import { store } from '@/utils/storage';

export async function POST(req) {
  const { input } = await req.json();

  if (!input) {
    return new Response(JSON.stringify({ error: 'Input string is required' }), { status: 400 });
  }

  const encodedString = encode(input);
  store(encodedString, input); // Store the original string in memory

  return new Response(JSON.stringify({ encodedString }), { status: 200 });
}
