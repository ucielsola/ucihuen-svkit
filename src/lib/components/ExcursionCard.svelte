<script>
	import * as m from '$lib/paraglide/messages.js';
	import MapPinned from 'lucide-svelte/icons/map-pinned';
	import Globe from 'lucide-svelte/icons/globe';

	let { excursion } = $props();

	let expanded = $state(false);
	const TRUNCATE_LENGTH = 120;

	let desc = $derived(excursion.description());
	let needsTruncation = $derived(desc.length > TRUNCATE_LENGTH);
	let displayDesc = $derived(
		needsTruncation && !expanded ? desc.slice(0, TRUNCATE_LENGTH) + '…' : desc
	);
</script>

<article class="card">
	<div class="card-image">
		{#if excursion.image}
			<img src={excursion.image} alt={excursion.title()} loading="lazy" />
		{/if}
	</div>

	<div class="card-content">
		<h3>{excursion.title()}</h3>

		{#if excursion.tags.length > 0}
			<div class="tags">
				{#each excursion.tags as tag}
					<span class="tag">{tag()}</span>
				{/each}
			</div>
		{/if}

		<p>{displayDesc}</p>

		{#if needsTruncation}
			<button class="toggle-btn" onclick={() => (expanded = !expanded)}>
				{expanded ? m.excursion_read_less() : m.excursion_read_more()}
			</button>
		{/if}

		<div class="links">
			<a href={excursion.mapsUrl} target="_blank" rel="noopener noreferrer">
				<MapPinned size={16} />
				{m.excursion_directions()}
			</a>
			{#if excursion.websiteUrl}
				<a href={excursion.websiteUrl} target="_blank" rel="noopener noreferrer">
					<Globe size={16} />
					{m.excursion_website()}
				</a>
			{/if}
		</div>
	</div>
</article>

<style>
	.card {
		background: var(--surface-color);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		overflow: hidden;
	}

	.card-image {
		aspect-ratio: 16 / 9;
		background: var(--gradient);
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-content {
		padding: var(--space-md);
	}

	h3 {
		font-family: var(--sections-font);
		font-size: 1.25rem;
		margin: 0 0 var(--space-sm);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-block-end: var(--space-sm);
	}

	.tag {
		display: inline-block;
		font-size: 0.7rem;
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
		background: var(--highlight-color);
		color: var(--surface-color);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	p {
		font-size: 0.85rem;
		line-height: 1.6;
		margin: 0 0 var(--space-sm);
		color: var(--base-color);
	}

	.toggle-btn {
		background: none;
		border: none;
		color: var(--primary-color);
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0;
		margin-block-end: var(--space-sm);
	}

	.links {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.links a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--primary-color);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border: 1.5px solid var(--primary-color);
		border-radius: var(--radius);
		transition: background 0.2s, color 0.2s;
	}

	.links a:hover {
		background: var(--primary-color);
		color: var(--surface-color);
	}

	@media screen and (min-width: 1024px) {
		h3 {
			font-size: 1.1rem;
		}

		p {
			font-size: 0.8rem;
		}
	}
</style>
