<script>
	import { formatDate } from '$lib/utils/date.js';
	import ForecastWeatherIcon from './ForecastWeatherIcon.svelte';

	let { day } = $props();
</script>

<div class="forecast-card">
	<div class="forecast-header">
		<span class="forecast-date">{formatDate(day.date)}</span>
	</div>
	<ForecastWeatherIcon weatherCode={day.weather_code} />
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

<style>
	.forecast-card {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
		background-color: rgba(15, 22, 35, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		transition: all 0.3s ease;
	}

	.forecast-card:hover {
		background-color: rgba(15, 22, 35, 0.9);
		border-color: rgba(165, 180, 252, 0.15);
		transform: translateY(-2px);
	}

	.forecast-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.forecast-date {
		font-size: 13px;
		font-weight: 500;
		color: #94a3b8;
	}

	.forecast-temp {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}

	.temp-high {
		font-size: 20px;
		font-weight: 500;
		color: #f1f5f9;
	}

	.temp-low {
		font-size: 16px;
		font-weight: 400;
		color: #64748b;
	}

	.forecast-details {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.detail-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 11px;
	}

	.detail-label {
		color: #475569;
	}

	.detail-value {
		color: #94a3b8;
		font-weight: 500;
	}
</style>
