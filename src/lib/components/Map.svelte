<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_API_KEY, PUBLIC_MAP_ID } from '$env/static/public';
	import { browser } from '$app/environment';

	let mapEl: HTMLDivElement;

	const position = { lat: -42.068487, lng: -71.600908 };

	onMount(async () => {
		if (!window.google || !window.google.maps) {
			await new Promise<void>((resolve, reject) => {
				const script = document.createElement('script');
				script.src = `https://maps.googleapis.com/maps/api/js?key=${PUBLIC_API_KEY}&libraries=marker`;
				script.async = true;
				script.defer = true;
				script.onload = () => resolve();
				script.onerror = () => reject('Error al cargar Google Maps');
				document.head.appendChild(script);
			});
		}

		new google.maps.Map(mapEl, {
			center: position,
			zoom: 20,
			mapId: PUBLIC_MAP_ID,
			disableDefaultUI: true,
			zoomControl: true,
			fullscreenControl: true
		});
	});
</script>

<div class="border-primary h-98 w-98 overflow-hidden rounded-lg border shadow-md">
	{#if browser}
		<div
			bind:this={mapEl}
			class="ounded-lg w-full h-full"
		></div>
	{/if}
</div>
