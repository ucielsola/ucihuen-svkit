<script lang="ts">
	import { MapPin } from 'lucide-svelte';

	let { info, m } = $props();

	const weatherKeys: Record<string, string> = {
		weather_clear: 'weather_clear',
		weather_mainly_clear: 'weather_mainly_clear',
		weather_partly_cloudy: 'weather_partly_cloudy',
		weather_overcast: 'weather_overcast',
		weather_fog: 'weather_fog',
		weather_drizzle: 'weather_drizzle',
		weather_rain: 'weather_rain',
		weather_snow: 'weather_snow',
		weather_showers: 'weather_showers',
		weather_thunderstorm: 'weather_thunderstorm',
		weather_unknown: 'weather_unknown'
	};
</script>

<div class="header">
	<div class="location-row">
		<span class="pin-icon">
			<MapPin size={14} aria-hidden="true" />
		</span>
		<span class="location-text">Lago Puelo</span>
	</div>
	<span class="condition-badge">{m[weatherKeys[info] || info] || info}</span>
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
		gap: var(--weather-spacing-xs);
	}

	.pin-icon {
		color: var(--weather-text-muted);
		flex-shrink: 0;
	}

	.location-text {
		font-size: 14px;
		font-weight: 500;
		color: var(--weather-text-secondary);
		letter-spacing: 0.02em;
	}

	.condition-badge {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--weather-accent);
		background-color: var(--weather-badge-bg);
		padding: 4px 10px;
		border-radius: var(--weather-radius-full);
		border: 1px solid var(--weather-border-hover);
	}
</style>
