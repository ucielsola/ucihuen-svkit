<script>
	let { isNight = false, hovered = false, size = 48 } = $props();
</script>

<div class="icon-container" class:icon-hover={hovered}>
	{#if isNight}
		<svg
			{size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="weather-icon"
			aria-hidden="true"
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
		</svg>
	{:else}
		<svg
			{size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="weather-icon"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</svg>
	{/if}
</div>

<style>
	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%);
		border: 1px solid rgba(165, 180, 252, 0.1);
		transition: background 0.3s ease;
		flex-shrink: 0;
	}

	.icon-hover {
		background: linear-gradient(135deg, rgba(165, 180, 252, 0.14) 0%, rgba(99, 102, 241, 0.08) 100%);
	}

	.weather-icon {
		color: #a5b4fc;
		transition: transform 0.4s ease;
	}

	.icon-hover .weather-icon {
		transform: rotate(-12deg) scale(1.05);
	}
</style>
