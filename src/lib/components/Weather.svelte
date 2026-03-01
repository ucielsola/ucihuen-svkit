<script>
	import { getWeatherDescriptionKey } from '$lib/services/weather.js';
	import * as m from '$lib/paraglide/messages.js';
	import WeatherSkeleton from './weather/WeatherSkeleton.svelte';
	import WeatherHeader from './weather/WeatherHeader.svelte';
	import WeatherIcon from './weather/WeatherIcon.svelte';
	import TemperatureDisplay from './weather/TemperatureDisplay.svelte';
	import WeatherStats from './weather/WeatherStats.svelte';
	import ForecastToggle from './weather/ForecastToggle.svelte';
	import ForecastContainer from './weather/ForecastContainer.svelte';

	let { weather } = $props();

	let info = $derived(weather ? getWeatherDescriptionKey(weather.current?.weather_code || 0) : null);
	let isNight = $derived(weather ? !weather.current?.is_day : true);
	let expanded = $state(false);
	let hovered = $state(false);
</script>

{#if !weather}
	<WeatherSkeleton />
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

		<WeatherHeader {info} />

		<div class="temp-section">
			<div class="temp-row">
				<WeatherIcon {isNight} {hovered} />
				<TemperatureDisplay temp={weather.current.temp} apparentTemp={weather.current.apparent_temp} />
			</div>
		</div>

		<div class="divider"></div>

		<WeatherStats windSpeed={weather.current.wind_speed} precipitation={weather.current.precipitation} />
	</a>

	<ForecastToggle {expanded} onToggle={() => (expanded = !expanded)} />

	{#if expanded}
		<ForecastContainer forecast={weather.forecast} />
	{/if}
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
		text-decoration: none;
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

	.divider {
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			rgba(255, 255, 255, 0.06),
			transparent
		);
	}

	@media screen and (min-width: 1024px) {
		.widget {
			max-width: 400px;
		}
	}
</style>
