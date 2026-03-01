export interface OpenMeteoCurrent {
	temperature_2m: number;
	apparent_temperature: number;
	wind_speed_10m: number;
	wind_gusts_10m: number;
	is_day: number;
	precipitation: number;
	weather_code: number;
}

export interface OpenMeteoDaily {
	time: string[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	uv_index_max: number[];
	precipitation_probability_max: number[];
	rain_sum: number[];
	wind_gusts_10m_max: number[];
	sunrise: string[];
	sunset: string[];
	weather_code: number[];
}

export interface OpenMeteoResponse {
	current: OpenMeteoCurrent;
	daily: OpenMeteoDaily;
}

export interface WeatherData {
	current: {
		temp: number;
		apparent_temp: number;
		wind_speed: number;
		wind_gusts: number;
		is_day: boolean;
		precipitation: number;
		weather_code: number;
	};
	forecast: {
		date: string;
		temp_max: number;
		temp_min: number;
		uv_max: number;
		precip_prob: number;
		rain_sum: number;
		wind_gusts_max: number;
		sunrise: string;
		sunset: string;
		thermal_amplitude: number;
		weather_code: number;
	}[];
}

const WMO_CODES: Record<number, string> = {
	0: 'weather_clear',
	1: 'weather_mainly_clear',
	2: 'weather_partly_cloudy',
	3: 'weather_overcast',
	45: 'weather_fog',
	48: 'weather_fog',
	51: 'weather_drizzle',
	53: 'weather_drizzle',
	55: 'weather_drizzle',
	61: 'weather_rain',
	63: 'weather_rain',
	65: 'weather_rain',
	71: 'weather_snow',
	73: 'weather_snow',
	75: 'weather_snow',
	80: 'weather_showers',
	81: 'weather_showers',
	82: 'weather_showers',
	95: 'weather_thunderstorm',
	96: 'weather_thunderstorm',
	99: 'weather_thunderstorm'
};

export function getWeatherDescriptionKey(wmoCode: number): string {
	return WMO_CODES[wmoCode] || 'weather_unknown';
}

export async function getWeather(): Promise<WeatherData | null> {
	try {
		const url = new URL('https://api.open-meteo.com/v1/forecast');
		url.searchParams.append('latitude', '-42.06');
		url.searchParams.append('longitude', '-71.60');
		url.searchParams.append('timezone', 'America/Argentina/Buenos_Aires');
		url.searchParams.append(
			'current',
			'temperature_2m,apparent_temperature,wind_speed_10m,wind_gusts_10m,is_day,precipitation,weather_code'
		);
		url.searchParams.append(
			'daily',
			'temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max,rain_sum,wind_gusts_10m_max,sunrise,sunset,weather_code'
		);
		url.searchParams.append('forecast_days', '7');

		const response = await fetch(url);

		if (!response.ok) {
			console.error('Open-Meteo API error:', response.status);
			return null;
		}

		const data: OpenMeteoResponse = await response.json();

		const current = {
			temp: data.current.temperature_2m,
			apparent_temp: data.current.apparent_temperature,
			wind_speed: data.current.wind_speed_10m,
			wind_gusts: data.current.wind_gusts_10m,
			is_day: data.current.is_day === 1,
			precipitation: data.current.precipitation,
			weather_code: data.current.weather_code
		};

		const forecast = data.daily.time.map((date, i) => ({
			date,
			temp_max: data.daily.temperature_2m_max[i]!,
			temp_min: data.daily.temperature_2m_min[i]!,
			uv_max: data.daily.uv_index_max[i]!,
			precip_prob: data.daily.precipitation_probability_max[i]!,
			rain_sum: data.daily.rain_sum[i]!,
			wind_gusts_max: data.daily.wind_gusts_10m_max[i]!,
			sunrise: data.daily.sunrise[i]!.split('T')[1],
			sunset: data.daily.sunset[i]!.split('T')[1],
			weather_code: data.daily.weather_code[i]!,
			thermal_amplitude: data.daily.temperature_2m_max[i]! - data.daily.temperature_2m_min[i]!
		}));

		return { current, forecast };
	} catch (err) {
		console.error('Weather fetch error:', err);
		return null;
	}
}
