<script>
	import Nav from '$lib/components/nav.svelte';
</script>

<header>
	<div class="background">
		<div class="blur"></div>
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
<main>
	<slot />
</main>

<style>
	header {
		position: relative;
		display: grid;
		place-content: center;
		min-height: 75vh;
		margin-block-end: 4rem;
		overflow: hidden;
		box-shadow: 0px 3rem 20px 6px rgb(0 0 0 / 40%);
	}

	.background {
		position: absolute;
		background-image: url('./src/lib/imgs/cover.webp');
		width: 100%;
		height: 100%;
	}

	.background .blur {
		position: absolute;
		background-image: url('./src/lib/imgs/cover.webp');
		filter: blur(2px);
		width: 100%;
		height: 100%;
		transform: scale(1.1);
	}

	.row {
		display: flex;
	}
	.logo,
	.copy,
	.nav-container {
		position: relative;
	}
	.logo h1 {
		font-size: 3rem;
		line-height: 0.5;
		font-family: var(--logo-font);
	}
	.logo h1 span {
		position: relative;
		display: block;
		width: min-content;
		font-size: 5rem;
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
		font-size: 1.5rem;
		text-transform: uppercase;
		text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
	}
</style>
