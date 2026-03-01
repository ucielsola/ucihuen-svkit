import ImageKit from '@imagekit/nodejs';
import { PRIVATE_IMAGEKIT_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

const ik = new ImageKit({ privateKey: PRIVATE_IMAGEKIT_KEY });

const sections = [
	{ key: 'ext', path: '/ext/' },
	{ key: 'cab_1', path: '/int/cab_1/' },
	{ key: 'cab_2', path: '/int/cab_2/' }
] as const;

type Section = (typeof sections)[number];

interface ImageListResult {
	ext: string[];
	cab_1: string[];
	cab_2: string[];
}

/** Hardcoded fallback paths matching the original getPhotos() behavior */
const fallback: ImageListResult = {
	ext: Array.from({ length: 13 }, (_, i) => `ext/${i + 1}.webp`),
	cab_1: Array.from({ length: 11 }, (_, i) => `int/cab_1/${i + 1}.webp`),
	cab_2: Array.from({ length: 11 }, (_, i) => `int/cab_2/${i + 1}.webp`)
};

export const load: PageServerLoad = async () => {
	try {
		const results = await Promise.all(
			sections.map(({ path }: Section) =>
				ik.assets.list({ path, sort: 'ASC_NAME', limit: 100, fileType: 'image', type: 'file' })
			)
		);

		const images: Partial<ImageListResult> = {};
		for (let i = 0; i < sections.length; i++) {
			const items = results[i] || [];
			const fileItems = items.filter((item) => item.type === 'file' && item.filePath);
			images[sections[i].key] = fileItems.map((item) => item.filePath!.replace(/^\//, ''));
		}

		return { images };
	} catch (err) {
		console.error(
			'ImageKit assets.list failed, using fallback:',
			err instanceof Error ? err.message : 'Unknown error'
		);
		return { images: fallback };
	}
};
