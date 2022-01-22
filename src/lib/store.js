import { readable } from 'svelte/store';

export const getWindowWidth = readable(null, (set) => {
	set(window.innerWidth);
	return;
});

export const getWindowHeight = readable(null, (set) => {
	set(window.innerHeight);
	return;
});

export const getContainerHeight = readable(null, (set) => {
	set(document.querySelector('#svelte').scrollHeight);
	return;
});

export const getFooterHeight = readable(null, (set) => {
	set(document.querySelector('footer').scrollHeight);
	return;
});
