<script>
	import Slider from '$lib/components/SliderGaleria.svelte';
	import { fade } from 'svelte/transition';

	import { modals } from 'svelte-modals';
	import Modal from '$lib/components/ModalImg.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let url = $state();
	let imgAlt = $state('Cabañas Ucihuen');
	function testImg() {
		modals.open(Modal, { src: url, alt: imgAlt });
	}

	const getPhotos = (type, cab) => {
		let quant;
		const arr = [];
		if (type === 'ext') {
			quant = 6;
			for (let i = 1; i <= quant; i++) {
				arr.push({
					src: `https://ik.imagekit.io/ucihuen/${type}/ucihuen_${type}_${i}.webp`,
					alt: m.alt_exterior_photo({ n: i }),
					id: i - 1
				});
			}
			return arr;
		}

		quant = cab === 'cab_2' ? 6 : 8;
		for (let i = 1; i <= quant; i++) {
			const altFn = cab === 'cab_1' ? m.alt_interior_cab1_photo : m.alt_interior_cab2_photo;
			arr.push({
				src: `https://ik.imagekit.io/ucihuen/${type}/${cab}/ucihuen_${cab}_${type}_${i}.webp`,
				alt: altFn({ n: i }),
				id: i - 1
			});
		}

		return arr;
	};

	let exterior = getPhotos('ext', null);
	let cab_1 = getPhotos('int', 'cab_1');
	let cab_2 = getPhotos('int', 'cab_2');
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
			<Slider items={cab_1} type="slide" delay={2300} sendClick={() => testImg()} bind:url bind:imgAlt />
		</div>
	</article>
	<article id="cab-2">
		<h3>{m.gallery_cab2_heading()}</h3>
		<h4>{m.gallery_cab2_subtitle()}</h4>
		<div class="container" in:fade|global={{ duration: 400, delay: 150 }}>
			<Slider items={cab_2} type="slide" delay={2400} sendClick={() => testImg()} bind:url bind:imgAlt />
		</div>
	</article>
	<article>
		<h3>{m.gallery_ext_heading()}</h3>
		<h4>{m.gallery_ext_subtitle()}</h4>
		<div class="container last" in:fade|global={{ duration: 500, delay: 200 }}>
			<Slider items={exterior} type="slide" delay={2500} sendClick={() => testImg()} bind:url bind:imgAlt />
		</div>
	</article>
</section>

<style>
	.container {
		margin-block-end: 1.5rem;
	}
	.last {
		margin-bottom: 6rem;
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
			padding-left: 3rem;
		}
		h4 {
			font-size: 1.3rem;
			padding-bottom: 1rem;
		}
	}
</style>
