<script>
	import SEO from '$lib/components/SEO.svelte';
	import ExcursionCard from '$lib/components/ExcursionCard.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { excursions } from '$lib/data/excursions.js';
</script>

<SEO title={m.excursions_title()} description={m.excursions_meta_description()} />

<section id="paseos">
	<div class="limited-width">
		<h2>{m.excursions_heading()}</h2>
		<p class="intro">{m.excursions_intro()}</p>

		<div class="grid">
			{#each excursions as excursion (excursion.id)}
				<ExcursionCard {excursion} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-block: var(--space-lg);
	}

	h2 {
		padding-block-end: 0.5rem;
		text-align: center;
		color: var(--base-color);
		margin-block-end: var(--space-sm);
	}

	.intro {
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--base-color);
		margin-block-end: var(--space-lg);
		max-width: 70ch;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-lg);
		padding-block-end: var(--space-xl);
	}

	@media screen and (min-width: 1024px) {
		section {
			padding-block: var(--space-xl);
		}

		h2 {
			text-align: start;
			padding-inline-start: 2rem;
		}

		.intro {
			font-size: var(--text-base);
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-lg);
		}
	}
</style>
