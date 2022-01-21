<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Fab from '$lib/components/fab.svelte';
</script>

<Header />
<div class="fab-container">
	<Fab />
</div>
<main>
	<slot />
</main>
<Footer />

<style>
	.fab-container {
		position: absolute;
		height: 100%;
	}
</style>