<script>
	let { expanded = false, onToggle } = $props();
</script>

<button
	class="forecast-toggle"
	class:expanded={expanded}
	onclick={onToggle}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			onToggle();
		}
	}}
	aria-expanded={expanded}
>
	<span class="toggle-text">{expanded ? 'Ocultar pronóstico' : 'Ver pronóstico 7 días'}</span>
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="chevron"
	>
		{#if expanded}
			<path d="m18 15-6-6-6 6" />
		{:else}
			<path d="m6 9 6 6 6-6" />
		{/if}
	</svg>
</button>

<style>
	.forecast-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 12px 16px;
		margin-top: 16px;
		background-color: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		color: #94a3b8;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		max-width: 340px;
		margin-inline: auto;
	}

	.forecast-toggle:hover {
		background-color: rgba(255, 255, 255, 0.08);
		color: #cbd5e1;
	}

	.forecast-toggle.expanded {
		background-color: rgba(165, 180, 252, 0.1);
		border-color: rgba(165, 180, 252, 0.2);
		color: #a5b4fc;
	}

	.chevron {
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}
</style>
