<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
	import { onMount } from 'svelte';

	let scrollPercent;
	let scrollPercentRounded;
	let scrollTop;
	let docHeight;
	let winHeight;
	onMount(() => {
		scrollTop = window.scrollY;
		docHeight = document.body.offsetHeight;
		winHeight = window.innerHeight;
		scrollPercent = scrollTop / (docHeight - winHeight);
		scrollPercentRounded = Math.round(scrollPercent * 100);
		console.log(scrollPercent);
	});
	
</script>

<Header />
<main>
	<div class="fab-container">
		<Fab />
	</div>
	<slot />
</main>
<Footer />

<style>
	main {
		position: relative;
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
