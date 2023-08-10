export default function handler(request, response) {
    response.setHeader('Cache-Control', 'stale-while-revalidate=59', );
    response.status(200).json({ name: 'John Doe' });
  }