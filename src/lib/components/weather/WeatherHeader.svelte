<script>
	import { useWeatherDescriptions } from '$lib/composables/weatherDescriptions.js';

	let { info } = $props();

	const descriptions = useWeatherDescriptions();
</script>

<div class="header">
	<div class="location-row">
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="pin-icon"
			aria-hidden="true"
		>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
		<span class="location-text">Lago Puelo</span>
	</div>
	<span class="condition-badge">{descriptions[info]()}</span>
</div>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.location-row {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.pin-icon {
		color: #64748b;
		flex-shrink: 0;
	}

	.location-text {
		font-size: 14px;
		font-weight: 500;
		color: #94a3b8;
		letter-spacing: 0.02em;
	}

	.condition-badge {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #a5b4fc;
		background-color: rgba(165, 180, 252, 0.1);
		padding: 4px 10px;
		border-radius: 9999px;
		border: 1px solid rgba(165, 180, 252, 0.15);
	}
</style>
