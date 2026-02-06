/**
 * Builds the OpenWeatherMap API URL for Lago Puelo.
 * @param {string} apiKey - OpenWeatherMap API key
 * @returns {string}
 */
export function getWeatherUrl(apiKey) {
	return `https://api.openweathermap.org/data/2.5/weather?lat=-42.0727885&lon=-71.6080007&units=metric&appid=${apiKey}`;
}

/**
 * Maps OpenWeatherMap condition IDs to icon name and i18n description key.
 * @param {number} id - OWM weather condition ID
 * @param {boolean} isDay - true if daytime
 * @returns {{ icon: string, descriptionKey: string }}
 */
export function getWeatherInfo(id, isDay) {
	if (id >= 200 && id <= 232) {
		return { icon: 'CloudLightning', descriptionKey: 'weather_thunderstorm' };
	}
	if (id >= 300 && id <= 321) {
		return { icon: 'CloudDrizzle', descriptionKey: 'weather_drizzle' };
	}
	if (id >= 500 && id <= 531) {
		return { icon: 'CloudRain', descriptionKey: 'weather_rain' };
	}
	if (id >= 600 && id <= 622) {
		return { icon: 'Snowflake', descriptionKey: 'weather_snow' };
	}
	if (id >= 701 && id <= 781) {
		return { icon: 'CloudFog', descriptionKey: 'weather_fog' };
	}
	if (id === 800) {
		return {
			icon: isDay ? 'Sun' : 'Moon',
			descriptionKey: 'weather_clear'
		};
	}
	if (id === 801) {
		return {
			icon: isDay ? 'CloudSun' : 'CloudMoon',
			descriptionKey: 'weather_mainly_clear'
		};
	}
	if (id === 802) {
		return {
			icon: isDay ? 'CloudSun' : 'CloudMoon',
			descriptionKey: 'weather_partly_cloudy'
		};
	}
	if (id >= 803 && id <= 804) {
		return { icon: 'Cloud', descriptionKey: 'weather_overcast' };
	}
	return { icon: 'Cloud', descriptionKey: 'weather_unknown' };
}
