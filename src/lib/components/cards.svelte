<div class="container">
	<a class="card" href="/galeria#cab-1">
		<div class="title-container">
			<img loading="lazy" src="images/cab-1.webp" alt="Cabañas Ucihuen" />
			<div class="gradient"></div>
			<h3 class="mobile-title">Cabaña para <br />7 personas</h3>
		</div>
		<div class="description">
			<div class="title-wrapper">
				<h3 class="desktop-title">Cabaña para 7 personas</h3>
				<h4>Dos plantas</h4>
			</div>
			<h5>2 Habitaciones</h5>
			<h5>Living-Comedor</h5>
			<h5>Cocina</h5>
			<h5>Baño</h5>
		</div>
	</a>
	<a class="card" href="/galeria#cab-2">
		<div class="title-container">
			<img loading="lazy" src="images/cab-2.webp" alt="Cabañas Ucihuen" />
			<div class="gradient"></div>
			<h3 class="mobile-title">Cabaña para <br />4 personas</h3>
		</div>
		<div class="description">
			<div class="title-wrapper">
				<h3 class="desktop-title">Cabaña para 4 personas</h3>
				<h4>Una planta</h4>
			</div>
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
	.title-container {
		position: relative;
	}

	img {
		border-radius: 15px;
		box-shadow: var(--shadow);
	}

	.mobile-title {
		position: absolute;
		bottom: 0;
		width: 100%;
		color: aliceblue;
		text-align: center;
		font-size: 1.2rem;
		text-transform: uppercase;
		text-shadow: var(--text-shadow);
	}

	.desktop-title {
		display: none;
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
	@media screen and (min-width: 1024px) {
		.card {
			display: flex;
			transition: all 0.2s var(--easing);
		}

		.card:hover {
			transform: scale(1.0085);
			transition: transform 0.2s var(--easing);
		}

		img {
			max-width: 15vw;
		}

		.description {
			width: 100%;
		}

		.mobile-title {
			display: none;
		}
		.desktop-title {
			position: relative;
			display: inline;
		}

		.desktop-title::after {
			position: absolute;
			width: 100%;
			content: '';
			height: 1px;
			background-color: #000;
			bottom: -0.7rem;
			left: 0;
		}

		.title-wrapper {
			position: relative;
			margin-bottom: 2rem;
		}

		h4 {
			position: absolute;
			display: block;
			z-index: 200;
			margin-top: -0.3rem;
			background-color: #fdefd6;
			padding-inline: 1rem;
			left: 33%;
			text-shadow: var(--text-shadow);
			font-weight: 600;
		}

		h5 {
			padding-block: 0.2rem;
			font-weight: 400;
			font-size: 1.2rem;
		}
	}
</style>
