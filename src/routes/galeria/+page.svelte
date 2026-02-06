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

	let exterior = $derived(buildSlides(data.images.ext, m.alt_exterior_photo));
	let cab_1 = $derived(buildSlides(data.images.cab_1, m.alt_interior_cab1_photo));
	let cab_2 = $derived(buildSlides(data.images.cab_2, m.alt_interior_cab2_photo));
</script>

<svelte:head>
	<title>{m.gallery_title()}</title>
	<meta property="og:title" content={m.gallery_title()} />
</svelte:head>

<section>
	<article id="cab-1">
		<h3>{m.gallery_cab1_heading()}</h3>
		<h4>{m.gallery_cab1_subtitle()}</h4>
		<div class="container" in:fade|global={{ duration: 300, delay: 100 }}>
			<Slider items={cab_1} type="slide" delay={2300} sendClick={() => testImg()} bind:modalSrc bind:imgAlt />
		</div>
	</article>
	<article id="cab-2">
		<h3>{m.gallery_cab2_heading()}</h3>
		<h4>{m.gallery_cab2_subtitle()}</h4>
		<div class="container" in:fade|global={{ duration: 400, delay: 150 }}>
			<Slider items={cab_2} type="slide" delay={2400} sendClick={() => testImg()} bind:modalSrc bind:imgAlt />
		</div>
	</article>
	<article>
		<h3>{m.gallery_ext_heading()}</h3>
		<h4>{m.gallery_ext_subtitle()}</h4>
		<div class="container last" in:fade|global={{ duration: 500, delay: 200 }}>
			<Slider items={exterior} type="slide" delay={2500} sendClick={() => testImg()} bind:modalSrc bind:imgAlt />
		</div>
	</article>
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
