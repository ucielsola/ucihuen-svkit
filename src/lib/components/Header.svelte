<script>
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let videoReady = $state(false);

	function onPlayerReady(player) {
		player.setPlaybackRate(1.25);
		videoReady = true;
	}

	$effect(() => {
		window.onYTPlayerReady = onPlayerReady;

		if (!window.YT) {
			window.onYouTubeIframeAPIReady = () => {
				createPlayer();
			};
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			document.head.appendChild(tag);
		} else {
			createPlayer();
		}

		function createPlayer() {
			new window.YT.Player('yt-bg', {
				events: {
					onReady: (e) => onPlayerReady(e.target)
				}
			});
		}

		const fallback = setTimeout(() => {
			videoReady = true;
		}, 4000);

		return () => {
			clearTimeout(fallback);
			delete window.onYTPlayerReady;
			delete window.onYouTubeIframeAPIReady;
		};
	});
</script>

<header>
	<img
		class="cover"
		class:hidden={videoReady}
		src="/images/cover.webp"
		alt="Cabañas Ucihuen - Lago Puelo"
	/>
	<iframe
		id="yt-bg"
		class:visible={videoReady}
		src="https://www.youtube.com/embed/ZwqyXout2Xo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=ZwqyXout2Xo&playsinline=1&disablekb=1&modestbranding=1&enablejsapi=1"
		title="Video de fondo - Cabañas Ucihuen"
		frameborder="0"
		allow="autoplay; encrypted-media"
		loading="eager"
	></iframe>
	<div class="row">
		<div class="logo">
			<a href={localizeHref('/')} title={m.header_home_title()}
				><h1>Cabañas <span>Ucihuen</span></h1></a
			>
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
		overflow: hidden;
	}

	.cover,
	iframe {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border: none;
		pointer-events: none;
		object-fit: cover;
	}

	.cover {
		position: relative;
		z-index: 1; /* local stacking: cover image above iframe */
		transition: opacity 1s ease;
	}
	.cover.hidden {
		opacity: 0;
	}

	iframe {
		position: absolute;
		inset: 0;
		height: 100%;
		opacity: 0;
		transition: opacity 1s ease;
	}
	iframe.visible {
		opacity: 1;
	}

	.row {
		position: absolute;
		inset: 0;
		z-index: 2; /* local stacking: content above cover */
		display: grid;
		place-content: end;
		padding-inline: var(--padding-inline);
		padding-block-end: 0.5rem;
		pointer-events: none;
	}

	.row a {
		pointer-events: auto;
	}

	.logo h1 {
		font-size: var(--text-4xl);
		line-height: var(--leading-none);
		font-family: var(--font-logo);
		color: var(--secondary-color);
		filter: var(--drop-shadow);
	}

	.logo h1 span {
		position: relative;
		display: block;
		width: min-content;
		font-size: var(--text-5xl);
		line-height: var(--leading-none);
	}
	.logo h1 span::after {
		content: 'ᨊ';
		position: absolute;
		top: -3rem;
		right: 1rem;
	}

	.copy {
		color: var(--text-color-light);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		letter-spacing: var(--tracking-tight);
		text-transform: uppercase;
		text-shadow: var(--text-shadow);
	}

	@media screen and (min-width: 1024px) {
		header {
			box-shadow: var(--shadow-lg);
		}

		.row {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.logo h1 {
			font-size: 3.5rem;
			line-height: var(--leading-none);
			padding-inline-end: 2rem;
		}

		.logo h1 span {
			width: min-content;
			font-size: var(--text-6xl);
			line-height: 1.1;
		}
		.logo h1 span::after {
			top: -4.5rem;
			right: 1rem;
		}

		.copy {
			font-size: var(--text-2xl);
			font-weight: var(--font-semibold);
			letter-spacing: var(--tracking-tight);
			width: 50vw;
			text-shadow: var(--text-shadow);
		}
	}
</style>
