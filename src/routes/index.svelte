<script>
	import IconGrid from '$lib/components/iconGrid.svelte';
	import Cards from '$lib/components/cards.svelte';
	import Map from '$lib/components/map.svelte';
</script>

<section>
	<p>
		Ubicadas a sólo dos cuadras del centro de la <a
			href="http://www.lagopuelo.gob.ar/turismo/"
			target="_blank"
			title="Sitio Oficial - Lago Puelo">Villa Turística Lago Puelo</a
		>, tienen la ventaja de combinar tranquilidad, comodidad y facilidad de acceso a los negocios y
		servicios que se ofrecen a nuestros visitantes.
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

<section>
	<h2>¿Qué comodidades tienen nuestras cabañas?</h2>
	<IconGrid />
</section>

<section>
	<h2>¿Cómo son las cabañas?</h2>
	<Cards />
</section>

<section>
	<h2>¿Dónde nos ubicamos?</h2>
	<h3><img src="icons/pin.webp" alt="Location Icon" class="pin-icon" /> Lago Puelo, Chubut</h3>
	<Map />
</section>

<style>
	section {
		padding-inline: var(--padding-inline);
		padding-block: 1.5rem;
	}

	h2 {
		padding-block-end: 0.5rem;
		font-size: 1.4rem;
		text-align: center;
		font-feature-settings: 'pnum' on, 'lnum' on;
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
</style>
