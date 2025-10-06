import { rewrite, next } from '@vercel/edge';

export default function middleware(request) {
	const pathname = new URL(request.url).pathname;

	console.log('middleware sees this:', 'url', request.url);

	if (pathname === '/') return rewrite('/posts/first-post');

	return next();
}