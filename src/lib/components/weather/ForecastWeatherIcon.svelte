<script>
	import {
		Sun,
		CloudSun,
		CloudMoon,
		CloudFog,
		CloudRain,
		CloudLightning,
		Snowflake
	} from 'lucide-svelte';

	let { weatherCode, size = 32 } = $props();
</script>

<div class="icon-wrapper">
	{#if weatherCode === 0}
		<Sun {size} aria-hidden="true" />
	{:else if weatherCode <= 2}
		<CloudSun {size} aria-hidden="true" />
	{:else if weatherCode === 3}
		<CloudMoon {size} aria-hidden="true" />
	{:else if weatherCode <= 48}
		<CloudFog {size} aria-hidden="true" />
	{:else if weatherCode <= 55 || (weatherCode >= 61 && weatherCode <= 65)}
		<CloudRain {size} aria-hidden="true" />
	{:else if weatherCode <= 67 || weatherCode >= 80}
		<CloudLightning {size} aria-hidden="true" />
	{:else if weatherCode <= 75}
		<Snowflake {size} aria-hidden="true" />
	{:else}
		<Sun {size} aria-hidden="true" />
	{/if}
</div>

<style>
	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		background: rgba(165, 180, 252, 0.05);
		border-radius: 12px;
		transition: transform 0.3s ease;
	}

	.icon-wrapper:hover {
		transform: scale(1.1);
		background: rgba(165, 180, 252, 0.1);
	}

	:global(svg) {
		color: #a5b4fc;
		transition: transform 0.4s ease;
	}

	.icon-wrapper:hover :global(svg) {
		transform: rotate(-12deg) scale(1.05);
	}
</style>
