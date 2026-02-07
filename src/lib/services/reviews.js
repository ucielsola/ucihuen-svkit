import { PRIVATE_GOOGLE_API_KEY } from '$env/static/private';
import { PUBLIC_GOOGLE_PLACE_ID } from '$env/static/public';
import json from '$lib/data/reviews.min.json';

const CACHE_TTL_MS = 10 * 60 * 1000;
let cache = { data: null, expires: 0 };

function formatUnixDate(unix) {
	const d = new Date(unix * 1000);
	const dd = String(d.getDate()).padStart(2, '0');
	const mm = String(d.getMonth() + 1).padStart(2, '0');
	const yyyy = d.getFullYear();
	return `${dd}/${mm}/${yyyy}`;
}

function mapApiReview(r) {
	return {
		autor_name: r.author_name,
		autor_image: r.profile_photo_url,
		review_text: r.text,
		review_link: `https://search.google.com/local/reviews?placeid=${PUBLIC_GOOGLE_PLACE_ID}`,
		review_rating: String(r.rating),
		review_date: formatUnixDate(r.time)
	};
}

async function fetchGoogleReviews() {
	const url =
		`https://maps.googleapis.com/maps/api/place/details/json` +
		`?place_id=${PUBLIC_GOOGLE_PLACE_ID}` +
		`&fields=reviews` +
		`&reviews_sort=newest` +
		`&language=es` +
		`&key=${PRIVATE_GOOGLE_API_KEY}`;

	const res = await fetch(url);
	if (!res.ok) return [];

	const data = await res.json();
	if (data.status !== 'OK' || !data.result?.reviews) return [];

	return data.result.reviews.map(mapApiReview);
}

export async function getReviews() {
	const now = Date.now();
	if (cache.data && cache.expires > now) return cache.data;

	const localReviews = json.reviews;

	let apiReviews = [];
	try {
		apiReviews = await fetchGoogleReviews();
	} catch {
		// fallback to local-only
	}

	const existingAuthors = new Set(localReviews.map((r) => r.autor_name.trim().toLowerCase()));
	const newReviews = apiReviews.filter(
		(r) => !existingAuthors.has(r.autor_name.trim().toLowerCase())
	);

	const merged = [...newReviews, ...localReviews];
	const filtered = merged.filter((r) => r.review_text && Number(r.review_rating) >= 4);
	cache = { data: filtered, expires: now + CACHE_TTL_MS };
	return filtered;
}
