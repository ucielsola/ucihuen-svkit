<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getWindowWidth } from '$lib/store.js';

	let winWidth;

	onMount(() => {
		getWindowWidth.subscribe((value) => {
			winWidth = value;
		});
	});
	export let formPage;
</script>

<nav class={formPage && winWidth < 1024 ? 'hidden' : ''}>
	<div class="background">
		<a href="/" title="Inicio"
			>Inicio<span class="underline" class:active={$page.url.pathname === '/'} /></a
		>

		<a href="/galeria" title="Galería"
			>Galería<span class="underline" class:active={$page.url.pathname === '/galeria'} /></a
		>
		<a href="/contacto" title="Contacto"
			>Contacto<span class="underline" class:active={$page.url.pathname === '/contacto'} /></a
		>
	</div>
</nav>

<style>
	nav.hidden {
		display: none;
	}

	.background {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		font-size: 1.7rem;
	}

	a:last-of-type {
		display: none;
	}
	a {
		display: inline-block;
		color: #000;
		text-decoration: none;
		font-family: var(--sections-font);
	}

	.underline {
		position: relative;
		display: flex;
		align-items: center;
		background-color: #000;
		width: 150%;
		height: 2px;
		margin-left: -25%;
	}
	.underline::after {
		position: absolute;
		display: block;
		content: '';
		width: 70%;
		height: 0.5rem;
		background: var(--gradient);
		margin-left: 15%;
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
		a:last-of-type {
			display: inline-block;
		}

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
			background: #fff;
			border-radius: 10px;
			padding-block: 0.5rem;
		}
	}
</style>
