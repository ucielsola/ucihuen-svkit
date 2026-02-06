import ImageKit from '@imagekit/nodejs';
import { PRIVATE_IMAGEKIT_KEY } from '$env/static/private';

const ik = new ImageKit({ privateKey: PRIVATE_IMAGEKIT_KEY });

const sections = [
	{ key: 'ext', path: '/ext/' },
	{ key: 'cab_1', path: '/int/cab_1/' },
	{ key: 'cab_2', path: '/int/cab_2/' }
];

/** Hardcoded fallback paths matching the original getPhotos() behavior */
const fallback = {
	ext: Array.from({ length: 13 }, (_, i) => `ext/${i + 1}.webp`),
	cab_1: Array.from({ length: 11 }, (_, i) => `int/cab_1/${i + 1}.webp`),
	cab_2: Array.from({ length: 11 }, (_, i) => `int/cab_2/${i + 1}.webp`)
};

export async function load() {
	try {
		const results = await Promise.all(
			sections.map(({ path }) =>
				ik.assets.list({ path, sort: 'ASC_NAME', limit: 100, fileType: 'image', type: 'file' })
			)
		);

		const images = {};
		for (let i = 0; i < sections.length; i++) {
			const items = results[i];
			images[sections[i].key] = items
				.filter((item) => item.filePath)
				.map((item) => item.filePath.replace(/^\//, ''));
		}

		return { images };
	} catch (err) {
		console.error('ImageKit assets.list failed, using fallback:', err.message);
		return { images: fallback };
	}
}
