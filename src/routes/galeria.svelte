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
	<meta property="og:title" content="Galería - Cabañas Ucihuen" />
</svelte:head>

<section>
	<article id="cab-1">
		<h3>Cabaña 7 Pasajeros</h3>
		<h4>2 HABITACIONES | LIVING-COMEDOR | COCINA | BAÑO</h4>
		<div class="container" in:fade={{ duration: 300, delay: 100 }}>
			<Slider items={cab_1} type="slide" delay={2300} sendClick={() => testImg()} bind:url />
		</div>
	</article>
	<article id="cab-2">
		<h3>Cabaña 4 Pasajeros</h3>
		<h4>1 HABITACIÓN | COCINA-COMEDOR | LIVING CON FUTONES | BAÑO</h4>
		<div class="container" in:fade={{ duration: 400, delay: 150 }}>
			<Slider items={cab_2} type="slide" delay={2400} sendClick={() => testImg()} bind:url />
		</div>
	</article>
	<article>
		<h3>Exteriores</h3>
		<h4>PATIO EN EL PREDIO | ESTACIONAMIENTO | PARRILLA</h4>
		<div class="container last" in:fade={{ duration: 500, delay: 200 }}>
			<Slider items={exterior} type="slide" delay={2500} sendClick={() => testImg()} bind:url />
		</div>
	</article>

	<div class="cta-container">
		<a href="/contacto" title="Contacto">ENVIAR CONSULTA</a>
	</div>
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
		font-size: 0.8rem;
		letter-spacing: -0.8px;
		color: var(--primary-color);
	}

	.cta-container {
		display: none;
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
		.cta-container {
			margin-top: 3rem;
			display: grid;
			place-content: center;
		}
		.cta-container a {
			cursor: pointer;
			text-align: center;
			background-color: var(--primary-color);
			border: none;
			box-shadow: var(--shadow);
			color: white;
			padding-block: 1rem;
			padding-inline: 1.5rem;
			border-radius: 10px;
			transition: background-color 0.35s var(--easing);
		}
		.cta-container a:active {
			background-color: var(--primary-color-dim);
			border: none;
			box-shadow: var(--shadow);
			color: white;
			padding-block: 1rem;
			padding-inline: 1.5rem;
			border-radius: 10px;
			transform: scale(0.99);
			transition: background-color 0.35s var(--easing);
		}
	}
</style>
