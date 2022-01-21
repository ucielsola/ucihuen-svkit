<script>
	import IconGrid from '$lib/components/iconGrid.svelte';
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



<!-- <section>
	<Map />
</section> -->
<style>
	section {
		padding-inline: var(--padding-inline);
	}

	h2 {
		font-size: 1.1rem;
		text-align: center;
		font-feature-settings: 'pnum' on, 'lnum' on;
		color: var(--base-color);
		text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
	}
	p {
		margin-block: 0.5rem;
	}

	a {
		color: var(--primary-color);
		text-decoration: none;
	}
</style>
