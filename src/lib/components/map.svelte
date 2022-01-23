<script>
	import { getWindowWidth } from '$lib/store.js';
	import { onMount } from 'svelte';
	let winWidth;

	onMount(() => {
		getWindowWidth.subscribe((value) => {
			// if on desktop value - 15px to rest scrollbar witdh
			value < 1024 ? (winWidth = value) : (winWidth = value - 15);
		});
	});
</script>

<div class="wrapper">
	<!-- vw - padding - border  -->
	<iframe
		title="Cabañas Ucihuen | Lago Puelo, Chubut, Arg."
		allowfullscreen
		width={winWidth - 32 - 6}
		src="https://www.google.com/maps/embed/v1/place?key={import.meta.env.VITE_API_KEY}
    &q=Cabanas+Ucihuen"
	/>
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
