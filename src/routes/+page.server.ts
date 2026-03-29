import { getReviews } from '$lib/services/reviews';
import { getWeather } from '$lib/services/weather';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { reviews } = await getReviews();
	return {
		reviews,
		weather: await getWeather()
	};
};
