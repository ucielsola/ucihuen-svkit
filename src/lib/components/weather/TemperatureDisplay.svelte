<script>
	import * as m from '$lib/paraglide/messages.js';

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
		gap: 8px;
	}

	.temp-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.temp-value {
		display: flex;
		align-items: flex-start;
		line-height: 1;
	}

	.temp-number {
		font-size: 56px;
		font-weight: 200;
		color: #f1f5f9;
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.temp-unit {
		font-size: 20px;
		font-weight: 300;
		color: #64748b;
		margin-top: 6px;
		margin-left: 2px;
	}

	.feels-like {
		font-size: 13px;
		color: #64748b;
		margin: 0;
		padding-left: 80px;
	}

	.feels-like strong {
		color: #94a3b8;
		font-weight: 500;
	}
</style>
