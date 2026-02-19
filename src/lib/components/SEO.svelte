<script>
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';
	import { SITE_URL, AIRBNB_URL, BOOKING_URL, PHONE } from '$lib/config.js';

	let { title, description, reviewStats = null } = $props();

	const OG_IMAGE = `${SITE_URL}/images/ucihuen_open_graph.png`;
	const LOCALE_MAP = { es: 'es_AR', en: 'en_US', pt: 'pt_BR' };

	let currentLocale = $derived(getLocale());
	let ogLocale = $derived(LOCALE_MAP[currentLocale] || 'es_AR');
	let altLocales = $derived(
		Object.entries(LOCALE_MAP)
			.filter(([k]) => k !== currentLocale)
			.map(([, v]) => v)
	);
	let canonicalUrl = $derived(`${SITE_URL}${page.url.pathname}`);
	let jsonLdData = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'LodgingBusiness',
			name: 'Cabañas Ucihuen',
			description,
			url: SITE_URL,
			telephone: PHONE,
			priceRange: '$$',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Lago Puelo',
				addressRegion: 'Chubut',
				addressCountry: 'AR'
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: -42.0727885,
				longitude: -71.6080007
			},
			image: OG_IMAGE,
			sameAs: [AIRBNB_URL, BOOKING_URL],
			...(reviewStats
				? {
						aggregateRating: {
							'@type': 'AggregateRating',
							ratingValue: reviewStats.ratingValue,
							reviewCount: reviewStats.reviewCount,
							bestRating: '5',
							worstRating: '1'
						}
					}
				: {})
		})
	);
	let jsonLd = $derived('<script type="application/ld+json">' + jsonLdData + '</scr' + 'ipt>');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	{#each locales as loc}
		<link
			rel="alternate"
			hreflang={loc}
			href="{SITE_URL}{localizeHref(deLocalizeHref(page.url.pathname), { locale: loc })}"
		/>
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE_URL}{deLocalizeHref(page.url.pathname)}" />
	<meta property="og:site_name" content="Cabañas Ucihuen" />
	<meta property="og:type" content="business.business" />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:locale" content={ogLocale} />
	{#each altLocales as alt}
		<meta property="og:locale:alternate" content={alt} />
	{/each}
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={OG_IMAGE} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={canonicalUrl} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>
