import axios from 'axios';

const cache = new Map();

export async function POST(req) {
  const { url } = await req.json();

  // Check if the response is cached
  if (cache.has(url)) {
    return new Response(JSON.stringify({ status: 'ok', data: cache.get(url) }), { status: 200 });
  }

  try {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        method: "eth_blockNumber", // Changed back to eth_blockNumber
        params: [], // No parameters needed for eth_blockNumber
        id: 1
      }, {
        timeout: 5000 // Kept the increased timeout
      });

    // Cache the response
    cache.set(url, response.data);

    return new Response(JSON.stringify({ status: 'ok', data: response.data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 'error', message: error.message }), { status: 500 });
  }
}