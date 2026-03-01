<script>
	import { getWeatherInfo } from '$lib/utils/weather.js';
	import * as m from '$lib/paraglide/messages.js';

	let { weather } = $props();

	const descriptions = {
		weather_clear: () => m.weather_clear(),
		weather_mainly_clear: () => m.weather_mainly_clear(),
		weather_partly_cloudy: () => m.weather_partly_cloudy(),
		weather_overcast: () => m.weather_overcast(),
		weather_fog: () => m.weather_fog(),
		weather_drizzle: () => m.weather_drizzle(),
		weather_rain: () => m.weather_rain(),
		weather_snow: () => m.weather_snow(),
		weather_showers: () => m.weather_showers(),
		weather_thunderstorm: () => m.weather_thunderstorm(),
		weather_unknown: () => m.weather_unknown()
	};

	let info = $derived(weather ? getWeatherInfo(weather.id, weather.icon.endsWith('d')) : null);
	let isNight = $derived(weather ? !weather.icon.endsWith('d') : true);

	let hovered = $state(false);
</script>

{#if !weather}
	<div class="weather-card skeleton widget" aria-hidden="true">
		<div class="glow"></div>
		<div class="header">
			<div class="location-row">
				<div class="skel-pin"></div>
				<div class="skel-line" style="width: 80px;"></div>
			</div>
			<div class="skel-badge"></div>
		</div>
		<div class="temp-section">
			<div class="temp-row">
				<div class="skel-icon"></div>
				<div class="skel-line" style="width: 60px; height: 3.5rem;"></div>
			</div>
			<div class="skel-line" style="width: 150px;"></div>
		</div>
		<div class="divider"></div>
		<div class="stats-row">
			<div class="stat">
				<div class="skel-stat-icon"></div>
				<div class="skel-line" style="width: 40px;"></div>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<div class="skel-stat-icon"></div>
				<div class="skel-line" style="width: 35px;"></div>
			</div>
		</div>
	</div>
{/if}

{#if weather && info}
	<a
		href="https://www.clima.com/argentina/chubut/lago-puelo"
		target="_blank"
		rel="noopener noreferrer"
		class="widget"
		aria-label={m.weather_aria_label()}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
	>
		<div class="glow" class:glow-active={hovered}></div>

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
			<span class="condition-badge">{descriptions[info.descriptionKey]()}</span>
		</div>

		<div class="temp-section">
			<div class="temp-row">
				<div class="icon-container" class:icon-hover={hovered}>
					{#if isNight}
						<svg
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="weather-icon"
							aria-hidden="true"
						>
							<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
						</svg>
					{:else}
						<svg
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="weather-icon"
							aria-hidden="true"
						>
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
					{/if}
				</div>

				<div class="temp-value">
					<span class="temp-number">{Math.round(weather.temp)}</span>
					<span class="temp-unit">°C</span>
				</div>
			</div>

			<p class="feels-like">
				{m.weather_feels_like_text()} <strong>{Math.round(weather.feels_like)}°C</strong>
			</p>
		</div>

		<div class="divider"></div>

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
					<span class="stat-value">{Math.round(weather.wind)} km/h</span>
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
					<span class="stat-value">{weather.humidity}%</span>
					<span class="stat-label">{m.weather_humidity()}</span>
				</div>
			</div>
		</div>
	</a>
{/if}

<style>
	.widget {
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 340px;
		margin-inline: auto;
		border-radius: 20px;
		background-color: #0f1623;
		border: 1px solid rgba(255, 255, 255, 0.06);
		padding: 24px;
		color: #e2e8f0;
		font-family: system-ui, -apple-system, sans-serif;
		box-shadow:
			0 4px 24px rgba(0, 0, 0, 0.3),
			0 1px 2px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.widget:hover {
		transform: translateY(-2px);
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.4),
			0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.glow {
		position: absolute;
		top: -40px;
		right: -40px;
		width: 120px;
		height: 120px;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(165, 180, 252, 0.12) 0%, transparent 70%);
		transition: opacity 0.4s ease;
		opacity: 0.5;
		pointer-events: none;
	}

	.glow-active {
		opacity: 1;
	}

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

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%);
		border: 1px solid rgba(165, 180, 252, 0.1);
		transition: background 0.3s ease;
		flex-shrink: 0;
	}

	.icon-hover {
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.14) 0%, rgba(99, 102, 241, 0.08) 100%);
	}

	.weather-icon {
		color: #a5b4fc;
		transition: transform 0.4s ease;
	}

	.icon-hover .weather-icon {
		transform: rotate(-12deg) scale(1.05);
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

	.divider {
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			rgba(255, 255, 255, 0.06),
			transparent
		);
	}

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

	.skeleton {
		width: 100%;
		max-width: 340px;
		margin-inline: auto;
		pointer-events: none;
	}

	.skel-pin {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-badge {
		width: 60px;
		height: 24px;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-icon {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-stat-icon {
		width: 16px;
		height: 16px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-line {
		height: 0.75rem;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.06);
		animation: shimmer 1.5s ease-in-out infinite;
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

	@media screen and (min-width: 1024px) {
		.widget {
			max-width: 400px;
		}
	}
</style>
