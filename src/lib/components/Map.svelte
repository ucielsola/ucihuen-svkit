<script>
	import { PUBLIC_API_KEY } from '$env/static/public';

	let innerWidth = $state(0);
	let winWidth = $derived(innerWidth < 1024 ? innerWidth : 1366);
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<!-- vw - padding - border  -->
	<iframe
		title="Cabañas Ucihuen | Lago Puelo, Chubut, Arg."
		allowfullscreen
		width={winWidth - 32 - 6}
		src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_API_KEY}&q=Cabanas+Ucihuen"
	></iframe>
</div>

<style>
	.wrapper {
		border-radius: 15px;
		background: linear-gradient(#7fbcab 0%, #fbc05d 100%);
		padding: 2px;
		display: grid;
		place-content: center;
		box-shadow: var(--shadow);
	}
	iframe {
		border-radius: 15px;
		min-height: 30vh;
		border: none;
	}
</style>
