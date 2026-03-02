import { paraglideMiddleware } from '$lib/paraglide/server';
import { redirect, type Handle } from '@sveltejs/kit';

const paths = ['/', '/galeria', '/paseos'];

export const handle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		if (!paths.includes(event.url.pathname)) return redirect(307, '/');

		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		});
	});
