<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import { onMount } from 'svelte';
	import { winWidth } from '$lib/store.js';

	let docHeight;
	let winHeight;
	let footerHeight;
	let scrolled;
	let scrolledPercentage;
	let scrollingUp;
	let oldScroll;
	let winWidthValue;

	winWidth.subscribe((w) => {
		winWidthValue = w;
	});

	onMount(() => {
		winWidth.set(window.innerWidth);
		winHeight = window.innerHeight;
		docHeight = document.querySelector('#svelte').scrollHeight;
		footerHeight = document.querySelector('footer').scrollHeight - 80 + 'px';
		window.addEventListener('scroll', () => {
			scrollingUp = oldScroll > scrolled;
			oldScroll = scrolled;
			scrolledPercentage = parseInt((scrolled / (docHeight - winHeight)) * 100);
		});
	});
</script>

<svelte:window bind:scrollY={scrolled} />

<Header />
<main>
	<Fab --footer-height={footerHeight} {scrolledPercentage} {winWidthValue} {scrollingUp} />
	<slot />
</main>
<Footer />

<style>
	main {
		position: relative;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0.5) 90%,
			rgba(127, 188, 171, 0.5) 100%
		);
	}
</style>
