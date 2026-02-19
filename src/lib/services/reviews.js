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
		`&fields=reviews,rating,user_ratings_total` +
		`&reviews_sort=newest` +
		`&language=es` +
		`&key=${PRIVATE_GOOGLE_API_KEY}`;

	const res = await fetch(url);
	if (!res.ok) return { reviews: [], rating: null, reviewCount: 0 };

	const data = await res.json();
	if (data.status !== 'OK' || !data.result?.reviews)
		return { reviews: [], rating: null, reviewCount: 0 };

	return {
		reviews: data.result.reviews.map(mapApiReview),
		rating: data.result.rating ?? null,
		reviewCount: data.result.user_ratings_total ?? 0
	};
}

export async function getReviews() {
	const now = Date.now();
	if (cache.data && cache.expires > now) return cache.data;

	const localReviews = json.reviews;

	let apiResult = { reviews: [], rating: null, reviewCount: 0 };
	try {
		apiResult = await fetchGoogleReviews();
	} catch {
		// fallback to local-only
	}

	const existingAuthors = new Set(localReviews.map((r) => r.autor_name.trim().toLowerCase()));
	const newReviews = apiResult.reviews.filter(
		(r) => !existingAuthors.has(r.autor_name.trim().toLowerCase())
	);

	const merged = [...newReviews, ...localReviews];
	const filtered = merged.filter((r) => r.review_text && Number(r.review_rating) >= 4);

	let { rating, reviewCount } = apiResult;
	if (!rating && filtered.length > 0) {
		const sum = filtered.reduce((acc, r) => acc + Number(r.review_rating), 0);
		rating = Math.round((sum / filtered.length) * 10) / 10;
		reviewCount = filtered.length;
	}

	const result = { reviews: filtered, rating, reviewCount };
	cache = { data: result, expires: now + CACHE_TTL_MS };
	return result;
}
