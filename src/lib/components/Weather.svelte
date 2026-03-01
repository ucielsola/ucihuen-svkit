<script>
	import { getWeatherDescriptionKey } from '$lib/services/weather.js';
	import * as m from '$lib/paraglide/messages.js';
	import { X } from 'lucide-svelte';
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
		<button
			class="backdrop"
			onclick={() => (expanded = false)}
			onkeydown={(e) => e.key === 'Escape' && (expanded = false)}
			aria-label={m.weather_close()}
		></button>
		<div class="modal">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title">{m.weather_forecast_title()}</h2>
					<button class="modal-close" onclick={() => (expanded = false)} aria-label={m.weather_close()}>
						<X size={20} />
					</button>
				</div>
				<ForecastContainer forecast={weather.forecast} />
			</div>
		</div>
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

	.backdrop {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
		z-index: 9998;
		animation: fadeIn 0.2s ease;
		cursor: pointer;
	}

	.modal {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 20px;
		animation: slideUp 0.3s ease;
	}

	.modal-content {
		background-color: #0f1623;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 24px;
		max-width: 800px;
		max-height: 90vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.modal-title {
		font-size: 18px;
		font-weight: 600;
		color: #f1f5f9;
		margin: 0;
	}

	.modal-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.05);
		border: none;
		color: #94a3b8;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.modal-close:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: #f1f5f9;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
