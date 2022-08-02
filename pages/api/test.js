export default function handler(req) {
    return new Response(null, {
      status: 301,
      headers: {
        'location': 'https://montidogs-poc.vercel.app/',
        'x-location': 'https://montidogs-poc.vercel.app/',
      },
    });
  }
  
  export const config = {
    runtime: 'experimental-edge',
  };