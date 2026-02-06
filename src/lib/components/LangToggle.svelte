<script>
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime.js';

	let locale = $derived(getLocale());
	let targetLocale = $derived(locale === 'es' ? 'en' : 'es');
	let flag = $derived(targetLocale === 'en' ? '/icons/uk.svg' : '/icons/ar.svg');
	let label = $derived(targetLocale === 'en' ? 'English' : 'Español');
	let href = $derived(
		localizeHref(page.url.pathname + page.url.search + page.url.hash, { locale: targetLocale })
	);
</script>

<a {href} class="lang-toggle" data-sveltekit-reload aria-label={label}>
	<img src={flag} alt={label} />
</a>

<style>
	.lang-toggle {
		z-index: var(--z-lang-toggle);
		position: fixed;
		top: 1rem;
		right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		transition: transform 0.2s ease;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.lang-toggle:hover {
		transform: scale(1.1);
	}

	.lang-toggle:focus-visible {
		outline: 3px solid var(--secondary-color);
		outline-offset: 2px;
	}
</style>
