<script>
	import Slider from '$lib/components/sliderGaleria.svelte';
	import { fade } from 'svelte/transition';

	import { Modals, closeModal, openModal } from 'svelte-modals';
	import Modal from '$lib/components/modalImg.svelte';

	let url;
	function testImg() {
		openModal(Modal, { src: url });
	}

	const getPhotos = (type, cab) => {
		let quant;
		const arr = [];
		if (type === 'ext') {
			quant = 6;
			for (let i = 1; i <= quant; i++) {
				arr.push({
					src: `https://ik.imagekit.io/ucihuen/${type}/ucihuen_${type}_${i}.webp`,
					alt: `${type}erior`,
					id: i - 1
				});
			}
			return arr;
		}

		quant = cab === 'cab_2' ? 6 : 8;
		for (let i = 1; i <= quant; i++) {
			arr.push({
				src: `https://ik.imagekit.io/ucihuen/${type}/${cab}/ucihuen_${cab}_${type}_${i}.webp`,
				alt: `${type}erior`,
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
	<title>Galería - Cabañas Ucihuen</title>
</svelte:head>

<section>
	<article id="cab-1">
		<h3 in:fade={{ duration: 400, delay: 300 }}>Cabaña 1</h3>
		<div class="container" in:fade={{ duration: 800, delay: 800 }}>
			<Slider items={cab_1} type="slide" delay={2350} sendClick={() => testImg()} bind:url />
		</div>
	</article>
	<article id="cab-2">
		<h3 in:fade={{ duration: 400, delay: 500 }}>Cabaña 2</h3>
		<div class="container last" in:fade={{ duration: 800, delay: 1000 }}>
			<Slider items={cab_2} type="slide" delay={2400} sendClick={() => testImg()} bind:url />
		</div>
	</article>
	<article>
		<h3 in:fade={{ duration: 400, delay: 500 }}>Exteriores</h3>
		<div class="container last" in:fade={{ duration: 800, delay: 1000 }}>
			<Slider items={exterior} type="slide" delay={2400} sendClick={() => testImg()} bind:url />
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
	}
</style>
