<script>
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<div class="container">
	<a class="card" href={localizeHref('/galeria#cab-1')}>
		<div class="title-container">
			<img loading="lazy" src="images/cab-1.webp" alt={m.cabin_7_alt()} />
			<div class="gradient"></div>
			<h3 class="mobile-title">{m.cabin_mobile_title_prefix()} <br />{m.cabin_7_mobile_guests()}</h3>
		</div>
		<div class="description">
			<div class="title-wrapper">
				<h3 class="desktop-title">{m.cabin_7_title()}</h3>
				<h4>{m.cabin_7_floors()}</h4>
			</div>
			<h5>{m.room_bedrooms_2()}</h5>
			<h5>{m.room_living_dining()}</h5>
			<h5>{m.room_kitchen()}</h5>
			<h5>{m.room_bathroom()}</h5>
		</div>
	</a>
	<a class="card" href={localizeHref('/galeria#cab-2')}>
		<div class="title-container">
			<img loading="lazy" src="images/cab-2.webp" alt={m.cabin_4_alt()} />
			<div class="gradient"></div>
			<h3 class="mobile-title">{m.cabin_mobile_title_prefix()} <br />{m.cabin_4_mobile_guests()}</h3>
		</div>
		<div class="description">
			<div class="title-wrapper">
				<h3 class="desktop-title">{m.cabin_4_title()}</h3>
				<h4>{m.cabin_4_floors()}</h4>
			</div>
			<h5>{m.room_bedrooms_2()}</h5>
			<h5>{m.room_kitchen_dining()}</h5>
			<h5>{m.room_living_futons()}</h5>
			<h5>{m.room_bathroom()}</h5>
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
		border-radius: var(--radius);
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
		border-radius: var(--radius);
		background: linear-gradient(0deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%);
	}
	.title-container {
		position: relative;
	}

	img {
		border-radius: var(--radius);
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
		color: var(--text-color);
	}
	h4 {
		font-size: 1.1rem;
		text-shadow: var(--text-shadow);
	}
	@media screen and (min-width: 1024px) {
		.card {
			display: flex;
			transition: transform 0.2s var(--easing);
		}

		.card:hover {
			transform: scale(1.0085);
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
			background-color: var(--text-color);
			bottom: -0.7rem;
			left: 0;
		}

		.title-wrapper {
			position: relative;
			margin-block-end: 2rem;
		}

		h4 {
			position: absolute;
			display: block;
			z-index: var(--z-card-badge);
			margin-block-start: -0.3rem;
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
