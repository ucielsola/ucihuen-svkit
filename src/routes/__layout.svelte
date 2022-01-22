<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import { onMount } from 'svelte';

	let docHeight;
	let winHeight;
	let winWidth;
	let footerHeight;
	let scrolled;
	let scrolledPercentage;

	onMount(() => {
		winWidth = window.innerWidth;
		updateScrollPos();
	});

	const updateScrollPos = () => {
		docHeight = document.querySelector('#svelte').scrollHeight;
		winHeight = window.innerHeight;
		footerHeight = document.querySelector('footer').scrollHeight - 32 + 'px';
		window.addEventListener('scroll', () => {
			scrolledPercentage = parseInt((scrolled / (docHeight - winHeight)) * 100);
		});
	};
</script>

<svelte:window bind:scrollY={scrolled} />

<Header />
<main>
	<div class="fab-container">
		<Fab --footer-height={footerHeight} percentage={scrolledPercentage} width={winWidth} />
	</div>
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
	.fab-container {
		z-index: 1;
		position: fixed;
		bottom: 1rem;
		display: grid;
		place-content: center;
		width: 100%;
	}
</style>
