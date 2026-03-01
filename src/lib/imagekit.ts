import { buildSrc } from '@imagekit/javascript';

const URL_ENDPOINT = 'https://ik.imagekit.io/ucihuen';

interface Transformation {
	[key: string]: string | number;
}

function ikUrl(path: string, transformation: Transformation): string {
	return buildSrc({
		urlEndpoint: URL_ENDPOINT,
		src: path,
		transformation: [transformation]
	});
}

export function sliderUrl(path: string, width: number): string {
	return ikUrl(path, { width, quality: 80, format: 'auto' });
}

export function sliderSrcset(path: string): string {
	return `${sliderUrl(path, 400)} 400w, ${sliderUrl(path, 800)} 800w`;
}

export function modalUrl(path: string): string {
	return ikUrl(path, { quality: 90, format: 'auto' });
}

export function lqipUrl(path: string): string {
	return ikUrl(path, { width: 30, quality: 20, blur: 30, format: 'auto' });
}
