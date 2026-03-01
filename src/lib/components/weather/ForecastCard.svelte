<script lang="ts">
	import { formatDate } from '$lib/utils/date';
	import ForecastWeatherIcon from './ForecastWeatherIcon.svelte';

	let { day } = $props();
</script>

<a
	href="https://www.clima.com/argentina/chubut/lago-puelo"
	target="_blank"
	rel="noopener noreferrer"
	class="forecast-card"
>
	<div class="forecast-icon-wrapper">
		<ForecastWeatherIcon weatherCode={day.weather_code} />
	</div>
	<div class="forecast-info">
		<div class="forecast-header">
			<span class="forecast-date">{formatDate(day.date)}</span>
		</div>
		<div class="forecast-temp">
			<span class="temp-high">{Math.round(day.temp_max)}°</span>
			<span class="temp-low">{Math.round(day.temp_min)}°</span>
		</div>
		<div class="forecast-details">
			<div class="detail-item">
				<span class="detail-label">UV</span>
				<span class="detail-value">{day.uv_max}</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Lluvia</span>
				<span class="detail-value">{day.precip_prob}%</span>
			</div>
			<div class="detail-item">
				<span class="detail-label">Ráfagas</span>
				<span class="detail-value">{Math.round(day.wind_gusts_max)}</span>
			</div>
		</div>
	</div>
</a>

<style>
	.forecast-card {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--weather-spacing-md);
		padding: var(--weather-spacing-md);
		background-color: var(--weather-card-bg);
		border: 1px solid var(--weather-border);
		border-radius: var(--weather-radius-md);
		transition: all var(--easing);
		min-width: 200px;
		text-decoration: none;
	}

	.forecast-card:hover {
		background-color: var(--weather-card-bg-hover);
		border-color: var(--weather-border-hover);
		transform: var(--weather-transform);
	}

	.forecast-icon-wrapper {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.forecast-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-width: 0;
	}

	.forecast-header {
		display: flex;
		align-items: center;
	}

	.forecast-date {
		font-size: 14px;
		font-weight: 500;
		color: var(--weather-text-secondary);
	}

	.forecast-temp {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}

	.temp-high {
		font-size: var(--weather-temp-md);
		font-weight: 500;
		color: var(--weather-text-primary);
	}

	.temp-low {
		font-size: var(--weather-temp-sm);
		font-weight: 400;
		color: var(--weather-text-muted);
	}

	.forecast-details {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: var(--weather-spacing-xs);
		font-size: 12px;
	}

	.detail-label {
		color: var(--weather-text-label);
	}

	.detail-value {
		color: var(--weather-text-secondary);
		font-weight: 500;
	}
</style>
