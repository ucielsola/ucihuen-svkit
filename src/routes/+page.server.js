import json from '$lib/data/reviews.min.json';

export function load() {
	return { reviews: json.reviews.filter((r) => r.review_text && Number(r.review_rating) >= 4) };
}
