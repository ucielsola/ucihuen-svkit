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
			})
			.catch((err) => {
				if (err.name !== 'AbortError') error = true;
			});

		return () => controller.abort();
	});
</script>

{#if weather && info && !error}
	<a
		href="https://www.clima.com/argentina/chubut/lago-puelo"
		target="_blank"
		class="weather-card"
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
		background: linear-gradient(135deg, rgba(127, 188, 171, 0.15), rgba(251, 192, 93, 0.15));
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
