import { getReviews } from '$lib/services/reviews.js';
import { getWeather } from '$lib/services/weather.js';

export async function load() {
	const { reviews, rating, reviewCount } = await getReviews();
	return {
		reviews,
		reviewStats: rating ? { ratingValue: String(rating), reviewCount } : null,
		weather: await getWeather()
	};
}
