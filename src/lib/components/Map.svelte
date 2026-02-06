<script>
	import { PUBLIC_API_KEY } from '$env/static/public';
</script>

<div class="wrapper">
	<iframe
		title="Cabañas Ucihuen | Lago Puelo, Chubut, Arg."
		allowfullscreen
		src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_API_KEY}&q=Cabanas+Ucihuen"
	></iframe>
</div>

<style>
	.wrapper {
		border-radius: var(--radius);
		background: linear-gradient(#7fbcab 0%, #fbc05d 100%);
		padding: 2px;
		box-shadow: var(--shadow);
	}
	iframe {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: var(--radius);
		border: none;
	}
</style>
