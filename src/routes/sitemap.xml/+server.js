const SITE = 'https://ucihuen.com.ar';

const pages = [
	{ path: '/', es: '/', en: '/en/' },
	{ path: '/galeria', es: '/galeria', en: '/en/galeria' }
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const urls = pages
		.map(
			(p) => `
	<url>
		<loc>${SITE}${p.path}</loc>
		<xhtml:link rel="alternate" hreflang="es" href="${SITE}${p.es}" />
		<xhtml:link rel="alternate" hreflang="en" href="${SITE}${p.en}" />
		<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${p.path}" />
	</url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
>${urls}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
