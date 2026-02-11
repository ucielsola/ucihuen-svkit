<script>
	import {
		Sun,
		Moon,
		CloudSun,
		CloudMoon,
		Cloud,
		CloudFog,
		CloudDrizzle,
		CloudRain,
		Snowflake,
		CloudLightning,
		Thermometer,
		Wind,
		Droplets
	} from 'lucide-svelte';
	import { getWeatherUrl, getWeatherInfo } from '$lib/utils/weather.js';
	import { PUBLIC_OPENWEATHER_KEY } from '$env/static/public';
	import * as m from '$lib/paraglide/messages.js';

	const icons = {
		Sun,
		Moon,
		CloudSun,
		CloudMoon,
		Cloud,
		CloudFog,
		CloudDrizzle,
		CloudRain,
		Snowflake,
		CloudLightning
	};

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

	let weather = $state(null);
	let error = $state(false);
	let loading = $state(true);

	let info = $derived(weather ? getWeatherInfo(weather.id, weather.icon.endsWith('d')) : null);

	let WeatherIcon = $derived(info ? icons[info.icon] : null);

	$effect(() => {
		const controller = new AbortController();

		fetch(getWeatherUrl(PUBLIC_OPENWEATHER_KEY), { signal: controller.signal })
			.then((res) => res.json())
			.then((data) => {
				weather = {
					id: data.weather[0].id,
					icon: data.weather[0].icon,
					temp: data.main.temp,
					feels_like: data.main.feels_like,
					humidity: data.main.humidity,
					wind: data.wind.speed * 3.6
				};
				loading = false;
			})
			.catch((err) => {
				if (err.name !== 'AbortError') {
					error = true;
					loading = false;
				}
			});

		return () => controller.abort();
	});
</script>

{#if loading && !error}
	<div class="weather-card skeleton" aria-hidden="true">
		<div class="weather-main">
			<div class="skel-icon"></div>
			<div class="weather-temp">
				<div class="skel-line" style="width: 60px; height: 1.4rem;"></div>
				<div class="skel-line" style="width: 80px;"></div>
			</div>
		</div>
		<div class="weather-details">
			<div class="detail">
				<div class="skel-line" style="width: 14px; height: 14px; border-radius: 3px;"></div>
				<div class="skel-line" style="width: 55px;"></div>
			</div>
			<div class="detail">
				<div class="skel-line" style="width: 14px; height: 14px; border-radius: 3px;"></div>
				<div class="skel-line" style="width: 42px;"></div>
			</div>
			<div class="detail">
				<div class="skel-line" style="width: 14px; height: 14px; border-radius: 3px;"></div>
				<div class="skel-line" style="width: 28px;"></div>
			</div>
		</div>
	</div>
{/if}

{#if weather && info && !error}
	<a
		href="https://www.clima.com/argentina/chubut/lago-puelo"
		target="_blank"
		rel="noopener noreferrer"
		class="weather-card"
		class:fade-in={!loading}
		aria-label={m.weather_aria_label()}
	>
		<div class="weather-main">
			<WeatherIcon size={48} strokeWidth={1.5} />
			<div class="weather-temp">
				<span class="temp">{Math.round(weather.temp)}°C</span>
				<span class="desc">{descriptions[info.descriptionKey]()}</span>
			</div>
		</div>
		<div class="weather-details">
			<div class="detail">
				<Thermometer size={18} strokeWidth={1.5} />
				<span>{m.weather_feels_like()} {Math.round(weather.feels_like)}°C</span>
			</div>
			<div class="detail">
				<Wind size={18} strokeWidth={1.5} />
				<span>{Math.round(weather.wind)} km/h</span>
			</div>
			<div class="detail">
				<Droplets size={18} strokeWidth={1.5} />
				<span>{weather.humidity}%</span>
			</div>
		</div>
	</a>
{/if}

<style>
	.weather-card {
		background: linear-gradient(135deg, var(--accent-teal-light), var(--accent-gold-light));
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.weather-card.fade-in {
		animation: fade-in 0.5s ease;
	}

	.weather-main :global(svg) {
		min-width: 2rem;
	}

	.weather-main {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--base-color);
	}

	.weather-temp {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.temp {
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.1;
	}

	.desc {
		font-size: 0.9rem;
		opacity: 0.8;
	}

	.weather-details {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.detail {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.85rem;
		color: var(--base-color);
		opacity: 0.85;
	}

	/* Skeleton */
	.skeleton {
		pointer-events: none;
	}

	.skel-icon {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.08);
		animation: shimmer 1.5s ease-in-out infinite;
	}

	.skel-line {
		height: 0.75rem;
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.08);
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

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (min-width: 1024px) {
		.weather-card {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.weather-details {
			gap: 1.25rem;
		}
	}
</style>
