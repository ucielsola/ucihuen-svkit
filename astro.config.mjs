import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
	integrations: [svelte()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'pt'],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
