import { PUBLIC_OPENWEATHER_KEY } from '$env/static/public';
import { getWeatherUrl } from '$lib/utils/weather.js';

export async function getWeather() {
	try {
		const response = await fetch(getWeatherUrl(PUBLIC_OPENWEATHER_KEY));

		if (!response.ok) {
			console.error('Weather API error:', response.status);
			return null;
		}

		const data = await response.json();

		return {
			id: data.weather[0].id,
			icon: data.weather[0].icon,
			temp: data.main.temp,
			feels_like: data.main.feels_like,
			humidity: data.main.humidity,
			wind: data.wind.speed * 3.6
		};
	} catch (err) {
		console.error('Weather fetch error:', err);
		return null;
	}
}
