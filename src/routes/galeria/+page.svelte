<script>
	import Slider from '$lib/components/SliderGaleria.svelte';
	import { fade } from 'svelte/transition';

	import { modals } from 'svelte-modals';
	import Modal from '$lib/components/ModalImg.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { sliderUrl, sliderSrcset, modalUrl, lqipUrl } from '$lib/imagekit.js';

	let { data } = $props();

	let modalSrc = $state();
	let imgAlt = $state('Cabañas Ucihuen');
	function testImg() {
		modals.open(Modal, { src: modalSrc, alt: imgAlt });
	}

	function buildSlides(paths, altFn) {
		return paths.map((path, i) => ({
			src: sliderUrl(path, 400),
			srcset: sliderSrcset(path),
			modalSrc: modalUrl(path),
			lqip: lqipUrl(path),
			alt: altFn({ n: i + 1 }),
			id: i
		}));
	}

	let sections = $derived([
		{
			id: 'cab-1',
			heading: m.gallery_cab1_heading,
			subtitle: m.gallery_cab1_subtitle,
			slides: buildSlides(data.images.cab_1, m.alt_interior_cab1_photo)
		},
		{
			id: 'cab-2',
			heading: m.gallery_cab2_heading,
			subtitle: m.gallery_cab2_subtitle,
			slides: buildSlides(data.images.cab_2, m.alt_interior_cab2_photo)
		},
		{
			id: undefined,
			heading: m.gallery_ext_heading,
			subtitle: m.gallery_ext_subtitle,
			slides: buildSlides(data.images.ext, m.alt_exterior_photo)
		}
	]);
</script>

<svelte:head>
	<title>{m.gallery_title()}</title>
	<meta property="og:title" content={m.gallery_title()} />
</svelte:head>

<section>
	{#each sections as sec, i}
		<article id={sec.id}>
			<h3>{sec.heading()}</h3>
			<h4>{sec.subtitle()}</h4>
			<div
				class="container {i === sections.length - 1 ? 'last' : ''}"
				in:fade|global={{ duration: 300 + i * 100, delay: 100 + i * 50 }}
			>
				<Slider items={sec.slides} type="slide" delay={2300 + i * 100} sendClick={() => testImg()} bind:modalSrc bind:imgAlt />
			</div>
		</article>
	{/each}
</section>

<style>
	.container {
		margin-block-end: 1.5rem;
	}
	.last {
		margin-block-end: 6rem;
	}

	section {
		padding: 0;
		margin-block-start: 2rem;
	}

	h3,
	h4 {
		padding-inline: var(--padding-inline);
	}

	h4 {
		font-size: 0.875rem;
		letter-spacing: -0.8px;
		color: var(--primary-color);
		text-transform: uppercase;
	}

	@media screen and (min-width: 1024px) {
		section {
			margin-block-start: 3rem;
		}
		h3,
		h4 {
			padding-inline-start: 3rem;
		}
		h4 {
			font-size: 1.3rem;
			padding-block-end: 1rem;
		}
	}
</style>
