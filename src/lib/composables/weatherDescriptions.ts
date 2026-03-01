import * as m from '$lib/paraglide/messages';

interface WeatherDescriptions {
	weather_clear: () => string;
	weather_mainly_clear: () => string;
	weather_partly_cloudy: () => string;
	weather_overcast: () => string;
	weather_fog: () => string;
	weather_drizzle: () => string;
	weather_rain: () => string;
	weather_snow: () => string;
	weather_showers: () => string;
	weather_thunderstorm: () => string;
	weather_unknown: () => string;
}

export function useWeatherDescriptions(): WeatherDescriptions {
	return {
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
}
