<script>
	import { formatDate } from '$lib/utils/date.js';

	let { day } = $props();
</script>

<div class="forecast-card">
	<div class="forecast-header">
		<span class="forecast-date">{formatDate(day.date)}</span>
	</div>
	<div class="forecast-icon">
		{#if day.weather_code === 0}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		{:else if day.weather_code <= 2}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
				<path d="M18 20a3 3 0 0 0-3 3h-6a3 3 0 0 0-3-3" />
				<path d="M2 20h20" />
			</svg>
		{:else if day.weather_code === 3}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M18 20a3 3 0 0 0-3 3h-6a3 3 0 0 0-3-3" />
				<path d="M2 20h20" />
				<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			</svg>
		{:else if day.weather_code <= 48}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			</svg>
		{:else if day.weather_code <= 55 || (day.weather_code >= 61 && day.weather_code <= 65)}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M18 20a3 3 0 0 0-3 3h-6a3 3 0 0 0-3-3" />
				<path d="M2 20h20" />
				<path d="M10 9v-4a2 2 0 1 1 4 0v4" />
				<path d="M10 9a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3z" />
			</svg>
		{:else if day.weather_code <= 67 || day.weather_code >= 80}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M18 20a3 3 0 0 0-3 3h-6a3 3 0 0 0-3-3" />
				<path d="M2 20h20" />
				<path d="M10 9v-4a2 2 0 1 1 4 0v4" />
				<path d="M10 9a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3z" />
				<path d="M12 3l2 2-2 2" />
			</svg>
		{:else if day.weather_code <= 75}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
				<path d="M8 17l4 4 4-4" />
			</svg>
		{:else}
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M18 20a3 3 0 0 0-3 3h-6a3 3 0 0 0-3-3" />
				<path d="M2 20h20" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		{/if}
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

	.forecast-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		background: rgba(165, 180, 252, 0.05);
		border-radius: 12px;
		color: #a5b4fc;
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
