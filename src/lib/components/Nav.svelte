<script>
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref, deLocalizeUrl } from '$lib/paraglide/runtime.js';

	let currentPath = $derived(deLocalizeUrl(page.url).pathname);
</script>

<nav>
	<div class="background">
		<a href={localizeHref('/')} title={m.nav_home()}
			>{m.nav_home()}<span class="underline" class:active={currentPath === '/'}></span></a
		>

		<a href={localizeHref('/galeria')} title={m.nav_gallery()}
			>{m.nav_gallery()}<span class="underline" class:active={currentPath === '/galeria'}></span
			></a
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

	a {
		display: inline-block;
		color: var(--text-color);
		text-decoration: none;
		font-family: var(--sections-font);
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
		border-radius: 5px;
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
			border-radius: 10px;
			background: linear-gradient(#7fbcab 0%, #fbc05d 100%);
		}
		.background {
			display: flex;
			align-items: center;
			background: var(--surface-color);
			border-radius: 10px;
			padding-block: 0.5rem;
		}
	}
</style>
