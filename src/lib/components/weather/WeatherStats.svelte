<script>
	import * as m from '$lib/paraglide/messages';
	import { Wind, Droplets } from 'lucide-svelte';

	let { windSpeed, precipitation } = $props();
</script>

<div class="stats-row">
	<div class="stat">
		<span class="stat-icon">
			<Wind size={16} aria-hidden="true" />
		</span>
		<div class="stat-content">
			<span class="stat-value">{Math.round(windSpeed)} km/h</span>
			<span class="stat-label">{m.weather_wind()}</span>
		</div>
	</div>

	<div class="stat-divider"></div>

	<div class="stat">
		<span class="stat-icon">
			<Droplets size={16} aria-hidden="true" />
		</span>
		<div class="stat-content">
			<span class="stat-value">{precipitation} mm</span>
			<span class="stat-label">Lluvia</span>
		</div>
	</div>
</div>

<style>
	.stats-row {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.stat-icon {
		color: var(--weather-text-label);
		flex-shrink: 0;
	}

	.stat-content {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.stat-value {
		font-size: 14px;
		font-weight: 500;
		color: var(--weather-accent-hover);
		letter-spacing: -0.01em;
	}

	.stat-label {
		font-size: 11px;
		color: var(--weather-text-label);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.stat-divider {
		width: 1px;
		height: 32px;
		background-color: var(--weather-divider);
	}
</style>
