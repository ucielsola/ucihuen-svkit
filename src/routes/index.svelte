<script>
	import IconGrid from '$lib/components/iconGrid.svelte';
	import Cards from '$lib/components/cards.svelte';
	import Map from '$lib/components/map.svelte';
	import SliderReviews from '$lib/components/sliderReviews.svelte';
</script>

<svelte:head>
	<title>Cabañas Ucihuen - Lago Puelo</title>
	<meta property="og:title" content="Cabañas Ucihuen - Lago Puelo" />
</svelte:head>
<div class="desktop-grid limited-width">
	<section class="description">
		<p>
			Ubicadas a sólo dos cuadras del centro de la <a
				href="http://www.lagopuelo.gob.ar/turismo/"
				target="_blank"
				title="Sitio Oficial - Lago Puelo">Villa Turística Lago Puelo</a
			>, tienen la ventaja de combinar tranquilidad, comodidad y facilidad de acceso a los negocios
			y servicios que se ofrecen a nuestros visitantes.
		</p>
		<p>
			A menos de 3 kilómetros, se encuentra el <a
				href="https://www.instagram.com/parquenacionallagopuelo/?hl=es"
				target="_blank"
				title="Instagram - Parque Nacional Lago Puelo">Parque Nacional Lago Puelo</a
			> con características únicas en su fauna y flora, y una amplia gama de atractivos turísticos, como
			paseos en lancha y en kayak, senderos interpretativos, playas, bosques y cascadas.
		</p>
	</section>

	<section class="icon-grid">
		<h2 class="title">¿Qué comodidades tienen nuestras cabañas?</h2>
		<IconGrid />
	</section>

	<section class="vertical-banner">
		<img src="/images/vertical_banner.webp" alt="Cabañas Ucihuen" />
		<button>Consultar Reserva</button>
	</section>
</div>

<section class="limited-width">
	<h2 class="title">¿Cómo son las cabañas?</h2>
	<Cards />
</section>

<section class="limited-width">
	<h2 class="title">¿Dónde nos ubicamos?</h2>
	<h3><img src="icons/pin.webp" alt="Location Icon" class="pin-icon" /> Lago Puelo, Chubut</h3>
	<Map />
</section>

<section class="no-padding full-width">
	<h2 class="title">Reviews</h2>
	<SliderReviews />
</section>

<style>
	section {
		padding-inline: var(--padding-inline);
		padding-block: 1.5rem;
	}

	section.no-padding {
		padding: 0;
	}

	h2 {
		padding-block-end: 0.5rem;
		font-size: 1.4rem;
		text-align: center;
		color: var(--base-color);
		text-shadow: var(--text-shadow);
	}
	p {
		margin-block: 0.5rem;
	}

	a {
		color: var(--primary-color);
		text-decoration: none;
	}
	h3 {
		display: flex;
	}
	.pin-icon {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.5rem;
	}

	.vertical-banner {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		h2 {
			text-align: start !important;
			padding-inline-start: 2rem;
		}

		h3 {
			padding-inline-start: 1.2rem;
		}
		.desktop-grid {
			display: grid;
			grid-template-columns: 1.5fr 0.5fr;
			grid-template-rows: 0.5fr 1.5fr;
			gap: 0px 0px;
			grid-template-areas:
				'description vertical-banner'
				'icon-grid vertical-banner';
		}
		.vertical-banner {
			display: block;
			grid-area: vertical-banner;
		}
		.icon-grid {
			grid-area: icon-grid;
		}
		.description {
			grid-area: description;
		}
	}
</style>
