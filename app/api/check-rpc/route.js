import axios from 'axios';

export async function POST(req) {
  const { url } = await req.json();
  try {
    const response = await axios.post(url, {
      jsonrpc: "2.0",
      method: "eth_blockNumber",
      params: [],
      id: 1
    }, {
      timeout: 1000 // 1 seconds timeout
    });
    return new Response(JSON.stringify({ status: 'ok' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 'error' }), { status: 200 });
  }
}