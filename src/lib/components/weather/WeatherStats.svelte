<script>
	import * as m from '$lib/paraglide/messages.js';

	let { windSpeed, precipitation } = $props();
</script>

<div class="stats-row">
	<div class="stat">
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="stat-icon"
			aria-hidden="true"
		>
			<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
			<path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
			<path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
		</svg>
		<div class="stat-content">
			<span class="stat-value">{Math.round(windSpeed)} km/h</span>
			<span class="stat-label">{m.weather_wind()}</span>
		</div>
	</div>

	<div class="stat-divider"></div>

	<div class="stat">
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="stat-icon"
			aria-hidden="true"
		>
			<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
		</svg>
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
		color: #475569;
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
		color: #cbd5e1;
		letter-spacing: -0.01em;
	}

	.stat-label {
		font-size: 11px;
		color: #475569;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.stat-divider {
		width: 1px;
		height: 32px;
		background-color: rgba(255, 255, 255, 0.06);
	}
</style>
