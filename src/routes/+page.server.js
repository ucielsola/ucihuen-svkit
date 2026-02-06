import { getReviews } from '$lib/services/reviews.js';

export async function load() {
	return { reviews: await getReviews() };
}
