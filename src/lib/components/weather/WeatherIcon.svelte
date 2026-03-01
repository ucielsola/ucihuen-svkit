<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';

	let { isNight = false, hovered = false, size = 48 } = $props();
</script>

<div class="icon-container" class:icon-hover={hovered}>
	{#if isNight}
		<span class="weather-icon">
			<Moon {size} aria-hidden="true" />
		</span>
	{:else}
		<span class="weather-icon">
			<Sun {size} aria-hidden="true" />
		</span>
	{/if}
</div>

<style>
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--weather-icon-size-lg);
		height: var(--weather-icon-size-lg);
		border-radius: var(--weather-radius-md);
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%);
		border: 1px solid rgba(165, 180, 252, 0.1);
		transition: background var(--easing);
		flex-shrink: 0;
	}

	.icon-hover {
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.14) 0%, rgba(99, 102, 241, 0.08) 100%);
	}

	.weather-icon {
		color: var(--weather-accent);
		transition: transform var(--easing);
	}

	.icon-hover .weather-icon {
		transform: rotate(-12deg) scale(1.05);
	}
</style>
