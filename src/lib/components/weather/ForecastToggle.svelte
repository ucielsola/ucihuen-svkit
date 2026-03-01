<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { ChevronDown } from 'lucide-svelte';

	let { expanded = false, theme, onToggle } = $props();
	let element = $state(null);

	$effect(() => {
		if (element) {
			element.setAttribute('data-theme', theme);
		}
	});
</script>

<button
	class="forecast-toggle"
	onclick={onToggle}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			onToggle();
		}
	}}
	aria-expanded={expanded}
	bind:this={element}
>
	<span class="toggle-text">{m.weather_view_forecast()}</span>
	<div class="chevron">
		<ChevronDown size={20} />
	</div>
</button>

<style>
	.forecast-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--weather-spacing-sm);
		padding: 12px 16px;
		margin-top: var(--weather-spacing-md);
		background-color: var(--weather-toggle-bg);
		border: 1px solid var(--weather-border);
		border-radius: var(--weather-radius-sm);
		color: var(--weather-text-light);
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: all var(--easing);
		max-width: 340px;
		margin-inline: auto;
	}

	.forecast-toggle:hover {
		background-color: var(--weather-toggle-bg-hover);
		color: var(--weather-text-primary);
	}

	.chevron :global(svg) {
		color: var(--weather-text-light);
	}

	.forecast-toggle:hover .chevron :global(svg) {
		color: var(--weather-text-primary);
	}
</style>
