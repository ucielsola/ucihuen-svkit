<script>
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<header>
	<iframe
		src="https://www.youtube-nocookie.com/embed/ZwqyXout2Xo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=ZwqyXout2Xo&playsinline=1&disablekb=1&modestbranding=1"
		title="Video de fondo - Cabañas Ucihuen"
		frameborder="0"
		allow="autoplay; encrypted-media"
		loading="eager"
	></iframe>
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
		background: url('https://i.ytimg.com/vi/ZwqyXout2Xo/maxresdefault.jpg') center / cover
			no-repeat;
	}

	iframe {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border: none;
		pointer-events: none;
	}

	.row {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: end;
		padding-inline: var(--padding-inline);
		padding-block-end: 0.5rem;
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
			box-shadow: 0px 1rem 30px 6px rgb(0 0 0 / 40%);
		}

		.row {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.logo h1 {
			font-size: 4.2rem;
			line-height: 0.5;
			padding-inline-end: 2rem;
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
