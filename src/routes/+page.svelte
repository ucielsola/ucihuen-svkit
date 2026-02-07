<script>
	import { browser } from '$app/environment';
	import IconGrid from '$lib/components/IconGrid.svelte';
	import Cards from '$lib/components/Cards.svelte';
	import Map from '$lib/components/Map.svelte';
	import Weather from '$lib/components/Weather.svelte';
	import SliderReviews from '$lib/components/SliderReviews.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import * as m from '$lib/paraglide/messages.js';
	let { data } = $props();

	function igProfile(username) {
		if (browser && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			return `instagram://user?username=${username}`;
		}
		return `https://www.instagram.com/${username}/`;
	}
</script>

<SEO title={m.home_title()} description={m.home_meta_description()} />

<div class="desktop-grid limited-width">
	<section id="inicio" class="description marginated">
		<p>
			{m.home_desc_1_before()}
			<a href={igProfile('lagopueloturismo')} target="_blank" title={m.home_link_lago_puelo()}
				>{m.home_desc_1_link()}</a
			>{m.home_desc_1_after()}
		</p>
		<p>
			{m.home_desc_2_before()}
			<a
				href={igProfile('parquenacionallagopuelo')}
				target="_blank"
				title={m.home_link_parque_nacional()}>{m.home_desc_2_link()}</a
			>
			{m.home_desc_2_after()}
		</p>
	</section>

	<section class="icon-grid">
		<h2 class="title">{m.home_amenities_title()}</h2>
		<p class="amenities-desc">{m.home_amenities_desc()}</p>
		<IconGrid />
	</section>

	<section class="vertical-banner">
		<div class="banner-weather">
			<h2 class="title">{m.weather_title()}</h2>
			<Weather />
		</div>
		<img src="/images/vertical_banner.webp" alt="Cabañas Ucihuen" />
	</section>
</div>

<section class="limited-width description">
	<h2 class="title">{m.home_cabins_title()}</h2>
	<Cards />
</section>

<section class="limited-width">
	<h2 class="title">{m.home_location_title()}</h2>
	<h3>
		<img src="/icons/pin.webp" alt="Location Icon" class="pin-icon" />
		{m.home_location_subtitle()}
	</h3>
	<Map />
</section>

<section class="limited-width mobile-weather">
	<h2 class="title">{m.weather_title()}</h2>
	<Weather />
</section>

<section class="no-padding full-width">
	<div class="limited-width reviews">
		<h2 class="title">{m.home_reviews_title()}</h2>
	</div>

	{#if browser}
		<SliderReviews reviews={data.reviews} />
	{/if}
</section>

<style>
	section {
		padding-inline: var(--padding-inline);
		padding-block: 1.5rem;
	}

	section.no-padding {
		padding: 0;
	}

	h2 {
		padding-block-end: 0.5rem;
		font-size: 1.4rem;
		text-align: center;
		color: var(--base-color);
		text-shadow: var(--text-shadow);
	}
	p {
		margin-block: 0.5rem;
	}
	.amenities-desc {
		padding-inline: var(--padding-inline);
		color: var(--base-color);
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
		margin-inline-end: 0.5rem;
	}

	.vertical-banner {
		display: none;
	}

	@media screen and (min-width: 1024px) {
		.mobile-weather {
			display: none;
		}

		.limited-width.reviews {
			padding-block-start: 3rem;
		}
		h2 {
			text-align: start !important;
			padding-inline-start: 2rem;
		}

		h3 {
			padding-inline-start: 1.2rem;
		}
		.desktop-grid {
			display: grid;
			grid-template-columns: 1.4fr 0.6fr;
			grid-template-rows: 0.5fr 1.5fr;
			gap: 0px 24px;
			grid-template-areas:
				'description vertical-banner'
				'icon-grid vertical-banner';
		}

		.vertical-banner {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			grid-area: vertical-banner;
			width: 100%;
		}

		.banner-weather {
			padding-inline: 0.5rem;
		}

		.vertical-banner img {
			border-radius: 10px;
			box-shadow: var(--shadow);
		}

		.icon-grid {
			grid-area: icon-grid;
		}
		.description {
			display: block;
			grid-area: description;
			box-shadow: var(--full-shadow);
			padding: 2rem;
			border-radius: 10px;
			margin-block-start: 2rem;
		}
		.description.marginated {
			margin-inline: var(--padding-inline);
		}
	}
</style>
