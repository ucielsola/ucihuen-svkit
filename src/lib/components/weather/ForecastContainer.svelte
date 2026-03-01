<script>
	import ForecastCard from './ForecastCard.svelte';

	let { forecast } = $props();
</script>

<div class="forecast-container">
	{#each forecast as day}
		<ForecastCard {day} />
	{/each}
</div>

<style>
	.forecast-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 12px;
		margin-top: var(--weather-spacing-md);
		max-width: 340px;
		margin-inline: auto;
	}

	@media screen and (min-width: 1024px) {
		.forecast-container {
			max-width: 800px;
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
