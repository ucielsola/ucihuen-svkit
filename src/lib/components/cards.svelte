<div class="container">
	<a class="card" href="/galeria#cab-1">
		<div class="title">
			<img src="images/cab-1.webp" alt="Cabañas Ucihuen" />
			<div class="gradient" />
			<h3>Cabaña para <br />7 personas</h3>
		</div>
		<div class="description">
			<h4>Dos plantas</h4>
			<h5>2 Habitaciones</h5>
			<h5>Living-Comedor</h5>
			<h5>Cocina</h5>
			<h5>Baño</h5>
		</div>
	</a>
	<a class="card" href="/galeria#cab-2">
		<div class="title">
			<img src="images/cab-2.webp" alt="Cabañas Ucihuen" />
			<div class="gradient" />
			<h3>Cabaña para <br />4 personas</h3>
		</div>
		<div class="description">
			<h4>Una planta</h4>
			<h5>2 Habitaciones</h5>
			<h5>Cocina-Comedor</h5>
			<h5>Living con futones</h5>
			<h5>Baño</h5>
		</div>
	</a>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		place-content: center;
		width: 100%;
	}
	.card {
        display: block;
		border-radius: 15px;
		box-shadow: var(--shadow);
		background: linear-gradient(
			180deg,
			rgba(251, 192, 93, 0.25) 0%,
			rgba(251, 192, 93, 0.25) 59.69%,
			rgba(226, 80, 76, 0.25) 100%
		);
		text-decoration: none;
	}
	.gradient {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		border-radius: 15px;
		background: linear-gradient(0deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%);
	}
	.title {
		position: relative;
	}

	img {
		border-radius: 15px;
		box-shadow: var(--shadow);
	}

	h3 {
		position: absolute;
		bottom: 0;
		width: 100%;
		color: aliceblue;
		text-align: center;
		font-size: 1.2rem;
		text-transform: uppercase;
		text-shadow: var(--text-shadow);
	}
	.description {
		text-align: center;
		padding-block: 0.7rem;
		color: #000;
	}
	h4 {
		font-size: 1.1rem;
		text-shadow: var(--text-shadow);
	}
	h5 {
		font-weight: 300;
	}
</style>
