<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import { onMount } from 'svelte';
	import { getWindowHeight, getContainerHeight, getFooterHeight } from '$lib/store.js';

	let docHeight;
	let winHeight;
	let footerHeight;
	let scrolled;
	let scrolledPercentage;
	let scrollingUp;

	onMount(() => {
		getWindowHeight.subscribe((value) => {
			winHeight = value;
		});

		getContainerHeight.subscribe((value) => {
			docHeight = value;
		});
		getFooterHeight.subscribe((value) => {
			footerHeight = value + 'px';
		});

		window.addEventListener(
			'scroll',
			() => {
				let oldScroll = 0;
				scrollingUp = oldScroll > scrolled;
				oldScroll = scrolled;
				scrolledPercentage = parseInt((scrolled / (docHeight - winHeight)) * 100);
			},
			{ passive: true }
		);
	});
</script>

<svelte:window bind:scrollY={scrolled} />

<Header />
<main>
	<Fab --footer-height={footerHeight} {scrolledPercentage} {scrollingUp} />
	<slot />
</main>
<Footer />

<style>
	main {
		position: relative;
		padding-block-end: 4rem;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0.5) 90%,
			rgba(127, 188, 171, 0.5) 100%
		);
	}
</style>
