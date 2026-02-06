<script>
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<header>
	<div class="background">
		<div class="blur"></div>
	</div>
	<div class="row">
		<div class="logo">
			<a href={localizeHref('/')} title={m.header_home_title()}><h1>Cabañas <span>Ucihuen</span></h1></a>
		</div>
		<p class="copy">
			{m.header_tagline()}
		</p>
	</div>
</header>

<style>
	a {
		text-decoration: none;
	}
	header {
		position: relative;
		display: grid;
		place-content: end;
		min-height: 35vh;
		padding-block-end: 0.5rem;
	}
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: var(--cover-image);
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

	@media screen and (min-width: 1024px) {
		header {
			min-height: 60vh;
			box-shadow: 0px 1rem 30px 6px rgb(0 0 0 / 40%);
		}

		.background {
			position: absolute;
			background-image: var(--cover-image);
			background-color: #fff3;
			width: 100%;
			height: 100%;
			transform: scale(1);
			background-size: cover;
			background-position: center;
			border-bottom-left-radius: 0rem;
			border-bottom-right-radius: 0rem;
		}

		.blur {
			display: none;
		}
		.row {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			padding-inline: var(--padding-inline);
		}

		.logo h1 {
			font-size: 4.2rem;
			line-height: 0.5;
			padding-right: 2rem;
		}
		.logo h1 span {
			width: min-content;
			font-size: 7rem;
			line-height: 1.1;
		}
		.logo h1 span::after {
			top: -4.5rem;
			right: 1rem;
		}

		.copy {
			font-size: 1.5rem;
			font-weight: 600;
			letter-spacing: -0.9px;
			width: 50vw;
			text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
		}
	}
</style>
