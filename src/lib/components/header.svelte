<script>
	import Nav from '$lib/components/nav.svelte';
</script>

<header>
	<div class="background">
		<div class="blur" />
	</div>
	<div class="row">
		<div class="logo">
			<h1>Cabañas <span>Ucihuen</span></h1>
		</div>
		<p class="copy">
			Enmarcadas en un verde paisaje cordillerano, dentro de un valle rodeado de montañas boscosas,
			rios, arroyos y cascadas.
		</p>
	</div>
	<div class="nav-container">
		<Nav />
	</div>
</header>

<style>
	header {
		position: relative;
		display: grid;
		place-content: end;
		min-height: 35vh;
		margin-block-end: 4rem;
		padding-block-end: 0.5rem;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: var(--bg-image);
		background-position: center;
		background-size: cover;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	.background .blur {
		position: absolute;
		background-color: #fff3;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
	}

	.row {
		padding-inline: var(--padding-inline);
	}

	.logo,
	.copy {
		position: relative;
	}
	.logo h1 {
		font-size: 2.5rem;
		line-height: 0.5;
		font-family: var(--logo-font);
		color: var(--secondary-color);
		filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5));
	}
	.logo h1 span {
		position: relative;
		display: block;
		width: min-content;
		font-size: 4rem;
		line-height: 1;
	}
	.logo h1 span::after {
		content: 'ᨊ';
		position: absolute;
		top: -3rem;
		right: 1rem;
	}

	.copy {
		color: #fff;
		font-family: var(--text-font);
		font-size: 0.9rem;
		letter-spacing: -0.9px;
		text-transform: uppercase;
		text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
	}

	.nav-container {
		position: absolute;
		bottom: -4rem;
		display: grid;
		place-content: center;
		width: 100%;
		margin-inline: auto;
		font-size: 2rem;
	}

	@media screen and (min-widht: 1024px) {
		header {
			box-shadow: 0px 1rem 30px 6px rgb(0 0 0 / 40%);
		}

		.background .blur {
			position: absolute;
			background-image: url('images/cover.webp');
			filter: blur(2px);
			width: 100%;
			height: 100%;
			transform: scale(1.01);
			background-size: cover;
			background-position: center;
		}
	}
</style>
