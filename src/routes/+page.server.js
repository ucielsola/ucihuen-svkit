import { getReviews } from '$lib/services/reviews.js';
import { getWeather } from '$lib/services/weather.js';

export async function load() {
	return {
		reviews: await getReviews(),
		weather: await getWeather()
	};
}
