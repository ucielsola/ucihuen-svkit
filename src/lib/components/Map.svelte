<script>
	import { PUBLIC_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import { MapPin } from 'lucide-svelte';

	let loading = $state(true);

	onMount(() => {
		const timer = setTimeout(() => {
			loading = false;
		}, 2000);

		return () => clearTimeout(timer);
	});
</script>

<div class="wrapper">
	{#if loading}
		<div class="skeleton" aria-hidden="true">
			<span class="skeleton-icon">
				<MapPin size={48} strokeWidth={1.2} />
			</span>
		</div>
	{/if}

	<iframe
		class:visible={!loading}
		title="Cabañas Ucihuen | Lago Puelo, Chubut, Arg."
		allowfullscreen
		src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_API_KEY}&q=Cabanas+Ucihuen"
	></iframe>
</div>

<style>
	.wrapper {
		border-radius: var(--radius-sm);
		background: linear-gradient(var(--accent-teal) 0%, var(--accent-gold) 100%);
		padding: 2px;
		box-shadow: var(--shadow);
		position: relative;
	}

	iframe {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: var(--radius-sm);
		border: none;
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	iframe.visible {
		opacity: 1;
	}

	.skeleton {
		position: absolute;
		inset: 2px;
		border-radius: var(--radius-sm);
		background: var(--bg-color);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skeleton-icon {
		color: var(--base-color);
		opacity: 0.15;
	}

	@keyframes shimmer {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
	}
</style>
