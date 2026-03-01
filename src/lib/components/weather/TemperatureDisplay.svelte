<script>
	import * as m from '$lib/paraglide/messages';

	let { temp, apparentTemp } = $props();
</script>

<div class="temp-section">
	<div class="temp-row">
		<div class="temp-value">
			<span class="temp-number">{Math.round(temp)}</span>
			<span class="temp-unit">°C</span>
		</div>
	</div>
	<p class="feels-like">
		{m.weather_feels_like_text()} <strong>{Math.round(apparentTemp)}°C</strong>
	</p>
</div>

<style>
	.temp-section {
		display: flex;
		flex-direction: column;
		gap: var(--weather-spacing-sm);
	}

	.temp-row {
		display: flex;
		align-items: center;
		gap: var(--weather-spacing-md);
	}

	.temp-value {
		display: flex;
		align-items: flex-start;
		line-height: 1;
	}

	.temp-number {
		font-size: var(--weather-temp-lg);
		font-weight: 200;
		color: var(--weather-text-primary);
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.temp-unit {
		font-size: 20px;
		font-weight: 300;
		color: var(--weather-text-muted);
		margin-top: 6px;
		margin-left: 2px;
	}

	.feels-like {
		font-size: 13px;
		color: var(--weather-text-muted);
		margin: 0;
		padding-left: 80px;
	}

	.feels-like strong {
		color: var(--weather-text-secondary);
		font-weight: 500;
	}
</style>
