<script>
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref, deLocalizeUrl } from '$lib/paraglide/runtime.js';

	let currentPath = $derived(deLocalizeUrl(page.url).pathname);

	/**
	 * @param {string} path
	 * @param {string} hash
	 */
	async function navigateTo(path, hash) {
		const targetPath = deLocalizeUrl(new URL(path, window.location.href)).pathname;

		if (targetPath === currentPath) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			await goto(`${path}${hash}`, { noScroll: true });
			setTimeout(() => {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	}
</script>

<nav>
	<div class="background">
		<button onclick={() => navigateTo(localizeHref('/'), '#inicio')} title={m.nav_home()} class:active={currentPath === '/'}
			>{m.nav_home()}<span class="underline" class:active={currentPath === '/'}></span></button
		>

		<button onclick={() => navigateTo(localizeHref('/galeria'), '#galeria')} title={m.nav_gallery()} class:active={currentPath === '/galeria'}
			>{m.nav_gallery()}<span class="underline" class:active={currentPath === '/galeria'}></span></button
		>

		<button onclick={() => navigateTo(localizeHref('/paseos'), '#paseos')} title={m.nav_excursions()} class:active={currentPath === '/paseos'}
			>{m.nav_excursions()}<span class="underline" class:active={currentPath === '/paseos'}
			></span></button
		>
	</div>
</nav>

<style>
	.background {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		font-size: 1.7rem;
	}

	button {
		display: inline-block;
		color: var(--text-color);
		font-family: var(--sections-font);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		font-size: inherit;
	}

	.underline {
		position: relative;
		display: flex;
		align-items: center;
		background-color: var(--text-color);
		width: 150%;
		height: 2px;
		margin-inline-start: -25%;
	}
	.underline::after {
		position: absolute;
		display: block;
		content: '';
		width: 70%;
		height: 0.5rem;
		background: var(--gradient);
		margin-inline-start: 15%;
		border-radius: var(--radius-sm);
		animation: disappear 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	.underline.active::after {
		animation: appear 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@keyframes appear {
		0% {
			transform: translateZ(-1400px);
			opacity: 0;
		}
		100% {
			transform: translateZ(0);
			opacity: 1;
		}
	}
	@keyframes disappear {
		0% {
			transform: translateZ(0);
			opacity: 1;
		}
		100% {
			transform: translateZ(-1400px);
			opacity: 0;
		}
	}

	@media screen and (min-width: 1024px) {
		nav {
			width: 40rem;
			margin-inline: auto;
			padding: 2px;
			border-radius: var(--radius-sm);
			background: linear-gradient(var(--accent-teal) 0%, var(--accent-gold) 100%);
		}
		.background {
			display: flex;
			align-items: center;
			background: var(--surface-color);
			border-radius: var(--radius-sm);
			padding-block: 0.5rem;
		}
	}
</style>
