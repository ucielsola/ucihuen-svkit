import { getReviews } from '$lib/services/reviews';
import { getWeather } from '$lib/services/weather';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { reviews, rating, reviewCount } = await getReviews();
	return {
		reviews,
		reviewStats: rating ? { ratingValue: String(rating), reviewCount } : null,
		weather: await getWeather()
	};
};
